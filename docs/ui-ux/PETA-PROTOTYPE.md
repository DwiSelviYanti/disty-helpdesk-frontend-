# Peta Prototype Disty HelpDesk (untuk Figma)

Paste `PROTOTYPE-semua-layar.svg` ke Figma. Nama layer tombol/baris yang bisa diklik memakai pola `nama__ke_<layar tujuan>`.
Di mode Prototype Figma: pilih layer itu, tarik panah ke frame tujuan, Trigger **On click**, Action **Navigate to**, Animation **Instant** (atau Smart animate).

| Dari layar | Layer yang diklik | Ke layar |
|---|---|---|
| 01_Landing | `btn_Masuk__ke_02_Login` (header) | 02_Login |
| 01_Landing | `btn_Masuk_ke_HelpDesk__ke_02_Login` (hero dan CTA bawah) | 02_Login |
| 02_Login | `btn_Beranda__ke_01_Landing` | 01_Landing |
| 02_Login | `btn_Masuk__ke_03_Klien_Beranda` (login Klien) | 03_Klien_Beranda |
| 02_Login | tombol Masuk yang sama, untuk demo peran lain | 05_Teknisi_Beranda atau 07_Admin_Dashboard |
| 03_Klien_Beranda | `tile_Buat_Aduan__ke_04_Klien_Buat_Aduan` | 04_Klien_Buat_Aduan |
| 04_Klien_Buat_Aduan | `btn_Kirim_aduan__ke_03_Klien_Beranda` | 03_Klien_Beranda |
| 05_Teknisi_Beranda | `row_HD-0xx__ke_06_Teknisi_Detail_Tugas` (4 baris tugas) | 06_Teknisi_Detail_Tugas |

Menu sidebar (Beranda, Buat Aduan, dst.) tidak diberi tautan di SVG. Hubungkan sendiri jika perlu.

## Alur peran
- **Klien:** Landing, Login, Beranda, Buat Aduan, kembali ke Beranda.
- **Teknisi:** Login, Beranda, Detail Tugas. Urutan status di Detail Tugas: Baru, Diproses, Monitoring, Selesai.
- **Admin:** Login, Dashboard.

## Catatan dari kode
- Palet: primer `#c9531b`, latar `#f4f2ee`, sidebar gelap `#1b1c20`. Font: Plus Jakarta Sans.
- Sidebar 260px, konten mulai x=292, lebar frame 1440px.
- Ikon dan foto adalah placeholder. Ganti dengan ikon dan gambar dari `laravel/public/assets/`.
