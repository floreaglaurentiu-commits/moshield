/* MoShield Premium Landing Page JS */
document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.moshield-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.moshield-faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Sticky Bar Logic
  const stickyBar = document.querySelector('.moshield-sticky-bar');
  const heroSection = document.querySelector('.moshield-hero-section');
  
  if (stickyBar && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Show sticky bar when hero section is out of view
        if (!entry.isIntersecting) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(heroSection);
  }

  // Handle Add to Cart button clicks on sticky bar
  const stickyAddToCartBtn = document.querySelector('.moshield-sticky-bar .moshield-btn');
  if (stickyAddToCartBtn) {
    stickyAddToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Scroll to main CTA or trigger product form submission
      const mainForm = document.querySelector('form[action="/cart/add"]');
      if (mainForm) {
        mainForm.submit();
      } else {
        // Fallback smooth scroll to top/CTA
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }
});
