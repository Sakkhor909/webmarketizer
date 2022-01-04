import { modifier } from 'ember-modifier';

export default modifier(function typeWritter(element) {
  let run = async () => {
    // After 10s remove the text
    await delay(10000);
    removeText();
    // After 10s add the text
    await delay(2000);
    addText();
  };
  run();
  let runAnimation = setInterval(run, 12000);

  window.onfocus = function () {
    if (document.querySelector('.active').dataset.tooltip == 'Home') {
      window.location.reload();
    }
  };
  window.onblur = function () {
    clearInterval(runAnimation);
  };

  const Text = [
    'This Text is for web developing banner!',
    'This Text is for Facebook page banner!',
    'Make your digital business live',
  ];
  let TextNo = 0;
  function removeText() {
    let newText = element.innerText.slice(0, -1);
    element.innerText = newText;
    let RemovingTimeout;
    if (element.innerText.length == 0) {
      clearTimeout(RemovingTimeout);
    } else {
      RemovingTimeout = setTimeout(removeText, 40);
    }
  }
  function addText() {
    let TextaddingTimeout;
    if (element.innerText.length == Text[TextNo].length) {
      clearTimeout(TextaddingTimeout);
      if (TextNo < 2) {
        TextNo++;
      } else {
        TextNo = 0;
      }
    } else {
      element.innerText += Text[TextNo].charAt(element.innerText.length);
      TextaddingTimeout = setTimeout(addText, 40);
    }
  }

  async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
  return () => {
    clearInterval(runAnimation);
  };
});
