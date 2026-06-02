# **Penawaran Proposal: Pengembangan Sistem Payroll & BPJS Custom**

### **Disiapkan oleh: PT Havedev Cipta Teknologi**

**Kepada:** CV Bumi Indah Group  
**Tanggal:** 01 Juni 2026

Dengan hormat Bapak/Ibu Pimpinan CV Bumi Indah Group,

Menindaklanjuti diskusi yang telah dilakukan sebelumnya, kami dari PT Havedev Cipta Teknologi bermaksud menyampaikan usulan solusi terkait kebutuhan sistem payroll di perusahaan Bapak/Ibu.

Berdasarkan pemahaman kami, dengan jumlah karyawan yang mencapai ±1.000 orang, skema biaya berlangganan sistem existing yang dihitung berdasarkan jumlah karyawan aktif menjadi kurang efisien dari sisi operasional dan budgeting perusahaan. Selain itu, kebutuhan utama perusahaan saat ini lebih terfokus pada proses penggajian (payroll) dan pengelolaan BPJS, tanpa penggunaan fitur absensi secara langsung pada sistem tersebut.

Sebagai solusi atas kebutuhan tersebut, kami mengusulkan pengembangan Sistem Payroll & BPJS custom berbasis web yang dirancang sesuai dengan alur operasional perusahaan. Sistem ini diharapkan dapat membantu mempercepat proses perhitungan payroll secara massal, meningkatkan efisiensi operasional, serta mengurangi ketergantungan terhadap biaya langganan berbasis jumlah karyawan.

Berikut kami sampaikan estimasi awal terkait ruang lingkup dan biaya pengembangan proyek dimaksud:

## **1\. Ruang Lingkup Utama (Scope of Work)**

| Modul Fitur | Deskripsi Fungsionalitas   |
| :---- | :---- |
| **Data Karyawan** | Penyimpanan data demografi, informasi rekening, dan status pajak (PTKP). |
| **Perhitungan Gaji (Payroll)** | Perhitungan otomatis untuk gaji pokok, tunjangan, dan potongan karyawan. |
| **Perhitungan Pajak & BPJS** | Kalkulasi otomatis PPh 21 (mengikuti aturan pemerintah/TER terbaru) serta BPJS Kesehatan dan Ketenagakerjaan. |
| **Laporan & Pencairan** | Pembuatan format file untuk transfer gaji massal via bank dan rekap data untuk bagian keuangan/akuntansi. |
| **Hak Akses (Role)** | Pembatasan akses sistem agar data penggajian tetap aman (contoh: pemisahan hak akses admin HR dan manajer keuangan). |
| **Integrasi Absensi Biofinger (Semi-Otomatis)** | Mengakomodasi penarikan data kehadiran dari mesin Biofinger secara offline karena tidak adanya langganan cloud (tidak menggunakan REST API/Webhook). Sistem baru akan menyediakan fitur Ekspor-Impor Manual, di mana admin cukup mengunggah berkas hasil ekspor dari Biofinger ke dalam sistem untuk diolah menjadi dasar perhitungan gaji.  |

## 

## **2\. Estimasi Waktu & Biaya**

Untuk memberikan gambaran anggaran, berikut adalah estimasi dari kami:

* **Waktu Pengerjaan:** 3 Bulan  
* **Biaya Pembuatan Sistem (Development):** Rp 50.000.000  
* **Skema Pembayaran:** Dibayarkan dalam 2x termin pembayaran selama masa pengerjaan proyek.

*(**Catatan**: Budgeting yang tercantum merupakan penawaran awal dan masih dapat disesuaikan berdasarkan hasil pembahasan lebih lanjut. Final requirement, scope pekerjaan, dan penawaran resmi akan difinalisasi setelah sesi offline meeting untuk memastikan kesesuaian dengan kebutuhan bisnis dan operasional yang berjalan.)*

### **Biaya Operasional Bulanan (Setelah Sistem Berjalan)**

* **Infrastruktur Server Dasar:** Rp 500.000 / bulan.  
* **Support & Maintenance (Opsional):** Rp 2.500.000 / bulan.

