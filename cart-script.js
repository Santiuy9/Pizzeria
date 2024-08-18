// Función para cargar el carrito en carrito.html
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-box');
    const total = document.getElementById('total');
    


    if (cart.length === 0) {
        console.log(cart)
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
        total.innerHTML = '<h3>Total $0</h3>'
        return;
    }
    else{
        console.log(cart)

    }
    let precioTotal = 0;
    cart.forEach(product => {      
        const productElement = document.createElement('div');
        productElement.classList.add('item');
        productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="">
        <h4>${product.name}</h4>
        <p>Cantidad: ${product.quantity}</p>
        <p>Precio: $${product.price * product.quantity}</p>
        `;
        cartContainer.appendChild(productElement);
        precioTotal += product.price * product.quantity;
        console.log(product.price)


        
    });
    total.innerHTML = `<h2>Total $${precioTotal}</h2>`
}

loadCart();