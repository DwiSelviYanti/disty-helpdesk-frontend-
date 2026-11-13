# Disty HelpDesk, Front-End

Bagian tampilan aplikasi Disty HelpDesk (PT Disty Teknologi Indonesia). Berisi halaman statis (HTML, CSS, JavaScript, React 18, Bootstrap, Tailwind) yang memanggil API di folder `../disty-helpdesk-backend` lewat REST (JSON).

## Peta folder

| Folder / berkas | Isi |
|---|---|
| `index.html`, `login.html` | Dua halaman: beranda publik dan masuk |
| `config.js` | Alamat API backend (`window.DISTY_API_BASE`) |
| `helpdesk/` | Seluruh kode aplikasi (lihat `helpdesk/00-BACA-DULU.md`) |
| `css/tailwind.css` | Hasil build Tailwind |
| `vendor/` | React 18 dan Bootstrap, dimuat langsung oleh halaman |
| `assets/` | Logo, ilustrasi, foto |
| `tailwind/` | Bahan build Tailwind v3 |
| `favicon.*`, `apple-touch-icon.png`, `robots.txt` | Ikon dan aturan robot |
| `hash-ui-sebelum.txt`, `hash-ui-sesudah.txt` | Arsip hash dari tahap sebelumnya (tidak diubah) |

## Kaitan dengan silabus Front-End Web Development

| Modul silabus | Letaknya di proyek ini |
|---|---|
| 1. Dasar Web Development (HTML dan CSS) | `index.html`, `login.html`, `helpdesk/css/` |
| 2. Version Control (Git dan GitHub) | Riwayat commit, branch, dan Pull Request di repositori ini |
| 3 dan 4. JavaScript Fundamental dan Lanjutan | `helpdesk/core/`, `helpdesk/effects/`, `helpdesk/settings/`, `helpdesk/entry/` |
| 5. Responsive Design | `helpdesk/css/` (viewport meta ada di kedua halaman) |
| 6. Framework CSS (Bootstrap dan Tailwind) | `vendor/bootstrap/`, `css/tailwind.css`, `tailwind/` |
| 7. UI/UX Design | Tampilan per peran di `helpdesk/admin/`, `client/`, `technician/` |
| 8. Front-End Framework (React) | `vendor/react/`, `helpdesk/components/` |
| 9. API Integration | `helpdesk/api/api-klien.js` (klien REST), `api-tiruan.js` (server tiruan) |
| 10. Project Development | Seluruh folder ini |

## Menjalankan

Tidak perlu build. Cukup sajikan folder ini lewat web server statis, misalnya:

    cd disty-helpdesk-frontend
    npx serve .            # atau: python3 -m http.server 8080

Lalu arahkan ke backend lewat `config.js`.

## Menyambungkan ke backend

`config.js` berisi `window.DISTY_API_BASE`.

- `'api/v1'` (bawaan): frontend dan backend satu domain, seperti sebelum dipisah.
- Alamat penuh, contoh `'http://localhost:3000/api/v1'`: frontend dan backend beda alamat. Isi `CORS_ORIGIN` di `.env` backend dengan alamat frontend ini.

Di localhost, kalau backend tidak hidup, aplikasi otomatis memakai server tiruan (`api-tiruan.js`). Di domain sungguhan mode selalu `live`.

## Membangun ulang Tailwind

    cd tailwind
    npm install
    npm run build          # hasil: ../css/tailwind.css

## Catatan
- Foto unggahan disimpan dan dilayani oleh backend (`/uploads`), bukan oleh folder ini.
- Desain tidak boleh berubah. Perubahan dari pemisahan hanya: `config.js` baru, tag `<script src="config.js">` di kedua halaman, satu baris `baseUrl` di `helpdesk/api/api-klien.js`, dan jalur di `tailwind/`. Karena itu hash di `hash-ui-*.txt` tidak lagi cocok untuk `index.html`, `login.html`, dan `api-klien.js`.
