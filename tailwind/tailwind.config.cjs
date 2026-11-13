/* Konfigurasi Tailwind CSS v3 untuk tampilan (folder frontend).
   Pengaturan ini yang menghasilkan ../css/tailwind.css persis seperti yang sekarang dipakai:
   - prefix 'tw-'          : semua kelas Tailwind berawalan tw- (contoh tw-mt-5), tidak bentrok dengan kelas Bootstrap
   - important: true       : tiap aturan diberi !important supaya menang atas CSS Bootstrap
   - preflight: false      : reset bawaan Tailwind dimatikan, supaya tampilan Bootstrap tidak berubah */
module.exports = {
  prefix: 'tw-',
  important: true,
  corePlugins: { preflight: false },
  content: {
    relative: true, // path di bawah dihitung dari lokasi file config ini
    files: ['../*.html', '../helpdesk/**/*.js'],
  },
  theme: { extend: {} },
  plugins: [],
};
