import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { postContactFormData } from './postData';

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

  function getInputElements() {
    const emailEle = document.getElementById('email');
    const nameEle = document.getElementById('name');
    const messageEle = document.getElementById('message');
    return { emailEle, nameEle, messageEle };
  }

  function getInputValues() {
    const { emailEle, nameEle, messageEle } = getInputElements();
    const isValid = [emailEle, nameEle, messageEle].every((element) => {
      if (typeof element.checkValidity === 'undefined') {
        return true;
      }
      return element.checkValidity();
    });
    return isValid
      ? {
          name: nameEle.value,
          message: messageEle.value,
          email: emailEle.value,
        }
      : {};
  }

  function onSend() {
    const { name, email, message } = getInputValues();
    if (name) {
      sendButton.innerHTML = 'Sending...';
      postContactFormData({ name, email, message }).then(() => {
        sendButton.innerHTML = 'Send';
        const { emailEle, nameEle, messageEle } = getInputElements();
        [emailEle, nameEle, messageEle].forEach((element) => {
          element.value = '';
        });
      });
    } else {
      alert('Fill the required fields properly');
    }
  }

  const sendButton = document.getElementById('send');
  sendButton.addEventListener('click', onSend);
}
