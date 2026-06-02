# Fitur: Manajemen Karir, Klien, & Tugas

> [!IMPORTANT]
> **Cakupan PRO Plan**: Modul ini mencakup manajemen karir (promosi/mutasi/demosi), kunjungan klien dengan GPS check-in, dan manajemen tugas dasar. Fitur **KPI** dan **Evaluasi Performa** (formulir evaluasi 360°, scoring KPI) adalah fitur **CHAMPION Plan** dan tidak diimplementasikan.

## Overview

Modul ini mencakup tiga sub-fitur yang saling berkaitan dalam manajemen operasional SDM:

1. **Manajemen Karir** — mengelola perjalanan karir karyawan: promosi, demosi, mutasi, dan evaluasi performa.
2. **Manajemen Klien & Kunjungan** — mencatat kunjungan karyawan ke lokasi klien untuk keperluan laporan dan verifikasi kehadiran di luar kantor.
3. **Manajemen Tugas** — distribusi dan monitoring tugas harian/mingguan karyawan, terintegrasi dengan KPI dan evaluasi performa.

---

## User Stories

### Manajemen Karir

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin HR | Mencatat promosi/mutasi karyawan beserta perubahan gaji | Riwayat karir terdokumentasi |
| US-02 | Manajer | Mengajukan rekomendasi promosi bawahan | HR bisa proses lebih cepat |
| US-03 | Karyawan | Melihat riwayat karir dan perkembangan saya | Transparansi jenjang karir |
| US-04 | Admin HR | Membuat struktur organisasi yang dinamis | Mudah disesuaikan jika ada restrukturisasi |

### Manajemen Klien & Kunjungan

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-05 | Sales/Field Staff | Check-in dan check-out saat kunjungan klien | Kunjungan tercatat otomatis dengan lokasi GPS |
| US-06 | Manajer | Melihat rekap kunjungan klien tim saya | Monitoring aktivitas lapangan |
| US-07 | Admin HR | Memvalidasi kunjungan klien sebagai kehadiran | Tidak dihitung absen padahal kerja di lapangan |

### Manajemen Tugas

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-08 | Manajer | Membuat dan mendelegasikan tugas ke anggota tim | Tugas terdistribusi dengan jelas |
| US-09 | Karyawan | Melihat daftar tugas saya hari ini | Prioritas pekerjaan lebih jelas |
| US-10 | Manajer | Memantau progres penyelesaian tugas | Deteksi bottleneck lebih awal |
| US-11 | Admin HR | Mengambil data penyelesaian tugas untuk evaluasi KPI | Penilaian kinerja lebih objektif |

---

## Functional Requirements

### 1. Manajemen Karir

#### Jenis Perubahan Karir
- **Promosi** — kenaikan jabatan (+ perubahan gaji)
- **Demosi** — penurunan jabatan
- **Mutasi** — perpindahan divisi/cabang tanpa perubahan jabatan
- **Rotasi** — perpindahan sementara
- **Kontrak Baru / Perpanjangan** — perubahan status karyawan
- **Resign / PHK** — penonaktifan karyawan

#### Proses
- Buat dokumen perubahan karir dengan tanggal efektif
- Lampirkan dokumen pendukung (SK, surat mutasi, dll.)
- Persetujuan digital (HR Manager + Direktur untuk promosi/PHK)
- Setelah approved + tanggal efektif tercapai → data karyawan diperbarui otomatis
- Riwayat tersimpan di profil karyawan

#### Struktur Organisasi
- Visualisasi org chart berbasis data jabatan & atasan
- Update otomatis saat ada mutasi/promosi

### 2. Manajemen Klien & Kunjungan

#### Master Data Klien
- Nama klien, alamat, kontak PIC
- Kategori/jenis klien
- Karyawan yang bertanggung jawab (account manager)

#### Kunjungan Klien
- Karyawan membuat rencana kunjungan (visit plan)
- Check-in: timestamp + koordinat GPS (via mobile browser/app)
- Check-out: timestamp + koordinat GPS
- Upload foto/catatan kunjungan
- Status: Planned → In Progress → Completed → Validated

#### Validasi & Laporan
- Atasan memvalidasi kunjungan yang sudah dilakukan
- Kunjungan tervalidasi dihitung sebagai kehadiran (tidak absen)
- Laporan: jumlah kunjungan per karyawan/klien/periode
- Integrasi dengan fitur Pelacakan Lokasi untuk validasi GPS

### 3. Manajemen Tugas

#### Pembuatan Tugas
- Judul, deskripsi, prioritas (high/medium/low)
- Assign ke karyawan (bisa 1 atau lebih)
- Deadline
- Attachment file pendukung
- Label/kategori tugas

