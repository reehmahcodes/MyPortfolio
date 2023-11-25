window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#175b6a';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
    }
    else {
        header.style.backgroundColor = 'transparent';
        header.style.position = 'relative';
        header.style.color = 'white';
        header.style.width = 'inherit';
    }
})

const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const slides = carousel.querySelectorAll('.carousel-item');
let indicatorsContainer = document.querySelector('.carousel-indicators');
let indicators = [];
let slideIndex = 0;

function updateCarousel() {
  const offset = -slideIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
      indicators[index].classList.add('active');
    } else {
      slide.classList.remove('active');
      indicators[index].classList.remove('active');
    }
  });
}

function showSlide(slideToDisplay) {
  slideIndex = slideToDisplay;
  updateCarousel();
}

function createIndicators() {
  for (let i = 0; i < slides.length; i++) {
    let indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === 0) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', function() {
      showSlide(i);
    });
    indicators.push(indicator);
    indicatorsContainer.appendChild(indicator);
  }
}

createIndicators();

{/* <i class="bi bi-x"></i> */}


let slideInterval = setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateCarousel();
}, 2000);


carouselInner.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});


carouselInner.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
  }, 2000);
});

const hambuger = document.querySelector('.ham-disp');
const iconify = hambuger.querySelector('.bi');
const jubilee = document.querySelector('#home')
const listItems = jubilee.querySelector('ul');

let hamIcon = 'list';

hambuger.addEventListener('click', function() {
  
  hamIcon = (hamIcon === 'list') ? 'x' : 'list';

  listItems.classList.toggle('collapse')

  iconify.classList.remove('bi-list');
  iconify.classList.remove('bi-x');

  iconify.classList.add(`bi-${hamIcon}`);
})

