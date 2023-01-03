// # Ejercicios

// ## Funciones de flecha (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

// - Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

const sayHello2 = (name) => 'Hola, ' + name;
console.log(sayHello2('Daniel'))

// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

const calculateSquareArea = a => a * a
console.log(calculateSquareArea(2))

// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.
const calculateTriangleArea = (b, a) => (b * a) / 2
console.log(calculateTriangleArea(2, 5))

// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.
const calculateCircleArea = r => r * r * 3.14
console.log(calculateCircleArea(5))

// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.
const celsiusToFahrenheit = c => (c * 1.8) + 32
console.log(celsiusToFahrenheit(20))

// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.
const fahrenheitToCelsius = f => (f - 32) / 1.8
console.log(fahrenheitToCelsius(68))

// - Crea una función totalPrice que reciba un precio y le sume el IVA.
const totalPrice = p => p + (p * 0.21)
console.log(totalPrice(100))

// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

const writeMessage = (name, material, size, note) => `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}.`
console.log(writeMessage('Pedro', 'polvorones', 'XL', 'Sin azúcar'))