#### Siklus Tugas
- Status: **Todo → In Progress → Review → Done → Cancelled**
- Karyawan update status secara mandiri
- Manajer bisa request revision (kembali ke In Progress)
- Komentar/diskusi per tugas

#### KPI & Evaluasi

> [!NOTE]
> Fitur KPI scoring dan Evaluasi Performa (formulir evaluasi, penilaian 360°) adalah fitur **CHAMPION Plan**. Di PRO Plan, tugas bisa ditandai selesai/tidak selesai untuk tracking dasar, tapi tanpa scoring KPI.

- Setiap tugas bisa dikaitkan dengan target KPI
- Laporan penyelesaian tugas per karyawan: on-time, late, cancelled
- Data ini dipakai dalam formulir evaluasi performa

#### Formulir Evaluasi

> [!NOTE]
> Formulir evaluasi kustomisasi adalah fitur **CHAMPION Plan**.

- Template evaluasi yang bisa dikustomisasi (360°, atasan ke bawahan, dll.)
- Jadwal evaluasi periodik (bulanan/kuartal/tahunan)
- Hasil evaluasi tersimpan di profil karyawan

---

## Data Model (Draft)

```
CareerChange
├── id, employee_id, change_type (enum: promotion, demotion, mutation, resignation, termination)
├── from_position_id, to_position_id
├── from_department_id, to_department_id
├── from_salary, to_salary
├── effective_date, reason, document_url
├── status (enum: draft, approved, effective)

Client
├── id, name, address, phone, pic_name, category
├── assigned_employee_ids (array)

ClientVisit
├── id, employee_id, client_id
├── planned_date, planned_notes
├── checkin_at, checkin_lat, checkin_lng
├── checkout_at, checkout_lat, checkout_lng
├── visit_notes, photo_url
├── status (enum: planned, in_progress, completed, validated, rejected)
├── validated_by, validated_at

Task
├── id, title, description, priority (enum: high, medium, low)
├── assigned_to (array of employee_ids)
├── created_by, deadline
├── status (enum: todo, in_progress, review, done, cancelled)
├── kpi_id (nullable)
├── created_at, updated_at

TaskComment
├── id, task_id, employee_id, message, attachment_url, created_at

KPI
├── id, employee_id, period (month+year)
├── target_description, target_value, actual_value
├── score (decimal), notes

EvaluationForm
├── id, employee_id, evaluator_id, period
├── template_id, responses (JSON), total_score
├── submitted_at
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/karyawan/:id` → tab Karir | Riwayat karir, tombol proses perubahan karir |
| `/rekrutmen/profil` | Profil karir karyawan — riwayat jabatan, pencapaian |
| `/kehadiran/kunjungan-klien` | Daftar kunjungan, tombol check-in, riwayat |
| `/tugas/kpi` | Dashboard KPI — target vs. aktual per karyawan/tim |
| `/tugas/formulir` | Daftar & pengisian formulir evaluasi |
| `/tugas/jadwal` | Kalender tugas & deadline |
| `/tugas/evaluasi` | Hasil evaluasi performa, grafik tren |
| `/pengaturan/klien` | Master data klien |

---

## Business Rules

1. **Perubahan Karir Efektif**: Perubahan jabatan/gaji hanya berlaku mulai `effective_date`. Sebelum tanggal itu, data karyawan masih menggunakan data lama.
2. **GPS Validation**: Kunjungan klien dianggap valid jika koordinat check-in berada dalam radius N meter dari alamat klien (dikonfigurasi, default: 200m).
3. **Tugas Overdue**: Tugas yang melewati deadline otomatis ditandai "Late". Manajer mendapat notifikasi.
4. **KPI Objektif**: Skor KPI dihitung dari rasio `actual_value / target_value × 100`. Tugas tepat waktu berkontribusi ke KPI.
5. **Evaluasi Wajib**: Karyawan tidak bisa diproses promosi tanpa ada minimal 1 evaluasi yang completed dalam periode tertentu.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Manajemen Karyawan** | Update data jabatan/divisi/gaji setelah perubahan karir disetujui |
| **Payroll** | Perubahan gaji dari promosi berlaku mulai periode payroll yang mencakup `effective_date` |
| **Presensi** | Kunjungan klien tervalidasi dihitung sebagai kehadiran |
| **Pelacakan Lokasi** | Koordinat GPS check-in kunjungan diverifikasi |
| **Rekrutmen** | Posisi yang kosong karena mutasi/resign bisa langsung dibuat lowongan |
