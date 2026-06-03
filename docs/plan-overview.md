# Bumi Indah HRIS — Cakupan Fitur (PRO Plan)

Dokumen ini mendefinisikan fitur-fitur yang termasuk dalam sistem HRIS custom untuk CV Bumi Indah Group, berdasarkan cakupan **PRO Plan**.

---

## Referensi Tier

| Tier | Fitur |
|------|-------|
| **GRATIS** | Absensi Android & iOS, Validasi Absensi GPS, Manajemen Karyawan, Cuti & Izin, Employee Self Service |
| **PRO** ✅ | Semua GRATIS + Payroll Karyawan, Hitung Lembur & THR Otomatis, Jadwal & Shift Kerja, Kasbon Karyawan, Manajemen Karir/Klien/Tugas, Setting Layout Slip Gaji, Fingerprint |
| ~~ELITE~~ | ~~PPh 21 & BPJS Otomatis, Statistik Payroll, Approval Bertingkat, Reimbursement, Face Recognition, Tracking GPS, THR Progressif~~ |
| ~~CHAMPION~~ | ~~KPI, Rekrutmen, Petty Cash, Liveness Detection~~ |

---

## Fitur yang Diimplementasikan (GRATIS + PRO)

| # | Fitur | Dokumen Detail | Sidebar Menu |
|---|-------|---------------|--------------|
| 1 | Manajemen Karyawan | [manajemen-karyawan.md](./features/manajemen-karyawan.md) | Karyawan |
| 2 | Cuti & Izin | [cuti-izin.md](./features/cuti-izin.md) | Izin & Cuti |
| 3 | Payroll Karyawan | [payroll-karyawan.md](./features/payroll-karyawan.md) | Payroll |
| 4 | Hitung Lembur & THR Otomatis | [hitung-lembur-thr.md](./features/hitung-lembur-thr.md) | *(dalam Payroll)* |
| 5 | Jadwal & Shift Kerja | [jadwal-shift-kerja.md](./features/jadwal-shift-kerja.md) | Jadwal Kerja |
| 6 | Kasbon Karyawan | [kasbon-karyawan.md](./features/kasbon-karyawan.md) | Kasbon |
| 7 | Manajemen Karir, Klien, & Tugas | [manajemen-karir-klien-tugas.md](./features/manajemen-karir-klien-tugas.md) | Kunjungan Klien, Tugas |
| 8 | Setting Layout Slip Gaji | [setting-layout-slip-gaji.md](./features/setting-layout-slip-gaji.md) | *(dalam Pengaturan)* |
| 9 | Rekrutmen | [rekrutmen.md](./features/rekrutmen.md) | Rekrutmen |

### Fitur Tambahan (termasuk PRO)
- **Presensi / Fingerprint** — Import data Biofinger (ekspor-impor manual)
- **Approval Presensi** — Persetujuan presensi dasar (1 level atasan)
- **Employee Self Service** — Portal karyawan: lihat slip gaji, saldo cuti, data pribadi

---

## Fitur yang TIDAK Diimplementasikan

Fitur-fitur berikut berada di tier ELITE/CHAMPION dan **tidak termasuk** dalam scope proyek ini:

| Fitur | Tier | Keterangan |
|-------|------|-----------|
| Hitung PPh 21 & BPJS Otomatis | ELITE | Payroll PRO menggunakan perhitungan manual/semi-otomatis |
| Statistik Payroll & HRIS | ELITE | Dashboard analytics lanjutan |
| Approval Bertingkat | ELITE | Multi-level approval chain |
| Reimbursement | ELITE | Pengajuan klaim pengeluaran |
| Absensi Face Recognition | ELITE | Biometrik wajah |
| Tracking GPS (Real-time) | ELITE | Pelacakan lokasi karyawan real-time |
| THR Progressif | ELITE | THR bertahap berdasarkan performa |
| KPI | CHAMPION | Key Performance Indicators |
| Petty Cash | CHAMPION | Kas kecil perusahaan |
| Liveness Detection | CHAMPION | Anti-spoofing biometrik |

---

## Struktur Sidebar Menu

```
Beranda
Karyawan

── Kehadiran ──
   Approval Presensi
   Jadwal Kerja
   Presensi
   Izin & Cuti
   Kunjungan Klien

── Payroll ──
   Payroll

── Keuangan ──
   Kasbon

── Tugas ──
   Tugas

── Rekrutmen ──
   Kandidat
   Lowongan Pekerjaan
   Wawancara
   Penawaran Kerja

── Pengaturan ──
   Pengaturan

── Footer ──
   FAQ
```
