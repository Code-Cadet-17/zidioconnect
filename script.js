// script.js — smooth scrolling + small UX enhancements

document.addEventListener('DOMContentLoaded', () => {
  
  // Smooth scroll for internal # links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
