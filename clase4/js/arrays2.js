// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const multiply = array => {
  array.forEach((element, index) => console.log(element * index));
};

multiply([1, 2, 3, 4]);
console.log('--------------------');

// - Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2

const divide = array => {
  array.forEach((element, index) => console.log(element / (index + 2)));
};

divide([1, 2, 3, 4, 5]);
console.log('--------------------');

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const upperCase = array => {
  return array.map(value => value.toUpperCase());
};

console.log(upperCase(['Elefante', 'Salamandra']));
console.log('--------------------');

// - Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const filter = (array, letter) => {
  const filteredArray = array.filter(item => item.startsWith(letter));
  if (filteredArray.length === 0) {
    console.log('Ninguna coincidencia');
  } else {
    console.log(filteredArray);
  }
};

filter(['Calabaza', 'Dinosaurio'], 'C');
console.log('--------------------');
// - Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

const filterM = (array, letter) => {
  const filteredArray = array.filter(item =>
    item.toUpperCase().startsWith(letter.toUpperCase())
  );
  if (filteredArray.length === 0) {
    console.log('Ninguna coincidencia');
  } else {
    console.log(filteredArray);
  }
};

filterM(['Dromedario', 'Tarántula'], 'd');
console.log('--------------------');

// - Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor y de menor a mayor.

const orderNumbers = array => {
  console.log(array.sort((a, b) => b - a));
  console.log(array.sort((a, b) => a - b));
};

orderNumbers([4, 20, 19, 13, 61]);
console.log('--------------------');
// - Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente e inversamente.

const orderWords = array => {
  const sorted = array.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
  console.log(sorted);
  const sortedInv = array.sort((a, b) => {
    if (b.toLowerCase() < a.toLowerCase()) return -1;
    if (b.toLowerCase() > a.toLowerCase()) return 1;
    return 0;
  });
  console.log(sortedInv);
};

orderWords([
  'dinosaurio',
  'alcachofa',
  'elefante',
  'trigonométrico',
  'caleidoscopio',
  'tarántula',
  'Dinamarca'
]);
