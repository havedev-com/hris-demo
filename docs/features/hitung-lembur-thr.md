# Fitur: Hitung Lembur & THR Otomatis

> [!IMPORTANT]
> **Cakupan PRO Plan**: Modul ini mencakup perhitungan lembur standar sesuai UU Ketenagakerjaan dan THR dasar (1x gaji / prorated). **THR Progressif** (THR bertahap berdasarkan performa/kebijakan khusus) adalah fitur **ELITE Plan** dan tidak termasuk dalam implementasi ini.

## Overview

Modul ini mengotomasi perhitungan upah lembur berdasarkan aturan Undang-Undang Ketenagakerjaan Indonesia, serta THR (Tunjangan Hari Raya) yang wajib dibayarkan sebelum hari raya Idul Fitri (dan hari raya agama lainnya sesuai kebijakan perusahaan). Data hasil perhitungan modul ini langsung menjadi komponen penghasilan tambahan di payroll.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin HR | Menginput atau mengimpor data jam lembur karyawan | Sistem otomatis hitung upah lembur |
| US-02 | Admin HR | Melihat perhitungan lembur yang transparan per karyawan | Bisa diverifikasi sebelum masuk payroll |
| US-03 | Manajer | Menyetujui laporan lembur bawahan | Kontrol biaya lembur |
| US-04 | Admin Payroll | Menghitung THR seluruh karyawan otomatis | Tidak perlu hitung manual di Excel |
| US-05 | Admin Payroll | Menentukan metode THR (1x gaji atau prorated) per karyawan | Fleksibel sesuai masa kerja |

---

## Functional Requirements

### 1. Lembur (Overtime)

#### Sumber Data Lembur
- **Manual input** — Admin/supervisor menginput jam lembur per karyawan
- **Import dari absensi** — Sistem deteksi otomatis dari data presensi Biofinger (jam pulang > jam kerja normal)
- **Surat Perintah Lembur (SPL)** — Approval lembur sebelum dilakukan (opsional)

#### Aturan Perhitungan Lembur (Kepmenaker No. 102/MEN/VI/2004 & PP 35/2021)

**Lembur Hari Kerja Biasa:**
- Jam ke-1: 1.5x upah per jam
- Jam ke-2 dst: 2x upah per jam

**Lembur Hari Istirahat Mingguan (Sabtu/Minggu, 5 hari kerja):**
- Jam 1-8: 2x upah per jam
- Jam ke-9: 3x upah per jam
- Jam ke-10 dst: 4x upah per jam

**Lembur Hari Libur Nasional:**
- Jatuh pada hari kerja biasa: jam 1-7 = 2x, jam ke-8 = 3x, jam ke-9 dst = 4x
- Jatuh pada hari istirahat: jam 1-8 = 2x, jam ke-9 = 3x, jam ke-10 dst = 4x

#### Formula Upah Per Jam
```
Upah per jam = (1/173) × Upah Sebulan
Upah Sebulan = Gaji Pokok + Tunjangan Tetap
```

#### Batas Waktu Lembur
- Maksimum 4 jam per hari
- Maksimum 18 jam per minggu (UU Cipta Kerja)
- Sistem memberi warning jika melebihi batas

### 2. THR (Tunjangan Hari Raya)

#### Ketentuan Dasar (PP 36/2021)
- **Karyawan ≥ 12 bulan masa kerja**: THR = 1x gaji (gaji pokok + tunjangan tetap)
- **Karyawan < 12 bulan**: THR = (masa kerja dalam bulan / 12) × 1x gaji
- **Karyawan kontrak**: Tetap berhak THR, dihitung prorated

> [!NOTE]
> THR Progressif (pembayaran THR bertahap atau berdasarkan evaluasi performa) adalah fitur **ELITE Plan**. PRO Plan hanya mencakup THR standar sesuai PP 36/2021.

#### Pengaturan THR
- Tentukan agama/hari raya yang diperhitungkan (Idul Fitri, Natal, Waisak, Nyepi, dll.)
- Konfigurasi: apakah THR berdasarkan agama karyawan atau disamakan semua
- Tanggal pembayaran THR (batas: H-7 sebelum hari raya)
- THR bisa masuk dalam payroll reguler atau diproses sebagai payroll terpisah

#### Proses Generate THR
1. Admin memilih periode THR & hari raya yang bersangkutan
2. Sistem otomatis hitung per karyawan berdasarkan masa kerja & gaji
3. Preview & review oleh admin/manager
4. Approve → masuk ke payroll

---

## Data Model (Draft)

```
OvertimeRecord
├── id, employee_id, date
├── overtime_start, overtime_end, total_hours (decimal)
├── overtime_type (enum: weekday, weekend, holiday)
├── approved_by, approved_at
├── status (enum: pending, approved, rejected)
├── payroll_period_id (nullable, diisi saat masuk payroll)
├── calculated_amount (decimal)

OvertimeCalculation
├── id, overtime_record_id
├── hour_bracket (int) — jam ke-berapa
├── multiplier (decimal) — 1.5, 2, 3, 4
├── amount (decimal)

ThrRecord
├── id, employee_id, period_id (atau year + holiday_type)
├── holiday_type (string — Idul Fitri, Natal, dll.)
├── religion (string)
├── service_months (int)
├── base_salary (decimal)
├── thr_amount (decimal)
├── status (enum: draft, approved, paid)
├── paid_date
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/payroll/lembur` | Daftar record lembur bulanan, filter per periode/karyawan |
| `/payroll/lembur/input` | Form input lembur manual per karyawan atau bulk |
| `/payroll/lembur/import` | Import data lembur dari file |
| `/payroll/lembur/:id` | Detail perhitungan lembur — breakdown per jam & tarif |
| `/payroll/thr` | Generate THR — pilih periode, preview, approve |
| `/payroll/thr/:period_id` | Daftar THR per karyawan dengan breakdown |

---

## Business Rules

1. **Upah Sebulan untuk Lembur**: Hanya memperhitungkan gaji pokok + tunjangan tetap (bukan bonus/lembur bulan lalu).
2. **Pembulatan Jam**: Jam lembur dibulatkan ke 0.5 jam terdekat atau per jam penuh (dikonfigurasi perusahaan).
3. **Lembur Minimum**: Beberapa perusahaan menerapkan minimum lembur (mis. 1 jam) sebelum dihitung. Bisa dikonfigurasi.
4. **THR Prorated Penghitungan Bulan**: Masa kerja dihitung dalam bulan penuh. Sisa hari dalam bulan tidak dihitung.
5. **Pajak THR**: THR merupakan penghasilan tidak teratur. PPh 21-nya digabungkan dalam perhitungan pajak tahunan bulan dibayarkannya THR (bukan disetahunkan tersendiri).
6. **Batas Bayar THR**: Sistem memberikan notifikasi jika THR belum di-approve H-14 sebelum hari raya.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Presensi/Biofinger** | Sumber data jam masuk/pulang untuk deteksi otomatis lembur |
| **Manajemen Karyawan** | Gaji pokok, tunjangan tetap, masa kerja, tanggal join |
| **Payroll** | Output berupa komponen penghasilan tambahan di slip gaji |
| **Kalender Kerja** | Menentukan apakah hari lembur adalah hari kerja biasa, libur mingguan, atau libur nasional |
