// # Ejercicios

// ## DOM

// <header id="header" class="header">
//   <h1 id="main-title" class="title title--big">Soy un título</h1>
//   <h2 id="main-subtitle" class="subtitle subtitle--big">Soy un subtítulo</h2>
// </header>

// - Partiendo de este HTML, crea una función que reciba UN SOLO ELEMENTO (Elige uno de los 3) y muestre toda la información propia y de los otros dos elementos, padres, hermanos o hijos en función del elemento que hayas elegido. La función debe mostrar por consola el id, las clases, el textContent, el ancho y el alto de los tres elementos con un mensaje que no parezca de un robot 😊.

const dom = element => {
  console.log(`Soy ${element.id}. Tengo las clases ${element.classList}. Mi texto es ${element.textContent}. Mido ${element.clientWidth}px de ancho y ${element.clientHeight}px de alto.`)
  console.log(`Tengo ${element.childElementCount} hijos: ${element.children[0].id} y ${element.children[1].id}`)
  console.log(`Mi primer hijo es ${element.children[0].id.toUpperCase()}. Tiene las clases ${element.children[0].classList}. Su texto es "${element.children[0].textContent}". Mide ${element.children[0].clientWidth}px de ancho y ${element.children[0].clientHeight}px de alto.`)
  console.log(`Mi segundo hijo es ${element.children[1].id.toUpperCase()}. Tiene las clases ${element.children[1].classList}. Su texto es "${element.children[1].textContent}". Mide ${element.children[1].clientWidth}px de ancho y ${element.children[1].clientHeight}px de alto.`)
};

dom(document.getElementById('header'));

//console.dir(document.getElementById('header'))
