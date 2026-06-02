# Fitur: Jadwal & Shift Kerja

## Overview

Modul Jadwal & Shift Kerja mengatur pola jam kerja karyawan. Setiap karyawan ditetapkan pada shift tertentu yang menjadi acuan perhitungan presensi, lembur, dan absensi. Modul ini mendukung berbagai pola kerja: shift tetap, shift rotasi, jadwal fleksibel, dan pola kerja berbeda per divisi/cabang.

---

## User Stories

| ID | Sebagai | Saya ingin | Agar |
|----|---------|-----------|------|
| US-01 | Admin HR | Mendefinisikan jenis-jenis shift (pagi, siang, malam) | Bisa assign ke karyawan sesuai kebutuhan |
| US-02 | Admin HR | Membuat jadwal bulanan/mingguan untuk karyawan | Karyawan tahu kapan harus masuk |
| US-03 | Admin HR | Melihat kalender jadwal seluruh tim dalam 1 tampilan | Mudah deteksi kekosongan coverage |
| US-04 | Karyawan | Melihat jadwal shift saya bulan ini | Bisa rencanakan kegiatan pribadi |
| US-05 | Admin HR | Melakukan pertukaran shift antar karyawan | Fleksibel menangani kebutuhan mendadak |
| US-06 | Sistem | Menggunakan jadwal shift sebagai referensi kalkulasi lembur & absensi | Perhitungan akurat |

---

## Functional Requirements

### 1. Master Shift

Mendefinisikan pola jam kerja yang bisa digunakan kembali:

| Field | Deskripsi |
|-------|-----------|
| Nama Shift | Mis. "Shift Pagi", "Shift Malam", "Office Hours" |
| Jam Masuk | Waktu mulai kerja, mis. 08:00 |
| Jam Pulang | Waktu selesai kerja, mis. 17:00 |
| Toleransi Terlambat | Toleransi keterlambatan (mis. 15 menit) |
| Jam Istirahat | Durasi istirahat (dikurangi dari jam kerja efektif) |
| Hari Kerja | Pilih hari aktif: Senin-Jumat, Senin-Sabtu, atau custom |
| Melintas Tengah Malam | Flag untuk shift malam (mis. 22:00 – 06:00) |
| Warna | Warna pada tampilan kalender |

### 2. Penugasan Shift ke Karyawan

- Assign shift ke karyawan secara individual atau per grup (divisi/cabang)
- **Shift Tetap**: Karyawan selalu pakai 1 shift yang sama sepanjang waktu
- **Shift Rotasi**: Shift berputar berdasarkan pola (mis. Minggu 1 pagi, Minggu 2 malam, dst.)
- Tanggal efektif pergantian shift dicatat

### 3. Jadwal Bulanan

- Buat jadwal per bulan (kalender kerja)
- Tampilan grid: baris = karyawan, kolom = tanggal
- Klik per sel untuk set shift/libur/cuti pada tanggal tersebut
- **Bulk assign**: pilih multiple karyawan + range tanggal → assign shift yang sama
- **Copy jadwal**: salin jadwal bulan sebelumnya sebagai template

### 4. Hari Libur & Kalender Kerja

- Daftar hari libur nasional (diupdate setiap tahun)
- Cuti bersama yang ditentukan perusahaan
- Tampil di kalender jadwal dengan warna berbeda
- Integrasi dengan perhitungan lembur (hari libur = tarif lembur berbeda)

### 5. Pertukaran Shift (Shift Swap)

- Karyawan A bisa request tukar shift dengan karyawan B
- Butuh persetujuan atasan
- Setelah approved, jadwal kedua karyawan diperbarui otomatis

### 6. Jadwal Fleksibel (Flextime)

- Untuk posisi tertentu yang tidak terikat jam kaku
- Hanya total jam kerja per hari/minggu yang dipantau
- Tidak ada kalkulasi terlambat

---

## Data Model (Draft)

```
Shift
├── id, name, code, color
├── start_time, end_time
├── break_duration_minutes (int)
├── tolerance_late_minutes (int)
├── working_days (array of weekday int: 1=Mon, 7=Sun)
├── is_overnight (boolean)
├── is_flexible (boolean)
├── created_at

EmployeeShiftAssignment
├── id, employee_id, shift_id
├── effective_date, end_date (nullable)

WorkSchedule (per karyawan per hari)
├── id, employee_id, date
├── shift_id (nullable — null = libur)
├── is_holiday, is_leave
├── notes

PublicHoliday
├── id, date, name, year, is_national

ShiftSwapRequest
├── id, requester_id, target_id
├── requester_date, target_date
├── requester_shift_id, target_shift_id
├── status (enum: pending, approved, rejected)
├── approved_by, approved_at
```

---

## UI Pages

| Halaman | Deskripsi |
|---------|-----------|
| `/kehadiran/jadwal-kerja` | Kalender jadwal bulanan — grid karyawan × tanggal |
| `/pengaturan/shift` | Master shift: daftar, tambah, edit shift |
| `/kehadiran/jadwal-kerja/atur` | Interface drag-drop atau grid edit untuk bulk assignment |
| `/kehadiran/jadwal-kerja/tukar-shift` | Daftar request pertukaran shift & approval |
| `/pengaturan/hari-libur` | Kelola daftar hari libur nasional & cuti bersama |

---

## Business Rules

1. **Konflik Jadwal**: Satu karyawan hanya bisa punya 1 shift aktif per hari. Sistem warning jika ada konflik.
2. **Jam Kerja Normal**: Jam masuk dan keluar dari data shift digunakan sebagai baseline deteksi keterlambatan dan lembur.
3. **Shift Malam (Overnight)**: Jika `is_overnight = true`, sistem memahami bahwa jam pulang adalah keesokan harinya. Lembur dihitung dari jam pulang shift tersebut.
4. **Hari Libur**: Jika karyawan bekerja di hari libur nasional, secara otomatis jam kerjanya dianggap lembur dengan tarif hari libur.
5. **Jadwal Default**: Jika tidak ada jadwal spesifik per hari, sistem memakai jadwal dari `EmployeeShiftAssignment` yang aktif.

---

## Integration Points

| Modul | Hubungan |
|-------|---------|
| **Presensi** | Jadwal shift adalah acuan validasi jam masuk/keluar di mesin absensi |
| **Lembur** | Jam di luar shift → trigger kalkulasi lembur |
| **Cuti & Izin** | Saat karyawan cuti, hari tersebut tidak dihitung absen |
| **Payroll** | Jumlah hari kerja bulan ini dihitung dari kalender kerja (jadwal - hari libur) |
