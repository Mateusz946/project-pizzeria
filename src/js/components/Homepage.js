/* global Flickity */

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  // cellAlign: 'left',
  // contain: true,
  autoPlay: true
});

console.log(flkty);

