import { Comida } from './Comida.js';

document.querySelectorAll('.item-buy a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const item = this.closest('.item');
        const productName = item.querySelector('h4').textContent;
        const productPrice = parseInt(this.textContent.trim().split('$')[1], 10);
        const image = item.querySelector('img');
        const imageUrl = image.getAttribute('src');
        
        console.log(productPrice);

        const product = {
            name: productName,
            price: productPrice,
            quantity: 1,
            imagePath: imageUrl,
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(p => p.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} se ha añadido al carrito.`);
        console.log(cart);
        console.log(product);
    });
});

document.querySelectorAll('.item-edit a').forEach(product => {
    product.addEventListener('click', function(event) {
        event.preventDefault();
        const item = this.closest('.item');
        const productName = item.querySelector('h4').textContent;
        const productPrice = parseInt(item.querySelector('.item-buy a').textContent.trim().split('$')[1], 10);
        const productIngredients = [];
        item.querySelectorAll('.ingredientes p').forEach(ing => {
            productIngredients.push(ing.textContent)
        });
        const image = item.querySelector('img');
        const imageUrl = image.getAttribute('src');

        console.log(productIngredients)
        
        const producto = new Comida(productName, productPrice, productIngredients, imageUrl)

        let edit = JSON.parse(localStorage.getItem('edit')) || [];

        edit.push(producto)

        localStorage.setItem('edit', JSON.stringify(edit));
        alert(`Vas a editar ${producto.nombre}`);

        window.location.href = "editar.html"
    });
});


// const editar = document.getElementById('editar-item');

// editar.addEventListener('click', function(event) {
//     event.preventDefault();
//     const item = this.closest('.item');
//     const productName = item.querySelector('h4').textContent;
//     const productPrice = parseInt(this.textContent.trim().split('$')[1], 10);
//     const image = item.querySelector('img')
//     const imageUrl = image.getAttribute('src');

    
//     const product = new Comida(productName, productPrice, "", imageUrl)


//     let edit = JSON.parse(localStorage.getItem('edit')) || [];
    
//     edit.push(product);
    
//     localStorage.setItem('edit', JSON.stringify(edit));
//     alert(`Vas a editar ${productName}`);

//     event.preventDefault();
//     window.location.href = "editar.html"


// })