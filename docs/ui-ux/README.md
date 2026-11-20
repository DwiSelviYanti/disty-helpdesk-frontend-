# UI/UX Design: Wireframe, Prototype, dan Uji Pengguna (Modul 7)

Bahan Modul 7 silabus Front-End (wireframe, prototyping, user testing) untuk Disty HelpDesk.

## Isi folder

| Berkas / folder | Isi |
|---|---|
| `WIREFRAME-semua-layar.svg` | Wireframe low-fidelity (abu-abu) untuk 7 layar, dalam satu lembar |
| `PROTOTYPE-semua-layar.svg` | Prototype high-fidelity (warna dan font aplikasi) untuk 7 layar, dalam satu lembar |
| `wireframe/`, `prototype/` | Per layar satu berkas SVG (lebar 1440 px) |
| `PETA-PROTOTYPE.md` | Peta tautan antar layar untuk dibuat di mode Prototype Figma |
| `user-testing.md` | Skenario dan tabel hasil uji pengguna (diisi saat pengujian) |

## Layar yang tersedia

| No | Layar | Peran |
|---|---|---|
| 01 | Landing (beranda publik) | Umum |
| 02 | Login | Semua |
| 03 | Beranda | Klien |
| 04 | Buat Aduan | Klien |
| 05 | Beranda | Teknisi |
| 06 | Detail Tugas (stepper Baru, Diproses, Monitoring, Selesai) | Teknisi |
| 07 | Dashboard | Admin |

Belum digambar: Aduan Saya, Konsultasi, Pusat Bantuan, Survei, Catat Aduan Telepon, Riwayat Penanganan, Tim Teknisi, Laporan Bulanan, Profil, dan tema gelap.

## Cara memakai di Figma

1. Buka berkas `.svg`, salin seluruh isinya (Ctrl+A, Ctrl+C), lalu tempel di kanvas Figma (Ctrl+V). Atau seret berkas `.svg` langsung ke kanvas.
2. Berkas per layar langsung menjadi satu frame. Pada berkas `...-semua-layar.svg`, pilih tiap grup layar lalu tekan Ctrl+Alt+G (Frame selection).
3. Buat tautan antar layar mengikuti `PETA-PROTOTYPE.md` (mode Prototype, Trigger On click, Action Navigate to).

## Catatan

- Gambar disusun dari struktur kode di `helpdesk/` (warna `#c9531b`, latar `#f4f2ee`, sidebar `#1b1c20`, font Plus Jakarta Sans), bukan tangkapan layar. Ikon dan foto masih berupa placeholder.
- Tautan prototype tidak ikut terbawa saat paste dari SVG, jadi harus dibuat manual di Figma.
