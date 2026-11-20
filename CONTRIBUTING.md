# Panduan Kontribusi

Alur kerja Git untuk Disty HelpDesk Front-End (sama dengan repo back-end).

## Aturan branch

- `main` selalu stabil dan tidak boleh di-commit langsung.
- Semua pekerjaan dilakukan di branch terpisah, lalu digabung lewat Pull Request.

| Awalan | Kegunaan | Contoh |
|---|---|---|
| `feature/` | Fitur baru | `feature/halaman-survei` |
| `fix/` | Perbaikan bug | `fix/tombol-masuk` |
| `docs/` | Dokumentasi | `docs/ui-ux` |
| `test/` | Pengujian | `test/uji-responsif` |

## Aturan commit

Format pesan: `jenis: deskripsi singkat`. Jenis yang dipakai: `feat`, `fix`, `docs`, `test`, `chore`.
Contoh: `docs: tambah wireframe dan prototype`.

## Alur kerja

1. `git switch main` lalu `git pull`.
2. `git switch -c docs/nama-topik`.
3. Kerjakan perubahan, commit dalam potongan kecil.
4. `git push -u origin docs/nama-topik`.
5. Buka Pull Request ke `main`, isi deskripsinya, dan hubungkan ke issue dengan `Closes #nomor` bila ada.
6. Setelah ditinjau anggota tim lain dan disetujui, gabungkan lalu hapus branch.

## Yang tidak boleh masuk repository

- Rahasia dan file `.env`
- Folder `node_modules/` (di `tailwind/`)
