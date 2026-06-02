# Fitur: Manajemen Karyawan

## Overview

Modul Manajemen Karyawan adalah inti dari sistem HRIS Bumi Indah. Modul ini menyimpan dan mengelola seluruh data master karyawan yang menjadi dasar dari semua perhitungan payroll, absensi, cuti, dan pelaporan lainnya. Data yang akurat di sini memastikan keakuratan seluruh proses bisnis HR.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin HR | Menambah karyawan baru dengan data lengkap | Data langsung bisa dipakai untuk payroll bulan pertama |
| US-02 | Admin HR | Mengedit data karyawan yang berubah (rekening, status pajak, dll.) | Perhitungan payroll selalu menggunakan data terkini |
| US-03 | Admin HR | Menonaktifkan karyawan yang resign/PHK | Karyawan tidak ikut dalam proses payroll bulan berikutnya |
| US-04 | Manajer | Melihat daftar seluruh karyawan aktif dengan filter divisi/jabatan | Mendapatkan gambaran cepat struktur tim |
| US-05 | Admin HR | Mengimpor data karyawan dari file Excel/CSV | Onboarding massal lebih efisien |
| US-06 | Admin HR | Mengekspor data karyawan ke Excel | Kebutuhan pelaporan dan backup data |

---

## Functional Requirements

### 1. Data Demografi Karyawan
- **NIK** (Nomor Induk Karyawan) — unik, auto-generate atau manual
- Nama lengkap sesuai KTP
- Foto profil
- Tanggal lahir & jenis kelamin
- Nomor KTP / NIK Dukcapil
- Nomor NPWP
- Nomor BPJS Kesehatan & BPJS Ketenagakerjaan
- Alamat domisili & alamat KTP
- Nomor telepon & email
- Status pernikahan (TK/K/K-1/K-2/K-3)
- Jumlah tanggungan (untuk PTKP)

### 2. Data Pekerjaan
- Tanggal mulai kerja (join date)
- Status karyawan: Tetap / Kontrak / Probasi / Paruh Waktu
- Tanggal berakhir kontrak (jika kontrak)
- Divisi / Departemen
- Jabatan / Posisi
- Golongan / Grade
- Lokasi kerja / cabang
- Atasan langsung (supervisor)
- Shift kerja yang berlaku

### 3. Data Keuangan & Penggajian
- Bank rekening gaji (nama bank, nomor rekening, nama pemilik rekening)
- Gaji pokok
- Komponen tunjangan tetap (tunjangan jabatan, transport, makan, dll.)
- Komponen tunjangan tidak tetap (lembur, insentif)
- Komponen potongan tetap (koperasi, cicilan internal)
- Metode pajak PPh 21: Gross / Net / Gross-up
- Status BPJS: ikut / tidak ikut (Kesehatan & Ketenagakerjaan)

### 4. Riwayat Karyawan
- Riwayat jabatan (mutasi, promosi, demosi) dengan tanggal efektif
- Riwayat perubahan gaji
- Riwayat kontrak
- Riwayat status karyawan

### 5. Dokumen Karyawan
- Upload dokumen: KTP, NPWP, Ijazah, Kontrak Kerja, dll.
- Tanggal upload & kadaluarsa dokumen

### 6. Status Karyawan
- **Aktif** — diikutsertakan dalam payroll
- **Nonaktif** — tidak diikutsertakan payroll (resign, PHK, cuti panjang)
- **Probasi** — bisa diberi aturan gaji/benefit berbeda

---

## Data Model (Draft)

```
Employee
├── id (UUID)
├── nik (string, unique)
├── full_name (string)
├── ktp_number (string)
├── npwp_number (string, nullable)
├── bpjs_kesehatan_number (string, nullable)
├── bpjs_ketenagakerjaan_number (string, nullable)
├── birth_date (date)
├── gender (enum: male, female)
├── marital_status (enum: TK, K, K1, K2, K3)
├── dependents (int, 0-3)
├── address_ktp (text)
├── address_domicile (text)
├── phone (string)
├── email (string)
├── photo_url (string, nullable)
├── join_date (date)
├── end_date (date, nullable)
├── status (enum: active, inactive, probation, part_time)
├── employment_type (enum: permanent, contract, probation, part_time)
├── department_id → Department
├── position_id → Position
├── grade_id → Grade
├── branch_id → Branch
├── supervisor_id → Employee (self-ref)
├── shift_id → Shift
├── tax_method (enum: gross, net, gross_up)
├── base_salary (decimal)
├── bank_name (string)
├── bank_account_number (string)
├── bank_account_name (string)
├── created_at, updated_at

EmployeeSalaryComponent
├── id, employee_id, component_id, amount, effective_date

EmployeeHistory
├── id, employee_id, change_type, old_value, new_value, effective_date, notes

EmployeeDocument
├── id, employee_id, document_type, file_url, upload_date, expiry_date
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/karyawan` | Daftar karyawan dengan filter (status, divisi, jabatan), search, pagination |
| `/karyawan/tambah` | Form tambah karyawan baru (multi-step: Demografi → Pekerjaan → Keuangan) |
| `/karyawan/:id` | Detail karyawan — tab: Profil, Pekerjaan, Penggajian, Riwayat, Dokumen |
| `/karyawan/:id/edit` | Edit data karyawan |
| `/karyawan/import` | Import massal via file Excel/CSV + template download |
| `/karyawan/export` | Export data ke Excel |

---

## Business Rules

1. **NIK Unik**: Tidak boleh ada 2 karyawan dengan NIK yang sama.
2. **PTKP Otomatis**: Status PTKP (TK/0, K/0, K/1, dst.) dihitung otomatis dari `marital_status` + `dependents`.
3. **Karyawan Nonaktif**: Karyawan dengan status `inactive` tidak muncul di proses payroll bulan berjalan. Tetap bisa diakses untuk riwayat.
4. **Tanggal Kontrak**: Sistem memberikan notifikasi H-30 sebelum kontrak berakhir.
5. **Perubahan Gaji**: Setiap perubahan `base_salary` atau komponen gaji harus dicatat di `EmployeeHistory` dengan `effective_date`.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Payroll** | Ambil data gaji pokok, komponen, status pajak, rekening bank |
| **Presensi** | Ambil data shift & jadwal kerja karyawan |
| **Cuti & Izin** | Ambil sisa cuti berdasarkan join date & kebijakan |
| **Kasbon** | Ambil data karyawan untuk pengajuan kasbon |
| **BPJS** | Ambil nomor BPJS & status keikutsertaan untuk laporan iuran |
| **Rekrutmen** | Convert kandidat yang diterima menjadi karyawan baru |
