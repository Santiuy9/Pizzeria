function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-box');
    const total = document.getElementById('total');
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
                <div class="add-rest">
                    <button class="plus-quantity"><i class="fa-solid fa-plus"></i></button>
                    <p class="pudding">${product.quantity}</p>
                    <button class="min-quantity"><i class="fa-solid fa-minus"></i></button>
                </div>
                <button class="quit-product"><i class="fa-solid fa-xmark"></i></button>
                <i class="fa-solid fa-dollar-sign product-price"> ${product.price * product.quantity}</i>
            </div>
        `;
        cartContainer.appendChild(productElement);
    
        const plusButton = productElement.querySelector('.plus-quantity');
        const minusButton = productElement.querySelector('.min-quantity');
        const quantityElement = productElement.querySelector('.pudding');
        const priceElement = productElement.querySelector('.product-price');
        const quitProduct = productElement.querySelector('.quit-product');
    
        plusButton.addEventListener('click', () => {
            product.quantity += 1;
            quantityElement.textContent = product.quantity;
            priceElement.textContent = `${product.price * product.quantity}`;
            updateCartTotal();
        });
    
        minusButton.addEventListener('click', () => {
            if (product.quantity > 1) {
                product.quantity -= 1;
                quantityElement.textContent = product.quantity;
                priceElement.textContent = `${product.price * product.quantity}`;
                updateCartTotal();
            }
        });

        quitProduct.addEventListener('click', () => {
            for (let i = 0; i < cart.length; i++) {
                console.log(cart[i].name)
                if (cart[i].name === product.name) {
                    console.log(`Se elimino ${cart[i].name} del Carrito`);
                    console.log(i);
                    cart.splice(i, 1);
                    console.log(cart);
                    localStorage.clear();
                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(localStorage)
                    location.reload()
                };
            }
        })
        precioTotal += product.price * product.quantity;
        console.log(product.price);
    });
    
    function updateCartTotal() {
        let newTotal = 0;
        cart.forEach(product => {
            newTotal += product.price * product.quantity;
        });
        total.innerHTML = `<h2>Total $${newTotal}</h2>`;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    updateCartTotal();
}

loadCart();