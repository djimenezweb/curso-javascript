// # Ejercicios

// ## Condicionales

// - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.

const checkAge = (name, age) => {
    if (age > 18) {
        return `Hola, ${name}, eres mayor de edad.`
    } else { return `Hola, ${name}, eres menor de edad.` }
}

console.log(checkAge('Daniel', 37))


// - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.

const higherNumber = (a, b) => {
    if (a > b) { return a } else { return b }
}

console.log(higherNumber(90, 89))


// - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.

const magicNumber = n => {
    if (n < 0) {
        return 'Negativo'
    } else if (n > 0) {
        return 'Positivo'
    } else return 0
}

console.log(magicNumber(0))


// - Crea una función que reciba el color de un semáforo, si es verde mostrará por consola "Puedes pasar", si es naranja mostrará "Acelera" y si es rojo mostrará "Frena"

const trafficLight = color => {
    if (color === 'rojo' || color === 'Rojo') {
        console.log('Frena')
    } else if (color === 'verde' || color === 'Verde') {
        console.log('Puedes pasar')
    } else if (color === 'naranja' || color === 'Naranja' || color === 'Ámbar' || color === 'ámbar') {
        console.log('Acelera')
    }
}

trafficLight('verde')


// - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"

const notas = (a, b, c) => {
    const media = (a + b + c) / 3;
    if (media < 5) {
        console.log('Suspenso')
    } else if (media >= 5 && media < 8) {
        console.log('Aprobado')
    } else if (media >= 8 && media < 10) {
        console.log('Matrícula de honor')
    }
}

notas(5, 4, 5)


// - Crea una función que reciba 3 números y los devuelva ordenados de mayor a menor

const order = (a, b, c) => {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c)
        } else {
            console.log(b, c, a)
        }
    } else if (a > b) {
        console.log(c, a, b)
    } else { console.log(c, b, a) }
}

order(2215, 1, 65)