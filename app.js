// Swiper Initialization
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

// FAQ Accordion Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentNode;
    const currentlyActive = document.querySelector('.faq-item.active');
    
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
      currentlyActive.querySelector('.faq-question>img').classList.remove('rotate-arrow');
    }
    
    question.querySelector('img').classList.toggle('rotate-arrow');
    item.classList.toggle('active');
  });
});

let premiumText = document.querySelector('.premium-h1-1');
let beautifulText = document.querySelector('.premium-h1-2');

gsap.set(premiumText, { x: 100, opacity: 1 });
gsap.set(beautifulText, { x: 100, opacity: 0 });

const textSwitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

textSwitchTimeline
  .to(premiumText, { opacity: 0, duration: 0.5, ease: "power2.out" })
  .to(premiumText, { x: -100, duration: 1.5, ease: "power2.out" }, "-=0.5")
  .to(beautifulText, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=1.5")
  .to(beautifulText, { x: -100, opacity: 0, duration: 0.5, ease: "power2.out", delay: 2 })
  .to(beautifulText, { x: 100, duration: 1.5, ease: "power2.out" }, "-=0.5")
  .to(premiumText, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=1.5");

document.querySelectorAll('.faq-answer img').forEach(img => {
  img.addEventListener('click', () => {
    const item = img.closest('.faq-item');
    const currentlyActive = document.querySelector('.faq-item.active');
    
    if (currentlyActive) {
      currentlyActive.classList.remove('active');
      currentlyActive.querySelector('.faq-question>img').classList.remove('rotate-arrow');
    }
    
    item.classList.remove('active');
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
  y: -800,
  duration: 0.5,
  stagger: 0.3,
  ease: "ease",
});

const lettors = gsap.utils.toArray(".scroll-fill-text");
lettors.map(lettor => console.log(lettor));

const goUpArrow = document.querySelector('.go-up');

goUpArrow.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    goUpArrow.style.display = 'block';
  } else {
    goUpArrow.style.display = 'none';
  }
});
