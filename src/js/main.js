import './holder.min.js'
import './navbar.js'
import Swiper from 'swiper/bundle';


const saludo = () => {
  
}

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
  	delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

