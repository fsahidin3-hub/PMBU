// Memastikan semua elemen HTML sudah dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', (event) => {
    // Mengambil parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const kpd = urlParams.get('kpd'); // Mencari parameter 'kpd'

    if (kpd) {
        const container = document.querySelector('.invitation-container');
        const targetElement = document.createElement('h2');

        // Mengubah format URL menjadi teks yang bisa dibaca (mengganti %20 dan + dengan spasi)
        const decodedName = decodeURIComponent(kpd).replace(/\+/g, ' ');

        targetElement.innerHTML = `Kepada Yth. <br> <strong>${decodedName}</strong>`;
        targetElement.classList.add('recipient-name');

        // Menempatkan nama tamu tepat setelah header utama
        const header = container.querySelector('header');
        if (header) {
            header.insertAdjacentElement('afterend', targetElement);
        } else {
             container.prepend(targetElement);
        }
    }
});
