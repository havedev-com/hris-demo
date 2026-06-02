# Fitur: Cuti & Izin

## Overview

Modul Cuti & Izin mengelola seluruh proses pengajuan, persetujuan, dan pencatatan cuti dan izin karyawan. Sistem ini memastikan saldo cuti selalu up-to-date dan terintegrasi langsung dengan perhitungan payroll — potongan gaji untuk absensi tanpa izin dihitung secara otomatis.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Karyawan | Mengajukan cuti tahunan secara online | Tidak perlu mengisi form fisik |
| US-02 | Karyawan | Melihat sisa saldo cuti saya | Bisa merencanakan cuti dengan tepat |
| US-03 | Atasan | Menerima notifikasi dan menyetujui/menolak pengajuan cuti bawahan | Proses persetujuan lebih cepat |
| US-04 | Admin HR | Melihat kalender cuti seluruh karyawan | Memastikan tidak ada kekosongan tim kritis |
| US-05 | Admin HR | Mengatur jenis cuti dan kuota per jenis | Menyesuaikan kebijakan perusahaan |
| US-06 | Admin HR | Melakukan penyesuaian saldo cuti manual | Menangani kasus khusus (carry-over, koreksi) |
| US-07 | Payroll | Mendapatkan data izin tidak berbayar (unpaid leave) | Menghitung potongan gaji yang akurat |

---

## Functional Requirements

### 1. Jenis Cuti & Izin
- **Cuti Tahunan** — kuota sesuai UU (minimal 12 hari/tahun setelah 1 tahun masa kerja)
- **Cuti Sakit** — dengan/tanpa surat dokter, batas hari tertentu
- **Cuti Melahirkan / Maternitas** — 3 bulan (UU Ketenagakerjaan)
- **Cuti Paternitas** — 2 hari untuk suami istri melahirkan
- **Cuti Khusus** — menikah, keluarga meninggal, sunatan, dll. (sesuai UU)
- **Izin Tidak Berbayar (Unpaid Leave)** — di luar kuota cuti, memotong gaji
- **Izin Terlambat / Pulang Awal** — tercatat, bisa berpengaruh pada potongan
- **Cuti Bersama** — ditetapkan oleh perusahaan (mengikuti pemerintah atau kebijakan internal)

### 2. Pengajuan Cuti
- Karyawan memilih jenis cuti, tanggal mulai, tanggal selesai
- Upload bukti pendukung (opsional/wajib per jenis cuti, contoh: surat dokter untuk sakit)
- Otomatis hitung jumlah hari kerja efektif (exclude weekend & hari libur nasional)
- Cek saldo cuti — tidak bisa mengajukan melebihi saldo
- Status: **Draft → Pending → Disetujui / Ditolak / Dibatalkan**

### 3. Alur Persetujuan (Approval Workflow)

> [!NOTE]
> **Approval Bertingkat** (multi-level approval chain) adalah fitur **ELITE Plan**. Di PRO Plan, approval cuti menggunakan **1 level** (atasan langsung saja).

- 1 level: Atasan langsung
- Notifikasi email/in-app ke approver saat ada pengajuan baru
- Notifikasi ke karyawan saat status berubah
- Batas waktu approval (SLA), jika terlewat bisa auto-approve atau eskalasi

### 4. Saldo Cuti
- Saldo dihitung otomatis berdasarkan masa kerja (pro-rata untuk karyawan baru)
- Carry-over saldo ke tahun berikutnya (bisa dibatasi maks. N hari)
- Saldo ditampilkan di dashboard karyawan
- Admin bisa adjustment manual dengan catatan alasan

### 5. Kalender Cuti
- Tampilan kalender bulanan/mingguan
- Filter per divisi/tim
- Warna berbeda per jenis cuti
- Tandai hari libur nasional & cuti bersama

### 6. Laporan
- Rekapitulasi saldo cuti per karyawan
- Riwayat penggunaan cuti per periode
- Daftar karyawan cuti hari ini
- Export ke Excel/PDF

---

## Data Model (Draft)

```
LeaveType
├── id, name, code
├── is_paid (boolean) — berbayar atau unpaid leave
├── requires_document (boolean)
├── annual_quota (int, nullable) — null = unlimited
├── max_carry_over (int, nullable)
├── gender_restriction (enum: all, male, female, nullable)

LeaveBalance
├── id, employee_id, leave_type_id, year
├── opening_balance, earned, used, adjusted, closing_balance

LeaveRequest
├── id, employee_id, leave_type_id
├── start_date, end_date, total_days (working days)
├── reason (text)
├── document_url (nullable)
├── status (enum: draft, pending, approved, rejected, cancelled)
├── created_at

LeaveApproval
├── id, leave_request_id, approver_id, level (int)
├── status (enum: pending, approved, rejected)
├── notes, approved_at

PublicHoliday
├── id, date, name, is_national, year
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/kehadiran/izin-cuti` | Dashboard cuti: saldo, pengajuan aktif, riwayat, tombol ajukan cuti |
| `/kehadiran/izin-cuti/ajukan` | Form pengajuan cuti |
| `/kehadiran/izin-cuti/:id` | Detail pengajuan & status approval |
| `/kehadiran/approval-presensi` | Inbox approval untuk atasan — daftar pengajuan pending |
| `/kehadiran/izin-cuti/kalender` | Kalender cuti tim |
| `/pengaturan/jenis-cuti` | Master data jenis cuti (Admin HR) |
| `/pengaturan/hari-libur` | Pengaturan hari libur nasional & cuti bersama |

---

## Business Rules

1. **Hari Kerja Efektif**: Perhitungan jumlah hari cuti tidak menghitung Sabtu, Minggu, dan hari libur nasional yang dikonfigurasi.
2. **Saldo Tidak Cukup**: Sistem menolak pengajuan jika saldo cuti < hari yang diminta. Kecuali jenis cuti "unlimited" (cuti sakit/melahirkan).
3. **Minimum Notice**: Cuti tahunan harus diajukan minimal N hari sebelum tanggal cuti (dikonfigurasi per perusahaan).
4. **Unpaid Leave → Payroll Deduction**: Setiap hari unpaid leave dikonversi ke potongan gaji: `(gaji_pokok / hari_kerja_bulan) × jumlah_hari`.
5. **Carry-over**: Sisa saldo cuti tahunan yang tidak digunakan di-carry-over ke tahun berikutnya, dibatasi `max_carry_over` hari.
6. **Pembulatan Pro-rata**: Karyawan baru mendapat saldo cuti pro-rata dari bulan join: `(12 / 12 - bulan_join + 1) × kuota_tahunan`.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Payroll** | Kirim data unpaid leave & jumlah hari untuk potongan gaji |
| **Presensi** | Validasi: hari yang ada pengajuan izin tidak dihitung absen |
| **Manajemen Karyawan** | Ambil data karyawan, divisi, atasan langsung |
| **Notifikasi** | Trigger email/notifikasi ke approver dan karyawan |
