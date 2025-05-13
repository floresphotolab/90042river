function openLink(url) {
  window.open(url, '_blank');
}

function expandContent(element) {
  const expandable = element.querySelector('.expandable');
  if (expandable) {
    expandable.style.display = expandable.style.display === 'block' ? 'none' : 'block';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // --- Menu active toggle ---
  const menuItems = document.querySelectorAll('.menu li');
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      const page = item.getAttribute('data-page');
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      if (page === 'home') {
        window.location.href = 'index.html';
      } else if (page === 'about') {
        window.location.href = 'about.html';
      } else if (page === 'gallery') {
        window.location.href = 'gallery.html';
      }
    });
  });

  // --- Header scroll behavior ---
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
  });

  // --- Video toggles ---
  document.querySelectorAll('.toggle-video').forEach(text => {
    text.addEventListener('click', () => {
      const videoWrapper = text.nextElementSibling;
      videoWrapper.classList.toggle('open');
    });
  });

  // --- Gallery toggles (homepage) ---
  document.querySelectorAll('.toggle-gallery').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.item');
      const galleryWrapper = item.querySelector('.gallery-wrapper');
      if (galleryWrapper) {
        galleryWrapper.classList.toggle('open');
      }
    });
  });

  // --- Gallery page toggles ---
  if (document.body.classList.contains('gallery-page')) {
    document.querySelectorAll('.gallery-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const targetId = toggle.dataset.target;
        const section = document.getElementById(targetId);

        if (section) {
          const isNowOpen = section.classList.toggle('open');

          // ✅ Toggle "active" class based on whether the section is open or not
          if (isNowOpen) {
            toggle.classList.add('active');
          } else {
            toggle.classList.remove('active');
          }
        }
      });
    });
  }



  // --- Lightbox ---
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  let galleryImages = [];
  let currentIndex = 0;

  document.querySelectorAll('.lightbox-trigger').forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const gallery = trigger.closest('.photo-carousel');
      galleryImages = Array.from(gallery.querySelectorAll('.lightbox-trigger'));
      currentIndex = galleryImages.indexOf(trigger);
      const fullSrc = trigger.getAttribute('data-full');
      modalImg.src = fullSrc;
      modalImg.alt = trigger.querySelector('img')?.alt || '';
      modal.style.display = 'block';
    });
  });

  function showImage(index) {
    const target = galleryImages[index];
    modalImg.src = target.getAttribute('data-full');
    modalImg.alt = target.querySelector('img')?.alt || '';
  }

  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (galleryImages.length === 0) return;
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      if (galleryImages.length === 0) return;
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    });
  }

  const closeBtn = document.querySelector('.lightbox-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
