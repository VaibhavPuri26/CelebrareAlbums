var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        const currentlyActive = document.querySelector('.faq-item.active');
        
        // Remove active class and rotate arrow from currently active item
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.faq-question>img').classList.remove('rotate-arrow'); // {{ edit_1 }}
        }
        
        // Rotate arrow for the clicked item
        question.querySelector('img').classList.toggle('rotate-arrow'); // {{ edit_2 }}
        item.classList.toggle('active'); // {{ edit_3 }}
    });
});

document.querySelectorAll('.faq-answer img').forEach(img => { // {{ edit_4 }}
  img.addEventListener('click', () => {
      const item = img.closest('.faq-item'); // {{ edit_5 }}
      const currentlyActive = document.querySelector('.faq-item.active');
      
      // Remove active class and rotate arrow from currently active item
      if (currentlyActive) {
          currentlyActive.classList.remove('active');
          currentlyActive.querySelector('.faq-question>img').classList.remove('rotate-arrow'); // {{ edit_6 }}
      }
      
      item.classList.remove('active'); // {{ edit_7 }}
  });
});

document.querySelectorAll('.faq-answer').forEach(question => {
  question.addEventListener('click', () => {
      const item = question.parentNode;
      const currentlyActive = document.querySelector('.faq-item.active');
      if (currentlyActive && currentlyActive === item) {
        document.querySelector('.faq-item>.faq-question>img').classList.remove('rotate-arrow');
          currentlyActive.classList.remove('active');
      }
      
      item.classList.remove('active');
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  y: -800, // Start position (800px above the viewport)
  duration: 0.5, // Duration of the animation
  stagger: 0.3, // Stagger effect for multiple cards
  ease: "ease",
});

const lettors = gsap.utils.toArray(".scroll-fill-text")
lettors.map(lettor=>console.log(lettor))