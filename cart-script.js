// Función para cargar el carrito en carrito.html
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-box');
    const total = document.getElementById('total');
    const payButton = document.getElementById('button')
    const removeButton = document.getElementById('remove')
    


    if (cart.length === 0) {
        console.log(cart)
        cartContainer.innerHTML = `<p>El carrito está vacío... 
        Visite nuestro <span><a href="menu.html">Menu</a></span> 
        para realizar su pedido</p>`;
        total.innerHTML = '<h3>Total $0</h3>'
        return;
    }
    else{
        console.log(cart);
        removeButton.style.display = 'block'
        removeButton.addEventListener('click', function() {
            localStorage.clear()
            location.reload()
            console.log(localStorage)
        })


    }
    let precioTotal = 0;
    cart.forEach(product => {      
        const productElement = document.createElement('div');
        productElement.classList.add('item');
        productElement.innerHTML = `
        <img src="${product.imagePath}" alt="">
        <h4 class="titulo">${product.name}</h4>
        <div class="detalle">
            <p>Cantidad: ${product.quantity}</p>
            <p>Precio: $${product.price * product.quantity}</p>
        </div>
        `;
        cartContainer.appendChild(productElement);
        precioTotal += product.price * product.quantity;
        console.log(product.price)


        
    });
    total.innerHTML = `<h2>Total $${precioTotal}</h2>`
}

loadCart();