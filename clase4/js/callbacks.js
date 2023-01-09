// # Ejercicios

// ## Callbacks

// - Crea una función que sea capaz de multiplicar cada número de un array por 2 e imprimir por consola el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola cada número del array multiplicado por dos.

const multiply2 = array => {
for (const number of array) {
  console.log(number * 2)
}
}

const multiplyCallback = (array, cb) => {
  cb(array)
}

multiplyCallback([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], multiply2)


// - Crea una función que sea capaz de multiplicar cada número de un array por 3 y devolver un array nuevo relleno con el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con cada número multiplicado por tres.

const multiply3 = array => {
  let newArray = []
  for (const number of array) {
newArray.push(number * 3)
  }
  console.log(newArray)
}

const multiply3Callback = (array, cb) => {
  cb(array)
}

multiply3Callback([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], multiply3)




// - Crea una función que sea capaz de filtrar los números pares e impares y devolver un array nuevo relleno sólo con los pares. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con los números pares.

const filterEven = array => {
  let evenNumbers = []
  for (const item of array) {
    if (item % 2 === 0) evenNumbers.push(item)
      } return evenNumbers
}

const filterEvenCallback = (array, cb) => {
  console.log(cb(array))
}

filterEvenCallback([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], filterEven)