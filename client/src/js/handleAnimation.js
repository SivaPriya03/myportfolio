import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default function () {
  /* Hamburger Changes */
  const hamburger = document.querySelector('.hamburger-item');
  const navMenu = document.querySelector('.menu');

  hamburger.addEventListener('click', mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
  const navList = document.querySelectorAll('.menu li');

  navList.forEach((n) => n.addEventListener('click', closeMenu));

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }

  /* Tooltip changes */

  function onMouseOver(event) {
    const TITLE_ATTRIBUTE = 'title';
    const eventTarget = event.target;
    const element = eventTarget.closest(`[${TITLE_ATTRIBUTE}]`); // Find Closest element with title
    if (element) {
      const title = element.getAttribute('title');
      tippy(element, {
        content: `<strong class='tooltip'>${title}</strong>`,
        allowHTML: true,
      });
    }
  }
  document.addEventListener('mouseover', onMouseOver);

  /* Others */
  const contactButton = document.getElementById('contact-btn');
  contactButton.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
}
