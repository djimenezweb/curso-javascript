// # Ejercicios

// ## Arrays

// - Usando la función que genera un número aleatorio anterior, crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array.

const generateRandomNumber = number => {
    return (Math.floor(Math.random() * number))
};

const randomArray = array5 => {
    console.log(array5[generateRandomNumber(array5.length)])
}

randomArray([1, 2, 3, 4, 5])


// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

//   - "La suma de todos los números es:[suma]"
//   - "La media de todos los números es:[media]"
//   - "El mayor es [mayor] y el menor es [menor]"


const superPower = array => {
    console.log(`La suma de todos los números es ${array[0] + array[1] + array[2]}`)
    console.log(`La media de todos los números es ${(array[0] + array[1] + array[2]) / array.length}`)
    console.log(`El mayor es ${Math.max(array[0], array[1], array[2])}. El menor es ${Math.min(array[0], array[1], array[2])}.`)
}

superPower([2, 7, 6])


// - Crea una función que reciba un array con 5 números y un número aleatorio entre 0 y 5. La función deberá decir si el array contiene ese número y en qué posición o si no lo contiene.

const minMaxRandomNumber = (min, max) => {
    return (Math.floor((Math.random() * (max - min + 1) + min)))
};

const containsNumber = (array, number) => {
    if (array.includes(number)) {
        console.log(`El número ${number} se encuentra en el array en la posición ${array.indexOf(number)}`)
    } else {
        console.log(`El número ${number} no está en el array.`)
    }
}

containsNumber([2, 5, 1, 17], minMaxRandomNumber(0, 5));


// - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const generateArray = array => {
    array.push(minMaxRandomNumber(0, 100));
    array.push(minMaxRandomNumber(0, 100));
    array.push(minMaxRandomNumber(0, 100));
    return array
}

console.log(generateArray([]))


// - Usando la función anterior, crea otra función que imprima el valor en la posición 0 del array después de haber eliminado la primera y la última posición.

const deleteArray = array => {
    console.log(array)
    array.shift();
    array.pop();
    console.log(array[0])
}

deleteArray(generateArray([]))