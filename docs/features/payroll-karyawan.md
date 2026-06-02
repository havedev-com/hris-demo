# Fitur: Payroll Karyawan

> [!IMPORTANT]
> **Cakupan PRO Plan**: Modul payroll di PRO Plan mencakup perhitungan gaji pokok, tunjangan, potongan, kasbon, dan lembur. Perhitungan PPh 21 & BPJS secara **otomatis penuh** (auto-calc) adalah fitur **ELITE**. Di PRO Plan, admin menginput nilai PPh 21 dan BPJS secara manual atau semi-otomatis (sistem menyediakan kalkulator bantu, tapi belum auto-fill ke slip).

## Overview

Modul Payroll adalah inti dari sistem ini. Modul ini mengotomasi seluruh proses perhitungan penggajian bulanan — mulai dari agregasi komponen gaji, perhitungan potongan (absensi, kasbon, BPJS), PPh 21, hingga menghasilkan file transfer bank dan slip gaji. Tujuannya adalah menggantikan proses manual di Excel yang rawan error dan memakan waktu.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin Payroll | Menjalankan proses payroll dengan 1 klik | Tidak perlu hitung manual di Excel |
| US-02 | Admin Payroll | Mereview hasil kalkulasi sebelum finalisasi | Bisa koreksi jika ada kesalahan |
| US-03 | Admin Payroll | Menghasilkan file transfer bank (BCA, Mandiri, BRI, dll.) | Transfer gaji massal langsung dari bank |
| US-04 | Admin Payroll | Menghasilkan slip gaji per karyawan | Karyawan bisa melihat rincian gaji mereka |
| US-05 | Manajer Keuangan | Melihat total biaya penggajian per bulan/divisi | Kontrol anggaran payroll |
| US-06 | Admin HR | Import data absensi dari file Biofinger | Data kehadiran otomatis jadi dasar perhitungan |
| US-07 | Karyawan | Melihat slip gaji digital saya | Tidak perlu minta ke HR |

---

## Functional Requirements

### 1. Siklus Payroll Bulanan
- **Draft** → **Review** → **Approved** → **Paid**
- Admin bisa membuka/menutup periode payroll
- Lock payroll setelah disetujui (tidak bisa diubah tanpa re-open)
- Multi-periode dalam setahun (biasanya 12x, tapi bisa konfigurasi)
- Tanggal cut-off absensi yang bisa dikonfigurasi (mis. tanggal 25 bulan lalu s/d 24 bulan ini)

### 2. Komponen Penghasilan
- **Gaji Pokok** — dari data master karyawan
- **Tunjangan Tetap** — tunjangan jabatan, transport, makan, perumahan (dari master)
- **Tunjangan Tidak Tetap** — lembur, insentif, bonus (input atau otomatis dari modul lembur)
- **THR** — dihitung otomatis saat bulan Ramadan/Lebaran (lihat modul Lembur & THR)

### 3. Komponen Potongan
- **Potongan Absensi** — absen tanpa izin: `(gaji_pokok / hari_kerja_bulan) × hari_absen`
- **Potongan Unpaid Leave** — dari modul cuti
- **Potongan Keterlambatan** — (opsional, dikonfigurasi per perusahaan)
- **Iuran BPJS Kesehatan** — 1% dari gaji (bagian karyawan), maks. gaji Rp 12 juta
- **Iuran BPJS Ketenagakerjaan** — JHT 2%, JP 1% (bagian karyawan)
- **PPh 21** — kalkulasi otomatis (lihat seksi PPh 21)
- **Cicilan Kasbon** — dari modul kasbon, cicilan bulan berjalan
- **Potongan Lain** — koperasi, dll. (dari master komponen)

### 4. Perhitungan PPh 21

> [!NOTE]
> Kalkulasi PPh 21 penuh otomatis (TER) adalah fitur **ELITE Plan**. Di PRO Plan, sistem menyediakan kalkulator bantu PPh 21, namun admin tetap mereview dan menginput nilai final secara manual.

Sistem mendukung 3 metode:
- **Gross** — PPh dipotong dari penghasilan karyawan
- **Net (Ditanggung Perusahaan)** — PPh ditanggung perusahaan, tidak memotong take-home pay
- **Gross-up** — Gaji di-gross-up sehingga take-home pay sama, PPh dari selisihnya

Langkah kalkulasi (TER — Tarif Efektif Rata-rata, aturan PMK 168/2023):
1. Hitung **Penghasilan Bruto** (gaji pokok + tunjangan + lembur + premi BPJS perusahaan)
2. Kurangi pengurang: biaya jabatan (5%, maks. Rp 6 juta/tahun), iuran pensiun/JHT karyawan
3. **Penghasilan Neto** = Bruto - Pengurang
4. **Penghasilan Neto Disetahunkan**
5. Kurangi **PTKP** sesuai status (TK/0, K/0, K/1, K/2, K/3)
6. **PKP (Penghasilan Kena Pajak)**
7. Hitung pajak menggunakan **tarif progresif** atau **TER**:
   - s/d Rp 60 juta: 5%
   - Rp 60–250 juta: 15%
   - Rp 250–500 juta: 25%
   - Rp 500 juta–5 miliar: 30%
   - > Rp 5 miliar: 35%
