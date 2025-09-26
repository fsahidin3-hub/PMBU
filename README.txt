Undangan Digital Khataman Ponpes (Template GitHub Pages)
======================================================

Proyek ini adalah template undangan digital statis dengan desain formal, ideal untuk digunakan pada GitHub Pages.

------------------------------------------------------
STRUKTUR FILE PROYEK
------------------------------------------------------
- index.html: Struktur utama halaman (sudah dimodifikasi untuk menautkan ke script.js).
- style.css: Gaya visual dan tampilan.
- script.js: Logika JavaScript untuk fitur personalisasi nama tamu.
- README.TXT: Informasi proyek dan petunjuk ini (file yang sedang Anda baca).

------------------------------------------------------
CARA MEMBUAT LINK PERSONAL (FITUR UTAMA)
------------------------------------------------------
Fitur personalisasi nama diaktifkan oleh file 'script.js' dengan membaca parameter 'kpd' di URL.

1. Terapkan di GitHub Pages:
   Pastikan semua file (index.html, style.css, script.js) sudah diunggah ke repositori GitHub Anda. Aktifkan GitHub Pages dari Settings > Pages.

2. Contoh URL Personal:
   Tambahkan "?kpd=" diikuti dengan nama tamu di akhir URL website Anda.

   - URL Dasar: https://[username].github.io/[nama-repo]/
   
   - Untuk "Pemuda Pemudi": Gunakan ?kpd=Pemuda%20Pemudi
   
   - Untuk "Bpk. H. Rahmat": Gunakan ?kpd=Bpk.%20H.%20Rahmat

   (Catatan: Anda bisa menggunakan spasi atau %20 di URL untuk memisahkan kata.)

------------------------------------------------------
PENGEDITAN FILE
------------------------------------------------------
- Edit index.html: Untuk mengubah judul, tanggal, waktu, dan lokasi acara.
- Pastikan di akhir file index.html Anda terdapat baris di bawah ini untuk menautkan ke file script.js:
  <script src="script.js"></script>

Selamat menggunakan template Anda!
