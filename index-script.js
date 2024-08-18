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