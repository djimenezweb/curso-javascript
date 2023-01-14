// # Ejercicios

// ## Funciones con return (Todas retornan el resultado y la impresión en consola se hace fuera de la función)


// - Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

function sayHello2(name) {
    return 'Hola, ' + name;
}

console.log(sayHello2('Daniel'));


// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(a) {
    return a * a;
}

console.log(calculateSquareArea(3));


// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(a, b) {
    return (a * b) / 2;
}

console.log(calculateTriangleArea(5, 6))


// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculateCircleArea(r) {
    return (r * r * 3.14)
}

console.log(calculateCircleArea(5))


// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(c) {
    return ((c * 1.8) + 32)
}

console.log(celsiusToFahrenheit(20))


// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

function fahrenheitToCelsius(f) {
    return ((f - 32) / 1.8)
}

console.log(fahrenheitToCelsius(68))


// - Crea una función totalPrice que reciba un precio y le sume el IVA.

function totalPrice(p) {
    return p + (p * 0.21)
}

console.log(totalPrice(100))


// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note) {
    return `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}.`
}

console.log(writeMessage('Adrián', 'dinosaurios', 'grande', 'importante'))