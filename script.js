// let sliderInner = document.querySelector('.slider--iner');
// if (sliderInner) {
//     let images = sliderInner.querySelectorAll('img');
//     let index = 1;

//     setInterval(function() {
//         let percentage = index * -100;
//         sliderInner.style.transform = "translateX(" + percentage + "%)";
//         index++;
//         if (index > images.length - 1) {
//             index = 0;
//         }
//     }, 5000);
// }

// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function() {
//         // Elimina la clase 'active' de todas las tarjetas
//         document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

//         // Añade la clase 'active' a la tarjeta clicada
//         this.classList.add('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('toggle');
    var socialMedia = document.querySelector('.social-media');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            // Aplicar los cambios de estilo para el estado "checked"
            socialMedia.style.backgroundColor = 'white';
            socialMedia.querySelectorAll('i, span').forEach(function(el) {
                el.style.color = 'black';
            });
            socialMedia.style.transform = 'translateY(-50vh)';
        } else {
            // Aplicar los cambios de estilo para el estado "unchecked"
            socialMedia.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            socialMedia.querySelectorAll('i, span').forEach(function(el) {
                el.style.color = 'white';
            });
            socialMedia.style.transform = 'translateY(0)';
        }
    });

    // Espera a que el DOM esté completamente cargado
    const checkbox = document.getElementById('toggle');
    const duration = 5000; // Duración de la animación en milisegundos

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                setTimeout(() => {
                    checkbox.checked = false; // Desmarcar el checkbox después de la animación
                    // Restaurar el estilo después de desmarcar el checkbox
                    socialMedia.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                    socialMedia.querySelectorAll('i, span').forEach(function(el) {
                        el.style.color = 'white';
                    });
                    socialMedia.style.transform = 'translateY(0)';
                }, duration); // Tiempo en milisegundos igual a la duración de la animación
            }
        });
    }
});