# Fitur: Kasbon Karyawan

## Overview

Modul Kasbon Karyawan memfasilitasi pengajuan pinjaman/uang muka gaji oleh karyawan kepada perusahaan. Cicilan kasbon dipotong otomatis dari gaji bulanan sesuai kesepakatan. Modul ini memberikan transparansi bagi karyawan dan kontrol penuh bagi HR/Keuangan atas saldo kasbon yang beredar.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Karyawan | Mengajukan kasbon secara online | Tidak perlu datang ke HR/Keuangan |
| US-02 | Karyawan | Melihat sisa saldo kasbon saya | Tahu berapa yang masih dipotong dari gaji |
| US-03 | Manajer/HRD | Menyetujui atau menolak pengajuan kasbon | Kontrol atas kasbon yang diberikan |
| US-04 | Admin Keuangan | Melihat total kasbon yang beredar | Monitoring arus kas perusahaan |
| US-05 | Admin Payroll | Memastikan cicilan kasbon terpotong otomatis setiap bulan | Tidak perlu input manual ke payroll |
| US-06 | Admin Keuangan | Melakukan pelunasan kasbon lebih awal | Fleksibel jika karyawan ingin melunasi sekaligus |

---

## Functional Requirements

### 1. Pengajuan Kasbon
- Karyawan memilih nominal kasbon yang diinginkan
- Input alasan pengajuan
- Sistem validasi:
  - Apakah karyawan eligible (mis. sudah bekerja minimal 3 bulan)
  - Apakah total kasbon aktif belum melebihi batas maksimum (mis. maks. 3x gaji pokok)
  - Apakah tidak ada kasbon lain yang sedang berjalan (jika perusahaan hanya izinkan 1 kasbon aktif)
- Tentukan skema cicilan yang diinginkan (jumlah bulan angsuran)
- Status: **Draft → Pending → Disetujui / Ditolak**

### 2. Alur Persetujuan

> [!NOTE]
> **Approval Bertingkat** (multi-level approval chain berdasarkan nominal) adalah fitur **ELITE Plan**. Di PRO Plan, approval kasbon menggunakan **1 level** (atasan langsung saja).

- Notifikasi ke atasan langsung saat ada pengajuan baru
- Approver bisa setuju atau tolak dengan catatan
- Karyawan mendapat notifikasi saat status berubah

### 3. Skema Cicilan
- Nominal kasbon dibagi merata ke sejumlah bulan yang disepakati
- Sistem generate jadwal cicilan otomatis: bulan ke-1, ke-2, dst.
- Admin bisa ubah jadwal cicilan jika ada kesepakatan baru
- Sistem tandai cicilan yang sudah terpotong vs. yang akan datang

### 4. Integrasi dengan Payroll
- Saat payroll bulan berjalan diproses, sistem otomatis menghitung cicilan kasbon yang jatuh tempo
- Cicilan masuk sebagai komponen potongan di slip gaji karyawan
- Saldo kasbon berkurang otomatis setelah payroll difinalisasi

### 5. Pelunasan Awal (Early Settlement)
- Admin keuangan bisa mencatat pelunasan kasbon lebih awal (karyawan bayar tunai)
- Sisa saldo kasbon langsung lunas, tidak ada cicilan berikutnya di payroll

### 6. Laporan Kasbon
- Daftar kasbon aktif dengan saldo outstanding
- Riwayat cicilan per karyawan
- Total exposure kasbon perusahaan
- Filter per divisi/periode

---

## Data Model (Draft)

```
KasbonRequest
├── id, employee_id
├── amount (decimal) — nominal kasbon
├── reason (text)
├── installment_months (int) — jumlah bulan angsuran
├── monthly_installment (decimal) — amount / installment_months
├── disbursement_date (date, nullable) — tanggal kasbon cair
├── status (enum: draft, pending, approved, rejected, disbursed, settled)
├── created_at

KasbonApproval
├── id, kasbon_request_id, approver_id, level (int)
├── status (enum: pending, approved, rejected)
├── notes, acted_at

KasbonInstallment
├── id, kasbon_request_id
├── installment_number (int) — cicilan ke-N
├── due_month, due_year
├── amount (decimal)
├── status (enum: pending, deducted, paid_cash)
├── payroll_period_id (nullable) — diisi saat payroll diproses
├── deducted_at
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/keuangan/kasbon` | Dashboard kasbon: kasbon aktif saya, saldo, tombol ajukan |
| `/keuangan/kasbon/ajukan` | Form pengajuan kasbon baru |
| `/keuangan/kasbon/:id` | Detail kasbon: status approval, jadwal cicilan |
| `/keuangan/kasbon/kelola` | Admin view: semua kasbon aktif, outstanding, filter |
| `/keuangan/kasbon/approval` | Inbox approval untuk atasan/HR/Keuangan |
| `/keuangan/kasbon/laporan` | Laporan rekapitulasi kasbon |

---

## Business Rules

1. **Batas Maksimum**: Total kasbon aktif per karyawan tidak melebihi batas yang dikonfigurasi (default: 3x gaji pokok atau nominal tetap).
2. **Satu Kasbon Aktif**: Perusahaan bisa mengatur agar karyawan hanya boleh punya 1 kasbon aktif sekaligus. Jika masih ada kasbon berjalan, pengajuan baru ditolak secara sistem.
3. **Eligibilitas**: Karyawan baru (< masa kerja minimum yang dikonfigurasi) tidak bisa mengajukan kasbon.
4. **Cicilan Tidak Melebihi Take-Home Pay**: Sistem memperingatkan jika cicilan kasbon + potongan lain melebihi 50% take-home pay (aturan umum).
5. **Resign/PHK**: Jika karyawan resign/PHK, sisa kasbon dipotong sekaligus dari gaji terakhir. Jika gaji terakhir tidak mencukupi, dicatat sebagai piutang dan diproses secara terpisah.
6. **Pencatatan Akuntansi**: Setiap pencairan kasbon dicatat sebagai piutang karyawan. Setiap cicilan mengurangi piutang tersebut.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Payroll** | Cicilan kasbon bulan berjalan masuk sebagai komponen potongan di payroll |
| **Manajemen Karyawan** | Validasi masa kerja, gaji pokok (untuk hitung batas maksimum) |
| **Keuangan/Akuntansi** | Jurnal pencairan kasbon (debet piutang karyawan, kredit kas) dan jurnal pelunasan cicilan |
| **Notifikasi** | Notifikasi status pengajuan ke karyawan & approver |
