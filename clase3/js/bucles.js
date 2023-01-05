// # Ejercicios

// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countDown = number => {
    for (let index = number; index > 0; index--) {
        console.log(index)
    }
}

countDown(5)



// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const totalArray = array => {
    let total = 0;
    for (const number of array) {
        total = total + number;
    }
    console.log(total)
}

totalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])




// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

// 4 x 0 = 0
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

const multiply = number => {
    for (let index = 0; index <= 10; index++) {
        console.log(`${number} x ${index} = ${number * index}`)
    }
}

multiply(4)


// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

// 4 x 10 = 40
// 4 x 9 = 36
// ...
// 4 x 1 = 4
// 4 x 0 = 0

const multiplyRev = number => {
    for (let index = 10; index >= 0; index--) {
        console.log(`${number} x ${index} = ${number * index}`)
    }
}

multiplyRev(5)

// - Crea una función que reciba un año y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....


const history = (year, age) => {
    console.log(`Naciste en el año ${year - age}.`)

    for (let index = 1; index < age; index++) {
        if (index === 1) {
            console.log(`En el año ${(year - age) + index} cumpliste ${index} año.`)
        } else {
            console.log(`En el año ${(year - age) + index} cumpliste ${index} años.`)
        }
    }
}


history(2023, 15)


// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const evenNumbers = (number1, number2) => {
    for (let index = number1; number2 >= index; index++) {
        if (index % 2 === 0) console.log(index)
    }
}

evenNumbers(2, 8)



// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const createTwoArrays = () => {
    const array1 = []
    const array2 = []

    for (let index = 1; index <= 5; index++) {
        array1.push(Math.floor(Math.random() * 10));
        array2.push(Math.floor(Math.random() * 10));
    }
    console.log(array1)
    console.log(array2)

    for (const item of array1) {
        if (array2.includes(item)) console.log(`El número ${item} está repetido`)
    }
}

createTwoArrays()


// - Crea una función que reciba un número y te diga si es primo o no.

const primeNumber = number => {
    for (let index = number - 1; index > 1; index--) {
        if ((number % index) === 0) return `El número ${number} no es primo`
    }
    return `El número ${number} es primo`
}

console.log(primeNumber(3))


// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const power = array => {
    for (const item of array) {
        console.log(`Número ${item} - Cuadrado: ${Math.pow(item, 2)} - Cubo: ${Math.pow(item, 3)}`)
    }
}

power([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.clear()

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const upperVowels = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'ü', 'á', 'é', 'í', 'ó', 'ú']
    let newWord = ''
    for (const letter of word) {
        if (vowels.includes(letter)) { newWord += letter.toUpperCase() }
        else { newWord += letter }
    }
    console.log(newWord)
}

upperVowels('cigüeña')



// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal

const numVowels = sentence => {
    let aCounter = 0
    let eCounter = 0
    let iCounter = 0
    let oCounter = 0
    let uCounter = 0

    for (const letter of sentence) {
        if (letter === 'a' || letter === 'á') aCounter++
        if (letter === 'e' || letter === 'é') eCounter++
        if (letter === 'i' || letter === 'í') iCounter++
        if (letter === 'o' || letter === 'ó') oCounter++
        if (letter === 'u' || letter === 'ú' || letter === 'ü') uCounter++
    }

    console.log(`La A se repite ${aCounter} veces. La E se repite ${eCounter} veces. La I se repite ${iCounter} veces. La O se repite ${oCounter} veces. La U se repite ${uCounter} veces.`)
}

numVowels('sobreesdrújula')





// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"






// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Elefante" deberá imprimir "etnafelE"






// - Crea una función que reciba un número entero e imprima un lista de números impares como ésta:
//   Si recibe un 6 imprimirá esta lista.
//   1
//   3 1
//   5 3 1
//   7 5 3 1
//   9 7 5 3 1
//   11 9 7 5 3 1