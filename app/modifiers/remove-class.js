import { modifier } from 'ember-modifier';

export default modifier(function removeClass(element) {
  const serviceTimeFN = setTimeout(removingClass, 3000);
  function removingClass() {
    element.classList.remove('services-animi-up-1');
    element.classList.remove('services-animi-up-2');
    element.classList.remove('services-animi-up-3');
  }
  return () => {
    clearTimeout(serviceTimeFN);
  };
});
