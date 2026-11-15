# Pengujian Disty HelpDesk (Front-End)

Diuji pada: 14/11/2026, mode: localhost (server tiruan)
Peramban: (isi, misalnya Chrome versi ...)

| No | Skenario | Langkah singkat | Hasil diharapkan | Hasil | Catatan |
|----|----------|-----------------|------------------|-------|---------|
| 1 | Login klien | Email biasa (misalnya klien@contoh.com), sandi apa saja | Masuk ke halaman klien | | |
| 2 | Login admin | Email berawalan admin (admin@contoh.com) | Masuk ke halaman admin | | |
| 3 | Login teknisi | Email berawalan teknisi (teknisi@contoh.com) | Masuk ke halaman teknisi | | |
| 4 | Login gagal: sandi kosong | Isi email, kosongkan sandi | Muncul pesan "Isi kata sandi" | | |
| 5 | Login gagal: email tidak valid | Isi email tanpa @ | Muncul pesan "Isi email dengan benar" | | |
| 6 | Ganti tema | Pengaturan akun, pilih Gelap lalu Terang | Tampilan berubah dan tersimpan | | |
| 7 | Ganti bahasa | Pilih ID lalu EN | Teks berganti bahasa | | |
| 8 | Ubah kata sandi | Pengaturan akun, sandi baru minimal 8 karakter dengan huruf dan angka | Sandi berubah, login memakai sandi lama ditolak | | |
| 9 | Responsif | Perkecil jendela ke lebar HP | Tata letak menyesuaikan | | |

## Bug yang ditemukan dan perbaikannya
(Tulis di sini kalau ada. Kalau tidak ada, tulis "belum ada bug yang ditemukan".)