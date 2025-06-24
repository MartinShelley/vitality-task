import './styles.scss';

import { useState } from 'react';

//fallback values
const defaultLabel = 'Label';
const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet quis quam sed suscipit. Proin viverra mollis dolor id euismod. Duis nisi augue, ultrices ut accumsan id, tristique ac diam. Ut efficitur, orci a mattis viverra, nisi sapien porttitor augue, non porta tortor turpis quis dolor. Aenean laoreet ante metus, a euismod orci varius sed. Vestibulum vel.';

export default function Accordion({label = defaultLabel, content = defaultContent, index}) {
  const [isOpen, setIsOpen] = useState(false);

  //onClick also accounts for users pressing space or enter
  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`accordion__item ${isOpen ? 'accordion__item--open' : 'accordion__item--closed'}`}>
      <button id={`accordion-button-${index}`} className="accordion__title__wrapper" type="button" aria-expanded={isOpen} aria-controls={`accordion-panel-${index}`} onClick={handleIsOpen}>
        <span className="accordion__title">
          <svg className="accordion__title__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e71757" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          {label}
        </span>
        <span className="accordion__marker">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#e71757" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </span>
      </button>
      <div id={`accordion-panel-${index}`} className="accordion__content" aria-labelledby={`accordion-button-${index}`} aria-hidden={!isOpen}>
        <p>{content}</p>
      </div>
    </div>
  )
}