8. PPh 21 bulanan = pajak tahunan / 12

### 5. BPJS Perusahaan

> [!NOTE]
> Perhitungan iuran BPJS otomatis penuh adalah fitur **ELITE Plan**. Di PRO Plan, nilai iuran BPJS diinput manual oleh admin berdasarkan persentase standar.
- **BPJS Kesehatan**: 4% dari gaji (ditanggung perusahaan), 1% karyawan
- **JHT**: 3.7% perusahaan, 2% karyawan
- **JKK**: 0.24% – 1.74% (sesuai risiko pekerjaan, perusahaan)
- **JKM**: 0.3% (perusahaan)
- **JP**: 2% perusahaan, 1% karyawan

### 6. Import Absensi (Biofinger)
- Upload file hasil ekspor Biofinger (Excel/CSV/TXT)
- Mapping kolom: NIK karyawan, tanggal, jam masuk, jam keluar
- Sistem rekap otomatis: total hari hadir, hari absen, jam lembur
- Preview data sebelum konfirmasi import
- Error report untuk data yang tidak cocok (NIK tidak ditemukan, dll.)

### 7. Output
- **Slip Gaji Digital** — per karyawan, bisa diunduh PDF
- **File Transfer Bank** — format sesuai bank (BCA, Mandiri, BRI, BNI, dll.)
- **Rekap Payroll** — per divisi/departemen
- **Laporan BPJS** — untuk pelaporan ke BPJS Kesehatan & Ketenagakerjaan
- **Laporan PPh 21** — formulir 1721-A1

---

## Data Model (Draft)

```
PayrollPeriod
├── id, month, year, status (enum: draft, review, approved, paid)
├── cut_off_start, cut_off_end
├── pay_date
├── locked_at, locked_by

PayrollEntry
├── id, period_id, employee_id
├── working_days (int) — hari kerja bulan ini
├── present_days, absent_days, late_days
├── gross_income (decimal)
├── total_deductions (decimal)
├── pph21 (decimal)
├── net_income (decimal)
├── status (enum: draft, finalized)

PayrollComponent
├── id, payroll_entry_id, component_id
├── amount, type (enum: income, deduction)

AttendanceImport
├── id, period_id, file_url, imported_at, imported_by
├── total_rows, success_rows, error_rows
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/payroll` | Daftar periode payroll, status, tombol mulai proses |
| `/payroll/:period_id` | Detail periode: list karyawan, status kalkulasi, tombol review & approve |
| `/payroll/:period_id/karyawan/:id` | Detail kalkulasi gaji 1 karyawan — semua komponen rinci |
| `/payroll/:period_id/import-absensi` | Upload file Biofinger, preview, konfirmasi |
| `/payroll/:period_id/output` | Download slip gaji, file bank, laporan BPJS, laporan pajak |
| `/payroll/riwayat` | Riwayat periode payroll yang sudah selesai |

---

## Business Rules

1. **Hari Kerja Bulan**: Dihitung dari kalender kerja minus hari libur nasional & cuti bersama yang dikonfigurasi.
2. **Lock Payroll**: Setelah status `approved`, tidak ada perubahan data. Harus di-unlock (dengan catatan alasan) untuk koreksi.
3. **BPJS Batas Upah**: Perhitungan BPJS dibatasi pada batas upah atas yang ditetapkan pemerintah (update berkala).
4. **PPh 21 Kumulatif**: Perhitungan PPh 21 mempertimbangkan akumulasi penghasilan kena pajak dari Januari s/d bulan berjalan untuk akurasi.
5. **Karyawan Baru/Resign**: Gaji prorated (dihitung proporsional) berdasarkan tanggal join/resign dalam bulan berjalan.
6. **Format Bank**: Format file transfer disesuaikan per bank. Sistem menyimpan template format per bank rekanan.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Manajemen Karyawan** | Data gaji, komponen, metode pajak, rekening bank, status BPJS |
| **Presensi/Biofinger** | Import data kehadiran sebagai dasar kalkulasi potongan absensi |
| **Cuti & Izin** | Data unpaid leave untuk potongan gaji |
| **Lembur & THR** | Data jam lembur & THR sebagai komponen penghasilan tambahan |
| **Kasbon** | Cicilan kasbon sebagai komponen potongan |
| **Slip Gaji** | Generate PDF slip gaji dari data payroll entry |
