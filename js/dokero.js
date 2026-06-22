/**
 * Dokero page — specific interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // Navbar background on scroll
  // ========================================
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

});
