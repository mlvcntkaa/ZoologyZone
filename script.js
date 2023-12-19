String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

document.addEventListener('DOMContentLoaded', function () {
  const slideIndex = {};

  function showSlides(sectionId) {
    const carousel = document.querySelector(`#${sectionId} .carousel`);
    const transformValue = `translateX(-${slideIndex[sectionId] * 100}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = transformValue;
  }

  function moveSlide(sectionId, direction) {
    slideIndex[sectionId] += direction;
    const carousel = document.querySelector(`#${sectionId} .carousel`);
    if (slideIndex[sectionId] >= carousel.children.length) {
      slideIndex[sectionId] = 0;
    } else if (slideIndex[sectionId] < 0) {
      slideIndex[sectionId] = carousel.children.length - 1;
    }
    showSlides(sectionId);
  }

  function initCarousel(sectionId) {
    const carousel = document.querySelector(`#${sectionId} .carousel`);
    slideIndex[sectionId] = 0;

    // Event listeners for next and previous buttons
    document.getElementById(`nextBtn${sectionId.capitalize()}`).addEventListener('click', function () {
      moveSlide(sectionId, 1);
    });

    document.getElementById(`prevBtn${sectionId.capitalize()}`).addEventListener('click', function () {
      moveSlide(sectionId, -1);
    });

    // Start the animation
    showSlides(sectionId);
  }

  function showCategory(categoryId) {
    const sections = ['darat', 'laut', 'udara'];
    sections.forEach(function (sectionId) {
      const element = document.getElementById(sectionId);
      element.style.display = sectionId === categoryId ? 'block' : 'none';
    });
  }

  document.querySelectorAll('.card-button').forEach(function (button) {
    button.addEventListener('click', function () {
      const categoryId = button.getAttribute('data-category');
      showCategory(categoryId);
    });
  });

  // Initialize and start animations for each section
  const sections = ['darat', 'laut', 'udara'];
  sections.forEach(initCarousel);

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir

    // Kirim formulir menggunakan Fetch API atau AJAX jika Anda ingin melakukan validasi atau pengiriman tanpa mengganti halaman
    // Contoh menggunakan Fetch API:
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        // Ulasan terkirim dengan sukses
        showNotification("Ulasan Anda telah terkirim! Terima kasih!");
      } else {
        // Gagal mengirim ulasan
        showNotification("Gagal mengirim ulasan. Silakan coba lagi.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      showNotification("Terjadi kesalahan. Silakan coba lagi.");
    });
  });

  function showNotification(message) {
    // Tampilkan notifikasi
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    // Hapus notifikasi setelah beberapa detik (opsional)
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 5000); // Hapus notifikasi setelah 5 detik
  }
  
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
    mainMenu.classList.toggle('active');
  });
});

