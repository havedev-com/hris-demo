# Fitur: Setting Layout Slip Gaji

## Overview

Modul Setting Layout Slip Gaji memungkinkan Admin HR untuk mengkustomisasi tampilan dan konten slip gaji yang akan diterima karyawan. Perusahaan bisa menentukan komponen apa saja yang ditampilkan, urutan komponennya, branding perusahaan (logo, nama, alamat), serta format output (PDF/digital). Slip gaji yang baik meningkatkan kepercayaan karyawan dan memudahkan verifikasi pemotongan.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin HR | Mengatur logo dan identitas perusahaan di slip gaji | Slip gaji terlihat profesional dan branded |
| US-02 | Admin HR | Memilih komponen penghasilan & potongan apa yang ditampilkan | Hanya informasi yang relevan yang tertera |
| US-03 | Admin HR | Mengatur urutan komponen di slip gaji | Konsisten dan mudah dibaca karyawan |
| US-04 | Admin HR | Preview tampilan slip gaji sebelum di-publish | Pastikan layout sudah benar |
| US-05 | Karyawan | Melihat slip gaji digital di sistem | Tidak perlu minta fisik ke HR |
| US-06 | Admin HR | Mengirim slip gaji ke email karyawan massal | Distribusi otomatis setelah payroll selesai |
| US-07 | Admin HR | Mengatur apakah slip gaji bisa diunduh oleh karyawan | Kontrol keamanan data |

---

## Functional Requirements

### 1. Identitas Perusahaan
- Upload logo perusahaan (PNG/JPG, ditampilkan di header slip)
- Nama perusahaan, alamat, nomor telepon, website
- Kalimat header/footer custom (mis. "Slip gaji ini dicetak secara otomatis")

### 2. Komponen yang Ditampilkan

Admin bisa toggle on/off setiap komponen:

**Seksi Informasi Karyawan:**
- Nama karyawan
- NIK karyawan
- Jabatan & Divisi
- Nomor rekening bank
- Periode gaji
- Tanggal pembayaran

**Seksi Penghasilan:**
- Gaji pokok
- Tunjangan jabatan
- Tunjangan transport
- Tunjangan makan
- Tunjangan perumahan
- Lembur
- Bonus/Insentif
- THR (jika bulan THR)
- Total Penghasilan Bruto

**Seksi Potongan:**
- BPJS Kesehatan (karyawan)
- BPJS Ketenagakerjaan — JHT
- BPJS Ketenagakerjaan — JP
- PPh 21
- Potongan absensi/keterlambatan
- Cicilan kasbon
- Potongan lain-lain
- Total Potongan

**Seksi Kontribusi Perusahaan** (opsional, bisa disembunyikan):
- BPJS Kesehatan (perusahaan)
- JKK, JKM, JHT perusahaan

**Seksi Summary:**
- Total Gaji Bersih (Take-Home Pay)

### 3. Pengaturan Urutan Komponen
- Drag-and-drop urutan komponen dalam setiap seksi
- Urutan tersimpan dan berlaku untuk semua slip gaji periode berikutnya

### 4. Label Komponen Custom
- Ganti nama tampilan komponen (mis. "Tunjangan Transport" → "Uang Transport")
- Tanpa mengubah nama internal sistem

### 5. Desain Visual
- Pilih tema warna (primary color untuk header/aksen)
- Font style: minimal, modern, formal
- Tampilan 2 kolom (penghasilan kiri, potongan kanan) atau 1 kolom penuh

### 6. Preview & Publish
- Preview slip gaji sample sebelum save (dengan data dummy)
- Preview dengan data karyawan nyata dari payroll terakhir
- Simpan sebagai template aktif

### 7. Distribusi Slip Gaji
- Karyawan bisa lihat & download slip dari portal karyawan
- Admin bisa kirim massal via email setelah payroll finalized
- Opsi: proteksi PDF dengan password (default: tanggal lahir karyawan)
- Log pengiriman email (berhasil/gagal per karyawan)

### 8. Riwayat Slip Gaji
- Semua slip gaji tersimpan per periode
- Karyawan bisa akses riwayat min. 12 bulan ke belakang
- Admin bisa regenerate slip gaji lama jika ada perubahan template

---

## Data Model (Draft)

```
PayslipTemplate
├── id, name, is_active (boolean)
├── company_logo_url
├── company_name, company_address, company_phone
├── header_text, footer_text
├── color_primary (hex), font_style (enum: minimal, formal)
├── layout (enum: two_column, single_column)
├── show_employer_bpjs (boolean)
├── created_at, updated_at

PayslipTemplateComponent
├── id, template_id, component_id
├── is_visible (boolean)
├── display_label (string) — override nama tampilan
├── section (enum: income, deduction, employer, summary)
├── sort_order (int)

Payslip (generated per karyawan per periode)
├── id, employee_id, payroll_period_id
├── template_id (snapshot saat generate)
├── pdf_url
├── sent_at (nullable)
├── send_status (enum: pending, sent, failed)
├── generated_at
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/pengaturan/slip-gaji` | Halaman utama pengaturan: identitas perusahaan, template aktif |
| `/pengaturan/slip-gaji/komponen` | Toggle & urutkan komponen yang ditampilkan (drag-drop) |
| `/pengaturan/slip-gaji/desain` | Pilih tema warna, font, layout |
| `/pengaturan/slip-gaji/preview` | Preview tampilan slip gaji dengan data sample |
| `/payroll/:period_id/distribusi` | Kirim slip gaji massal via email setelah payroll approved |
| `/karyawan/slip-gaji` | Portal karyawan: daftar & download slip gaji per bulan |

---

## Business Rules

1. **Template Aktif**: Hanya boleh ada 1 template aktif dalam satu waktu. Mengaktifkan template baru otomatis menonaktifkan yang lama.
2. **Snapshot Template**: Saat slip gaji digenerate, konfigurasi template di-snapshot. Perubahan template ke depan tidak mengubah slip lama.
3. **Komponen Wajib**: "Total Gaji Bersih" dan "Periode Gaji" tidak bisa disembunyikan — wajib tampil di semua slip.
4. **Password PDF**: Default password = tanggal lahir karyawan format DDMMYYYY (mis. 15051990). Bisa dikonfigurasi per perusahaan.
5. **Regenerate**: Regenerate slip gaji lama hanya bisa dilakukan oleh Admin HR dengan pencatatan alasan.
6. **Akses Karyawan**: Karyawan hanya bisa akses slip gajinya sendiri. Tidak bisa akses slip karyawan lain.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Payroll** | Data kalkulasi gaji (semua komponen & nominal) digunakan untuk populate slip |
| **Manajemen Karyawan** | Data identitas karyawan (nama, NIK, jabatan, rekening) di header slip |
| **Email/Notifikasi** | Pengiriman slip via email ke alamat karyawan |
| **Hak Akses** | Kontrol siapa yang bisa lihat, download, dan edit template slip gaji |
