# Pengujian Disty HelpDesk (Front-End)

Diuji pada: 14/11/2026, mode: localhost (server tiruan)
Peramban: (isi, misalnya Chrome versi ...)

| No | Skenario | Langkah singkat | Hasil diharapkan | Hasil | Catatan |
|----|----------|-----------------|------------------|-------|---------|
| 1 | Login klien | Email biasa (misalnya klien@contoh.com), sandi apa saja | Masuk ke halaman klien | Lolos| |
| 2 | Login admin | Email berawalan admin (admin@contoh.com) | Masuk ke halaman admin |Lolos | |
| 3 | Login teknisi | Email berawalan teknisi (teknisi@contoh.com) | Masuk ke halaman teknisi | Lolos | |
| 4 | Login gagal: sandi kosong | Isi email, kosongkan sandi | Muncul pesan "Isi kata sandi" | Lolos | |
| 5 | Login gagal: email tidak valid | Isi email tanpa @ | Muncul pesan "Isi email dengan benar" | Lolos | |
| 6 | Ganti tema | Pengaturan akun, pilih Gelap lalu Terang | Tampilan berubah dan tersimpan | Lolos | |
| 7 | Ganti bahasa | Pilih ID lalu EN | Teks berganti bahasa | Lolos| |
| 8 | Ubah kata sandi | Pengaturan akun, sandi baru minimal 8 karakter dengan huruf dan angka | Sandi berubah, login memakai sandi lama ditolak | Lolos | |
| 9 | Responsif | Perkecil jendela ke lebar HP | Tata letak menyesuaikan | Lolos | |

## Bug yang ditemukan dan perbaikannya
belum ada bug yang ditemukan