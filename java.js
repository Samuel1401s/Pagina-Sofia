function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    menu.classList.toggle("open");
  }
  
  let indiceActual = 0;
  
  function moverCarrusel(direccion) {
    const carruselItems = document.querySelector(".carrusel-items");
    const imagenes = carruselItems.querySelectorAll("img");
    const totalItems = imagenes.length;
   
    imagenes[indiceActual].classList.remove("active");
  
    indiceActual += direccion;

    if (indiceActual < 0) {
      indiceActual = totalItems - 1;
    } else if (indiceActual >= totalItems) {
      indiceActual = 0;
    }
  
    imagenes[indiceActual].classList.add("active");
  }
  document.addEventListener("DOMContentLoaded", function() {
    const carruselItems = document.querySelector(".carrusel-items");
    const imagenes = carruselItems.querySelectorAll("img");
    imagenes[0].classList.add("active");
  });