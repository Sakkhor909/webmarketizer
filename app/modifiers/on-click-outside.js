import { modifier } from 'ember-modifier';

export default modifier((element, [callback]) => {
  const ModalSection = document.querySelector('.modal-section');
  function handleClick(event) {
    if (!ModalSection.contains(event.target)) {
      callback();
    }
  }

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
});
