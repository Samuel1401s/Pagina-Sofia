function toggleMenu() {
    const menu = document.getElementById('menuLateral');
    menu.classList.toggle('open') }

    let indiceActual = 0;

    function moverCarrusel(direccion) {
        const carruselItems = document.querySelector('.carrusel-items');
        const totalItems = carruselItems.children.length;
        indiceActual += direccion;
        if (indiceActual < 0) {
            indiceActual = totalItems - 1;
        } else if (indiceActual >= totalItems) {
            indiceActual = 0;
        }
        const desplazamiento = -indiceActual * carruselItems.children[0].offsetWidth;
        carruselItems.style.transform = `translateX(${desplazamiento}px)`;
    }
    
