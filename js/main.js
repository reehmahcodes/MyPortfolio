// import emailjs from '@emailjs/browser';

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#175b6a';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '-webkit-fill-available';
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

let upDown = 'down';
function changeIcon(divName) {
  const iconify = divName.querySelector('.ti');
  upDown = (upDown === 'down') ? 'up' : 'down';

  iconify.classList.remove('bi-chevron-down');
  iconify.classList.remove('bi-chevron-up');

  iconify.classList.add(`bi-chevron-${upDown}`);
}

function skillClick(skillNum) {
  const divName = `billy${skillNum}`;
  const clickDiv = document.querySelector(`.${divName}`);
  const mild = clickDiv.querySelector('.skill-list');
  mild.classList.toggle('collapse');
  changeIcon(clickDiv);
}

window.addEventListener('scroll', function() {
  let scrollY = window.scrollY;
  let parallaxBg = document.querySelector('.parallax__background');
  parallaxBg.style.transform = 'translate3d(0,' + scrollY * 0.5 + 'px, 0)';
});

// Email JS Entities
const serviceID = 'service_hertta5';
const templateID = 'template_qj1qjg6';
const publicKey = 'gWbzO-1g3x-Ns83zh';

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const messageInput = document.querySelector('#messagein')

function handlesubmit () {
  let name, email, phone, message;
  name = nameInput.value;
  email = emailInput.value;
  phone = phoneInput.value; 
  message = messageInput.value;

  const params = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

  // sending the mail
  emailjs.send(serviceID, templateID, params, publicKey)
    .then((result) => {
      console.log(result.text);
    })
    .catch((error) => {
      console.error(error);
    });
}








// emailjs.send(serviceID, templateID, params, publicKey)
//   .then((result) => {
//     console.log(result.text);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const text = "This is the text that will be animated.";
// let index = 0;

// const animateText = () => {
//   if (index < text.length) {
//     document.getElementById("animated-text").textContent += text.charAt(index);
//     index++;
//     setTimeout(animateText, 100); // Adjust delay for desired typing speed
//   }
// };

// animateText();
// #animated-text {
//   overflow: hidden;
//   display: inline-block;
//   animation: typing 3s steps(10) infinite;
// }

// @keyframes typing {
//   0% {
//     width: 0;
//   }
//   100% {
//     width: 100%;
//   }
// }
// <span id="animated-text">This is the text that will be animated.</span>




