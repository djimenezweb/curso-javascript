// # Ejercicios

// ## Strings

// - Crea dos funciones que reciban una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Una función lo resolverá con if y la otra con un operador ternario.

const checkWord = (word) => {
    if (word.length > 5) {
        console.log(word.toUpperCase())
    } else { console.log(word.toLowerCase()) }
}

checkWord('Gato')

const checkWord2 = word => word.length > 5 ? console.log(word.toUpperCase()) : console.log(word.toLowerCase())

checkWord2('salamandra')


// - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const superPower = (a, b) => {
    if (a.endsWith('ar') && b.endsWith('ar')) {
        console.log(`Los verbos ${a} y ${b} son de la primera conjugación`)
    } else if (a.endsWith('ar') && b.endsWith('er')) {
        console.log(`El verbo ${a} es de la primera conjugación y el verbo ${b}, de la segunda`)
    } else if (a.endsWith('ar') && b.endsWith('ir')) {
        console.log(`El verbo ${a} es de la primera conjugación y el verbo ${b}, de la tercera`)
    } else if (a.endsWith('er') && b.endsWith('er')) {
        console.log(`Los verbos ${a} y ${b} son de la segunda conjugación`)
    } else if (a.endsWith('er') && b.endsWith('ar')) {
        console.log(`El verbo ${a} es de la segunda conjugación y el verbo ${b}, de la primera`)
    } else if (a.endsWith('er') && b.endsWith('ir')) {
        console.log(`El verbo ${a} es de la segunda conjugación y el verbo ${b}, de la tercera`)
    } else if (a.endsWith('ir') && b.endsWith('ir')) {
        console.log(`Los verbos ${a} y ${b} son de la tercera conjugación`)
    } else if (a.endsWith('ir') && b.endsWith('ar')) {
        console.log(`El verbo ${a} es de la tercera conjugación y el verbo ${b}, de la primera`)
    } else if (a.endsWith('ir') && b.endsWith('er')) {
        console.log(`El verbo ${a} es de la tercera conjugación y el verbo ${b}, de la segunda`)
    }
}

superPower('brindar', 'dormir')



// - Crea una función que reciba un sólo parámetro con nombre y apellido separados por un espacio. La función debe separar el nombre y el apellido e imprimirlos por separado en dos console.log.

const nameSurname = n => {
    console.log(n.substring(0, n.indexOf(' ')))
    console.log(n.substring(n.indexOf(' ') + 1))
}

nameSurname('Pablo Picasso')



// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

const generateWord = (word1, word2, word3) => {
    console.log(
        word1.charAt(Math.floor((Math.random() * word1.length)))
        + word1.charAt(Math.floor((Math.random() * word1.length)))
        + word2.charAt(Math.floor((Math.random() * word2.length)))
        + word2.charAt(Math.floor((Math.random() * word2.length)))
        + word3.charAt(Math.floor((Math.random() * word3.length)))
        + word3.charAt(Math.floor((Math.random() * word3.length)))
    )
}

generateWord('elefante', 'teclado', 'ventana')


// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

const separateEmail = email => {
    console.log('El usuario es ' + email.substring(0, email.indexOf('@')))
    console.log('El dominio es ' + email.substring(email.indexOf('@') + 1))
}

separateEmail('dorian@gmail.com')