const accordionButtons = document.querySelectorAll('.accordion__item > button');

const toggleAccordion = (button) => {
  const contentIsHidden = button.parentElement.classList.contains('accordion__item--closed');

    if(contentIsHidden) {
      button.parentElement.classList.replace('accordion__item--closed', 'accordion__item--open');
      button.setAttribute('aria-expanded', "true");
      button.nextElementSibling.setAttribute('aria-hidden', "false");
    } 

    else {
      button.parentElement.classList.replace('accordion__item--open', 'accordion__item--closed');
      button.setAttribute('aria-expanded', "false");
      button.nextElementSibling.setAttribute('aria-hidden', "true");
    }
}

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleAccordion(button);
  });
});