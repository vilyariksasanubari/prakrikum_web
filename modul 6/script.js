// 1. Tunggu hingga seluruh dokumen HTML dimuat
document.addEventListener('DOMContentLoaded', function() {

    // 2. Temukan elemen yang kita butuhkan berdasarkan ID mereka
    const tombol = document.getElementById('tombol-gerak');
    const kotak = document.getElementById('kotak-animasi');

    // 3. Tambahkan 'event listener' ke tombol.
    // Ini memberi tahu browser untuk "mendengarkan" peristiwa 'click'
    tombol.addEventListener('click', function() {

        // 4. Saat diklik, jalankan fungsi ini:
        // 'classList.toggle()' adalah fungsi praktis.
        // JIKA 'kotak' tidak memiliki kelas 'bergerak', tambahkan.
        // JIKA 'kotak' sudah memiliki kelas 'bergerak', hapus.
        kotak.classList.toggle('bergerak');

    });

});