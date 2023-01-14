// # Ejercicios

// ## Math

// - Crea una función que reciba un número y genere un número aleatorio entre 0 y ese número.

const generateRandomNumber = number => {
    console.log(Math.random() * number + 1)
};

generateRandomNumber(14);


// - Crea una función que reciba un mínimo y un máximo y genere un número entero aleatorio entre esos dos números.

// GENERADOR DE NÚMEROS ALEATORIOS -- NOS SERÁ ÚTIL --

const minMaxRandomNumber = (min, max) => {
    console.log(Math.floor((Math.random() * (max - min + 1) + min)))
};

minMaxRandomNumber(3, 8);

// FIN GENERADOR DE NÚMEROS ALEATORIOS