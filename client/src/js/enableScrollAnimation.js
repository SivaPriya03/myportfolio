import ScrollReveal from 'scrollreveal';

export default function () {
  var slideUp = {
    distance: '3em',
    duration: 2000,
    opacity: 0,
    reset: true,
    origin: 'left',
  };
  let scrollReveal = ScrollReveal();
  scrollReveal.reveal('.about-me', slideUp);
  scrollReveal.reveal('.project-subtitle', {
    distance: '10px',
    duration: 2000,
    opacity: 0,
    reset: true,
    origin: 'bottom',
  });
  scrollReveal.reveal('.avatar', {
    duration: 1000,
    rotate: {
      z: 50,
    },
  });
}
