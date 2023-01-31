// IMPORTANTE: Hay que deshabilitar la caché del navegador
// Firefox: Inspeccionar > Network > Disable Cache

const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const diceIcon = document.getElementById('dice-icon');

const fetchData = url => fetch(url);

const getAdvice = () => {
  const request = fetchData('https://api.adviceslip.com/advice');

  request
    .then(response => response.json())
    .then(data => {
      adviceNumber.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    });
};

getAdvice();

diceIcon.addEventListener('click', getAdvice);

// Entre 1 y 224
