document.getElementById('form-comentarios').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario y el recargo de la página

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('commit');

    // Añadir el contenido del comentario con la estructura HTML existente
    nuevoComentario.innerHTML = `
        <img src="img/avatar.png" alt="">
        <div>
            <h3>${nombre}</h3>
            <p>${comentario}</p>
        </div>
    `;

    // Añadir el comentario al contenedor de comentarios
    document.getElementById('lista-comentarios').appendChild(nuevoComentario);

    // Limpiar el formulario después de enviar
    document.getElementById('form-comentarios').reset();
});

document.querySelectorAll('.text-overlay a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const card = this.closest('.card');
        const cardName = card.querySelector('.titulo-card').textContent;
        const cardPrice = parseInt(this.textContent.trim().split('$')[1], 10);
        const image = card.querySelector('.image-container img')
        const imageUrl = image.getAttribute('src');

        const promo = {
            name: cardName,
            price: cardPrice,
            quantity: 1,
            imagePath: imageUrl
        }

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existePromo = cart.find(p => p.name === promo.name);

        if (existePromo) {
            existePromo.quantity += 1;
        }
        else {
            cart.push(promo);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${cardName} se ha añadido al carrito.`);
        console.log(cart);
        console.log(promo);
    });
})