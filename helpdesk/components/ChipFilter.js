/* Komponen React: deretan chip pilihan (filter status, prioritas, bagian bermasalah, dst).
   Props : pilihan = daftar teks, atau pasangan [nilai, label]
           awal    = indeks chip yang aktif saat pertama tampil (-1 = tidak ada)
           onPilih = fungsi yang dipanggil dengan nilai chip yang diklik
   State : aktif (indeks chip yang sedang menyala) lewat useState.
   Keluarannya sama persis dengan <span class="chip on"> yang dulu ditulis sebagai string HTML,
   jadi CSS (helpdesk/css/gaya-utama.css, tema-gelap.css, penyesuaian.css) tidak berubah. */
function ChipFilter({ pilihan, awal = -1, onPilih }) {
  const [aktif, setAktif] = React.useState(awal);
  return pilihan.map((p, i) => {
    const nilai = Array.isArray(p) ? p[0] : p;
    const label = Array.isArray(p) ? p[1] : p;
    return React.createElement("span", {
      key: nilai,
      className: "chip" + (i === aktif ? " on" : ""),
      onClick: () => {
        setAktif(i);
        if (onPilih) onPilih(nilai, i);
      }
    }, label);
  });
}
