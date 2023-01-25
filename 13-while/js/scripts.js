//# Ejercicios

//## While

//- Crea un array vacío. A través de un bucle while rellénalo con 10 números que no se repitan.

const array = [];

const randomNumber = number => {
  return Math.floor(Math.random() * (number + 1));
};

while (array.length < 10) {
  const number = randomNumber(11);
  if (!array.includes(number)) {
    array.push(number);
  }
  console.log(array);
}
