const titleElement = document.getElementById('title');

const LS = localStorage;

// LS.setItem(key, value)
// LS.getItem(key)
// LS.clear()

LS.setItem('clave', 'valor');

// Se puede guardar lo que sea, pero los arrays no se guardan como tales.
// Hay que guardarlos como un string para que se guarden los corchetes
// JSON.stringify()
// y para obtenerlo de nuevo: JSON.parse()
// Por ejemplo:

const array = ['item1', 'item2'];

LS.setItem('array', JSON.stringify(array));

const storageArray = JSON.parse(LS.getItem('array'));

console.log(storageArray);

// Todo esto tb se puede hacer con Session Storage
