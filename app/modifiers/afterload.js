import { modifier } from 'ember-modifier';

export default modifier((element) => {
  element.addEventListener('load', () => {
    let run = async () => {
      addClass();
      await delay(10000);
      removeClass();
      await delay(2000);
      changeImage();
    };
    run();
  });

  const images = [
    './assets/images/Websitecreatebanner.gif',
    './assets/images/Facebookpagebanner.gif',
    './assets/images/banner.png',
  ];

  let currentImage = 0;

  function changeImage() {
    element.src = images[currentImage];
    currentImage++;
    if (images.length == currentImage) {
      currentImage = 0;
    }
  }

  function addClass() {
    element.classList.remove('home-animi-down');
    element.classList.add('home-animi-left');
  }

  function removeClass() {
    element.classList.remove('home-animi-left');
    element.classList.add('home-animi-down');
  }

  async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
  return () => {
    document.removeEventListener('load', element);
  };
});
