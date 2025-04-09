function openLink(url) {
    window.open(url, '_blank');
  }
  
  function expandContent(element) {
    const expandable = element.querySelector('.expandable');
    if (expandable) {
      expandable.style.display = expandable.style.display === 'block' ? 'none' : 'block';
    }
  }
  
  // Menu active state
  const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    const page = item.getAttribute('data-page');

    // Set active state visually
    menuItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Navigation logic
    if (page === 'home') {
      window.location.href = 'index.html';
    } else if (page === 'about') {
      window.location.href = 'about.html';
    } else if (page === 'gallery') {
      window.location.href = 'gallery.html';
    }
    
  });
});

  
  // Header show/hide on scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 80) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  
    lastScrollTop = scrollTop;
  });
  
  // Toggle video display
  document.querySelectorAll('.toggle-video').forEach(text => {
    text.addEventListener('click', () => {
      const videoWrapper = text.nextElementSibling;
      videoWrapper.classList.toggle('open');
    });
  });
  
  // Toggle gallery display
  
  document.querySelectorAll('.toggle-gallery').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.item');
      const galleryWrapper = item.querySelector('.gallery-wrapper');
      if (galleryWrapper) {
        galleryWrapper.classList.toggle('open');
      }
    });
  });
  