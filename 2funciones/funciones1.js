// # Ejercicios

// ## Funciones 1

// - Crea una función llamada sayHello que diga por consola "hola tuNombre" y ejecútala.

// ## Funciones con parámetros (Todas muestran el resultado por consola)


// - Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

function sayHello(nombre) {
    console.log('Hola, ' + nombre)
}
sayHello('Daniel')


// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(a) {
    console.log(a * a)
}

calculateSquareArea(5)


// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(a, b) {
    console.log((a * b) / 2)
}

calculateTriangleArea(2, 5)


// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculateCircleArea(r) {
    console.log(r * r * 3.1416)
}

calculateCircleArea(4)


// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(c) {
    console.log((c * 1.8) + 32)
}

celsiusToFahrenheit(20)


// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

function fahrenheitToCelsius(f) {
    console.log((f - 32) / 1.8)
}

fahrenheitToCelsius(68)


// - Crea una función totalPrice que reciba un precio y le sume el IVA.

function totalPrice(p) {
    console.log(p + (p * 0.21))
}

totalPrice(100)


// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note) {
    console.log(`${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}.`)
    console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note + '.')
}

writeMessage('Adrián', 'Dinosaurios', 'gigantesco', 'Urgente')