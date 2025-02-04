function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
// Banner slider
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.controls button');
const dots = document.querySelectorAll('.dots .dot');
let currentSlide = 0;

function updateSlider(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentSlide = parseInt(button.dataset.index);
    updateSlider(currentSlide);
  });
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.dataset.index);
    updateSlider(currentSlide);
  });
});
// tabs section

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        const activeTab = tab.getAttribute('data-tab');
        const activeContent = document.getElementById(activeTab);
        activeContent.classList.add('active');
    });
});

document.querySelector('.tab').click();

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: `
            <button class="slick-prev custom-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="21" viewBox="0 0 48 21" fill="none">
                    <path d="M10.3221 20.1934L0.761597 10.6329M0.761597 10.6329L10.3221 1.07238M0.761597 10.6329L46.6519 10.6329" stroke="#AA8E54" stroke-width="1.01979" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `,
        nextArrow: `
            <button class="slick-next custom-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="21" viewBox="0 0 47 21" fill="none">
                    <path d="M36.894 1.07227L46.4545 10.6328M46.4545 10.6328L36.894 20.1932M46.4545 10.6328L0.564119 10.6328" stroke="#AA8E54" stroke-width="1.01979" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `
    });
});
$(document).ready(function () {
    $('.testimonial-slider').slick({
        infinite: true, slidesToShow: 1,        
        slidesToScroll: 1,      
        autoplay: true,         
        autoplaySpeed: 3000,
        arrows: true,       
        dots:false,       
        prevArrow: `
      <button class="slick-prev custom-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M12 15l-5-5 5-5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `,
        nextArrow: `
      <button class="slick-next custom-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M8 5l5 5-5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `
    });
});

// Testimonial-slider

$(document).ready(function () {
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true, prevArrow: `
        <button class="slick-prev custom-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M12 15l-5-5 5-5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      `,
        nextArrow: `
        <button class="slick-next custom-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M8 5l5 5-5 5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      `
    });
});

const playbutton = document.querySelector('.play-button')
let video = document.querySelector('video')
let started = false



playbutton.addEventListener('click', () => {

  if(video.paused) {
    video.play()
    playbutton.classList.add('playing')
  } else {
    video.pause()
    playbutton.classList.remove('playing')
  }
})


video.addEventListener('ended', () => {
  playbutton.classList.remove('playing')  
})


video.addEventListener('play', () => {
  playbutton.classList.add('playing')  
})


video.addEventListener('pause', () => {
  playbutton.classList.remove('playing')  
})
  