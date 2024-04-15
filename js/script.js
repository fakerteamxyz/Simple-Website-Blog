document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen tautan beranda
    var linkBeranda = document.querySelector('.menu ul li a[href="#beranda"]');
    // Ambil elemen tautan pendidikan formal
    var linkPendidikanFormal = document.querySelector('.menu ul li a[href="#pendidikan_formal"]');
    // Ambil elemen tautan pendidikan non formal
    var linkPendidikanNonFormal = document.querySelector('.menu ul li a[href="#pendidikan_non_formal"]');
    // Ambil elemen tautan pengalaman organisasi
    var linkPengalamanOrganisasi = document.querySelector('.menu ul li a[href="#pengalaman_organisasi"]');
    // Ambil elemen tautan galeri photo
    var linkGaleriPhoto = document.querySelector('.menu ul li a[href="#galeri_photo"]');

    // Tambahkan event listener untuk tautan beranda
    linkBeranda.addEventListener("click", function (event) {
        // Mencegah aksi default dari tautan (untuk menghindari perpindahan ke posisi anchor)
        event.preventDefault();

        // Sembunyikan semua bagian kecuali beranda
        hideAllSections();
        // Tampilkan div biodata dan foto
        document.getElementById("biodata_foto").style.display = "block";
    });

    // Tambahkan event listener untuk tautan pendidikan formal
    linkPendidikanFormal.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("pendidikan_formal_content").style.display = "block"; // Perbaikan ID disini
    });

    // Tambahkan event listener untuk tautan pendidikan non formal
    linkPendidikanNonFormal.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("pendidikan_non_formal_content").style.display = "block"; // Perbaikan ID disini
    });

    // Tambahkan event listener untuk tautan pengalaman organisasi
    linkPengalamanOrganisasi.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("pengalaman_organisasi_content").style.display = "block"; // Perbaikan ID disini
    });

    // Tambahkan event listener untuk tautan galeri photo
    linkGaleriPhoto.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("galeri_photo_content").style.display = "block"; // Perbaikan ID disini
    });

    // Fungsi untuk menyembunyikan semua bagian kecuali beranda
    function hideAllSections() {
        var sections = document.querySelectorAll('.biodata_foto, .pendidikan_formal, .pendidikan_non_formal, .pengalaman_organisasi, .galeri_photo');
        sections.forEach(function (section) {
            section.style.display = "none";
        });
    }
});
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        var clockDiv = document.getElementById('clock');
        if (clockDiv) {
            clockDiv.innerHTML = hours + ':' + minutes + ':' + seconds;
        }
    }

    setInterval(updateClock, 1000);

    // Smooth Scroll
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });



