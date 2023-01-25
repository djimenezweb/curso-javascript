// # Ejercicios

// ## Objeto Window

// - Crea una web que tenga un alto mínimo de 1000vh y muestra en un h1 "Te has desplazado X píxeles" cada vez que hagas scroll. Hazlo con un función llamada handleScroll.
// - En esa misma web, crea un elemento que se coloque SIEMPRE en la parte superior y que va a representar la cantidad de scroll que hemos hecho, cuando estemos arriba del todo tendrá un "ancho" de 0 y cuando estemos abajo del todo tendrá un "ancho" que ocupe toda la pantalla.

const pixelsElement = document.getElementById('pixels');
const scrollBarElement = document.getElementById('scroll-bar');

const handleScroll = ev => {
  pixelsElement.textContent = ev.target.scrollingElement.scrollTop;
  scrollBarElement.style.width =
    (ev.target.scrollingElement.scrollTop * 100) /
      (ev.target.scrollingElement.scrollHeight - window.innerHeight) +
    '%';
};

window.addEventListener('scroll', handleScroll);

// En este caso, ev.target equivale a window porque window ha sido quien ha desencadenado el evento (mediante un scroll)
// Si fuese un clic, ev.target equivale al sitio donde se ha hecho clic.
