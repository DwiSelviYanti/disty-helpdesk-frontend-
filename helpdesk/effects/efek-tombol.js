/* Efek tekan tombol ala Material (Google): riak dari titik sentuh yang meluas lalu memudar.
   Warna riak mengikuti warna teks tombol (currentColor), jadi tema tidak berubah.
   Tidak ada elemen yang diubah selain satu lapisan kosong di dalam tombol, dan dilewati bila pengguna memilih "kurangi gerakan". */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SEL = 'button,.btn,.chip,.nav,.list-group-item-action,.prow,.accordion-button,[role=button]';
  var LEWATI = '.svs button,[disabled],[aria-disabled=true],[data-no-ripple],[inert],input,select,textarea';

  addEventListener('pointerdown', function (e) {
    if (e.button > 0 || !e.target.closest) return;
    var el = e.target.closest(SEL);
    if (!el || el.closest(LEWATI)) return;
    var r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';

    var wadah = el.querySelector(':scope > .rpl-wrap');
    if (!wadah) {
      wadah = document.createElement('span');
      wadah.className = 'rpl-wrap';
      wadah.setAttribute('aria-hidden', 'true');
      el.appendChild(wadah);
    }
    var x = e.clientX - r.left, y = e.clientY - r.top;
    var d = 2 * Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y));
    var s = document.createElement('span');
    s.className = 'rpl';
    s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + (x - d / 2) + 'px;top:' + (y - d / 2) + 'px';
    wadah.appendChild(s);
    s.addEventListener('animationend', function () { s.remove(); });
  }, { passive: true });
})();
