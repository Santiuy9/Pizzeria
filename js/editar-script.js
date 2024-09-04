function loadEditItem() {
    const edit = JSON.parse(localStorage.getItem('edit'));
    const productContainer = document.querySelector('.edit-box');

    edit.forEach(product => {
        const editarProducto = document.createElement('div');
        editarProducto.classList.add('producto');
        editarProducto.innerHTML = `
            <div class="item">
                <img src=${product.imagenPath} alt="">
                <h4 class="titulo">${product.nombre}</h4>
            </div>
        `;
        productContainer.appendChild(editarProducto);

        const ingredientes = document.createElement('div');
        ingredientes.classList.add('ingredientes');

        // Aquí usaremos `appendChild` correctamente para cada ingrediente
        for (let i = 0; i < product.ingredientes.length; i++) {
            const ingrediente = document.createElement('div');
            ingrediente.classList.add('ingrediente');
            ingrediente.innerHTML = `
                <p>${product.ingredientes[i]}</p>
                <button>Quitar</button>
            `;
            ingredientes.appendChild(ingrediente); // Añadimos el ingrediente al contenedor de ingredientes
        }

        // Añadimos el contenedor de ingredientes al contenedor principal de producto
        editarProducto.appendChild(ingredientes);
    });
}

loadEditItem();
