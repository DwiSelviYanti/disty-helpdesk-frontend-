/* Alamat API backend. Dimuat paling awal oleh index.html dan login.html.
   Bawaan 'api/v1' (relatif) = frontend dan backend satu domain, sama seperti sebelum dipisah.
   Frontend dan backend beda alamat? Isi alamat penuh backend, contoh:
     window.DISTY_API_BASE = 'http://localhost:3000/api/v1';
     window.DISTY_API_BASE = 'https://api.contoh.co.id/api/v1';
   Backend juga harus mengizinkan alamat frontend ini lewat CORS_ORIGIN di .env backend. */
window.DISTY_API_BASE = 'api/v1';
