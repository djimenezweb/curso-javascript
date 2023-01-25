//# Ejercicios

//## Recursividad

//- - Crea un array vacío. A través de una función recursiva, rellénalo con 10 números que no se repitan.

const array = [];
console.log(array);

const randomNumber = number => {
  return Math.floor(Math.random() * (number + 1));
};

const fillArray = n => {
  if (array.length === 10) return;
  const number = randomNumber(n);
  if (!array.includes(number)) {
    array.push(number);
  }
  fillArray(100);
};

fillArray(100);

console.log(array);
