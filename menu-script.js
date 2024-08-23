// Asumiendo que script.js ya tiene código base, añadiremos lo siguiente:

document.querySelectorAll('.item-options a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const item = this.closest('.item');
        const productName = item.querySelector('h4').textContent;
        const productPrice = parseInt(this.textContent.trim().split('$')[1], 10);
        const image = item.querySelector('img') 
        const imageUrl = image.getAttribute('src');

        // Crear el objeto del producto
        const product = {
            name: productName,
            price: productPrice,
            quantity: 1,
            imagePath: imageUrl,
        };

        // Guardar en localStorage (o enviar a Firebase si ya está confirmado)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(p => p.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} se ha añadido al carrito.`);
        console.log(cart)
        console.log(product)

    });
});
