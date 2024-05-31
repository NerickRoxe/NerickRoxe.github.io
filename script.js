function hoverEffect(item) {
    item.style.transform = "scale(1.05)"; // Agranda el item al hacer hover
    item.style.transition = "transform 0.3s ease"; // Agrega una transición suave
}

function normalEffect(item) {
    item.style.transform = "scale(1)"; // Vuelve al tamaño original al quitar el hover
}

function toggleEffect(element) {
    element.classList.toggle('selected');
    element.classList.toggle('grow');
}

// Selecciona todos los elementos con la clase 'item'
const items = document.querySelectorAll('.item');

// Itera sobre cada elemento
items.forEach(item => {
    // Agrega un event listener para el evento 'mouseenter'
    item.addEventListener('mouseenter', () => {
        // Agrega la clase 'hovered' al elemento cuando el mouse entra en él
        item.classList.add('hovered');
    });

    // Agrega un event listener para el evento 'mouseleave'
    item.addEventListener('mouseleave', () => {
        // Elimina la clase 'hovered' del elemento cuando el mouse sale de él
        item.classList.remove('hovered');
    });
});

window.addEventListener('scroll', function() {
    let items = document.querySelectorAll('.item');
    
    items.forEach(function(item) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            item.classList.remove('blur');
        } else {
            item.classList.add('blur');
        }
    });
});
