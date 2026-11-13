# helpdesk/ : seluruh kode front-end

Halaman masuknya `index.html` dan `login.html` (di akar frontend).

| Folder | Isi |
|---|---|
| `core/` | Inti: state global, helper UI, aplikasi utama |
| `api/` | `api-klien.js` (klien REST dan `API_CONFIG`) dan `api-tiruan.js` (server tiruan) |
| `admin/`, `client/`, `technician/` | Halaman per peran |
| `settings/` | Pengaturan akun dan bahasa ID/EN |
| `components/` | Komponen React (StatCards, TabelAduan, ChipFilter, Router) |
| `effects/` | Efek tombol dan tabel |
| `entry/` | Titik masuk `beranda.js` dan `login.js` |
| `css/` | `gaya-utama.css`, `tema-gelap.css`, `penyesuaian.css` (harus dimuat terakhir) |

Gambar ada di `assets/`. Tailwind: sumber di `tailwind/`, hasil di `css/tailwind.css`.

## Aturan
Desain tidak boleh berubah. Kalau ada file dipindah, yang diubah hanya alamat di tag `<link>` dan `<script>`.
