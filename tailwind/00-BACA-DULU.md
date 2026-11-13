# tailwind/ : bahan build Tailwind v3 untuk tampilan

| Berkas | Fungsi |
|---|---|
| `input.css` | Berkas masukan |
| `tailwind.config.cjs` | Pengaturan (prefix `tw-`, `important: true`, `preflight: false`) |
| `package.json` | Perintah `build` dan `watch`. Berdiri sendiri |

Hasil build ditulis ke `css/tailwind.css` (jalur `../css/tailwind.css` ada di `package.json`).
Cara membangun ulang: `cd tailwind` lalu `npm install` lalu `npm run build`. Detail ada di `docs/REACT-TAILWIND.md`.

## Aturan
- Desain tidak boleh berubah. Jangan ubah pengaturan tanpa izin, dan jangan ubah `css/tailwind.css` dengan tangan.