### ***Penting Terkait Operasional & Server:***

* Layanan Support & Maintenance (dukungan teknis cepat tanggap) bersifat **opsional** dan baru akan ditagihkan mulai **bulan ke-2** setelah sistem selesai dan masuk fase rilis (Production).  
* Jika di kemudian hari perusahaan merasa tidak membutuhkan dukungan teknis berkelanjutan dari kami, maka Bapak/Ibu **hanya perlu membayar biaya infrastruktur server saja** (Rp 500.000/bulan).  
* **Bebas Biaya Per Karyawan:** Sistem ini milik Anda sepenuhnya. Jika jumlah karyawan bertambah pesat hingga lebih dari 5.000 orang, **tidak ada biaya tambahan lisensi dari Havedev**. Kenaikan hanya terjadi pada biaya infrastruktur server karena kebutuhan pemrosesan data (komputasi) yang otomatis meningkat, dengan estimasi biaya server menjadi sekitar **Rp 1.000.000 / bulan**.

*(**Catatan**: Estimasi waktu dan biaya pembuatan di atas bersifat pendahuluan. Angka final akan kami sampaikan dalam Proposal Resmi setelah kami mengetahui detail spesifik aturan penggajian di perusahaan Bapak/Ibu).*

## **3\. Konfirmasi Kebutuhan (Langkah Selanjutnya)**

Agar kami dapat menyusun Proposal Resmi dengan spesifikasi yang akurat, kami mohon bantuan Bapak/Ibu untuk menjawab beberapa pertanyaan operasional berikut:

1. **Komponen Gaji:** Apakah ada komponen perhitungan yang rumit atau berubah-ubah setiap bulan? (Misalnya: perhitungan uang lembur, denda keterlambatan, atau potongan kasbon).  
2. **Sistem Pajak (PPh 21):** Apakah pajak karyawan ditanggung oleh perusahaan (metode *Gross-up*), dipotong dari gaji karyawan (*Net*), atau menggunakan metode *Gross*?  
3. **Ketentuan BPJS:** Apakah ada aturan khusus dari perusahaan terkait BPJS, atau sepenuhnya menggunakan persentase standar dari pemerintah?  
4. **Bank Rekanan:** Bank apa yang saat ini digunakan perusahaan untuk mencairkan gaji karyawan secara massal? (Agar kami bisa menyesuaikan format file dari sistem kami dengan standar bank tersebut).  
5. **Pemindahan Data:** Apakah data lama dari sistem sebelumnya perlu dimasukkan ke sistem baru, atau kita mulai dengan data baru (data aktif) saat sistem ini digunakan nanti?  
6. **Demo Sistem Saat Ini (Tinjauan Payroll Existing):** Apakah Bapak/Ibu bersedia mengalokasikan waktu untuk mendemokan secara singkat mengenai penggunaan sistem payroll yang saat ini digunakan? Hal ini akan membantu kami memahami alur kerja (workflow) yang berjalan serta menyusun requirement sistem baru agar lebih sesuai dengan kebutuhan operasional.   
7. **Format Ekspor Biofinger:** Berapa format file apakah hasil ekspor data dari mesin

Biofinger Anda saat ini? (Contoh: .xlsx, .csv, atau .txt). Jika memungkinkan, kami  
membutuhkan contoh berkas kosong atau dummy dari hasil ekspor tersebut untuk  
mempelajari struktur kolom datanya.

## **4\. Penutup**

Informasi dari Bapak/Ibu akan sangat membantu kami membangun sistem yang langsung siap pakai dan efisien. Kami siap untuk berdiskusi lebih lanjut mengenai poin-poin di atas sesuai waktu yang Bapak/Ibu berkenan. Terima kasih atas waktu dan kepercayaannya. Apabila terdapat pertanyaan atau klarifikasi, silahkan menghubungi kami melalui informasi di bawah ini: 

 

Hormat kami,

PT Havedev Cipta Teknologi

halo@havedev.com

\+62 851-6130-3146