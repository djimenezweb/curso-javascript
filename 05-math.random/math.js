// # Ejercicios

// ## Math

// - Crea una función que reciba un número y genere un número aleatorio entre 0 y ese número (ambos incluidos).

const generateRandomNumber = number => {
  return Math.floor(Math.random() * (number + 1));
};

console.log(generateRandomNumber(14));

// - Crea una función que reciba un mínimo y un máximo y genere un número entero aleatorio entre esos dos números.

// GENERADOR DE NÚMEROS ALEATORIOS -- NOS SERÁ ÚTIL --

const minMaxRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(minMaxRandomNumber(3, 8));

// FIN GENERADOR DE NÚMEROS ALEATORIOS
