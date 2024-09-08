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
            imagePath: `../${imageUrl}`
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

const comentContainer = document.querySelector('#comentarios');
let selectedStarIndex = null; 

document.querySelectorAll('#form-comentarios input, #form-comentarios textarea').forEach(field => {
    field.addEventListener('input', () => validateField(field));
    field.addEventListener('blur', () => validateField(field));
});

function validateField(field) {
    if (field.checkValidity()) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }
}

document.querySelectorAll('.stars label').forEach((label, index) => {
    label.addEventListener('mouseover', () => {
        comentContainer.classList.add(`star-hover-${index + 1}`);
        comentContainer.classList.remove(`star-selected-${selectedStarIndex}`)
    });
    
    label.addEventListener('mouseout', () => {
        comentContainer.classList.remove(`star-hover-${index + 1}`);
        comentContainer.classList.add(`star-selected-${selectedStarIndex}`);
    });
    
    label.addEventListener('click', () => {
        selectedStarIndex = index + 1;
        comentContainer.classList.add(`star-selected-${selectedStarIndex}`);
    });
});

document.getElementById('form-comentarios').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const comentario = document.getElementById('comentario');
    let isFormValid = true;

    [nombre, comentario].forEach(field => {
        if (!field.checkValidity()) {
            validateField(field);
            isFormValid = false;
        }
    });

    if (!isFormValid) return;

    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('commit');

    if (selectedStarIndex !== null) {
        nuevoComentario.classList.add(`star-hover-${selectedStarIndex}`);
    }

    if (selectElement.value === 'Avatar-Femenino') {
        nuevoComentario.innerHTML = `
        <img src="img/avatar-female.png" alt="">
        <div>
            <h3>${nombre.value}</h3>
            <p>${comentario.value}</p>
        </div>
    `;
    }
    
    if (selectElement.value === 'Avatar-Masculino') {
        nuevoComentario.innerHTML = `
        <img src="img/avatar-male.png" alt="">
        <div>
            <h3>${nombre.value}</h3>
            <p>${comentario.value}</p>
        </div>
    `;
    }

    if (selectElement.value === 'Otro') {
        nuevoComentario.innerHTML = `
        <img src="${document.querySelector('.avatar-image input').value}" alt="">
        <div>
            <h3>${nombre.value}</h3>
            <p>${comentario.value}</p>
        </div>
    `;
    }

    nuevoComentario.style.borderColor = colorInput.value;
    nuevoComentario.style.borderWidth = '2px'
    nuevoComentario.style.borderStyle = 'solid'

    document.getElementById('lista-comentarios').appendChild(nuevoComentario);
    document.getElementById('form-comentarios').reset();
    document.querySelectorAll('input, textarea').forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
    });
    
    comentContainer.classList.remove(`star-selected-${selectedStarIndex}`)
    avatarImgContainer.style.display = 'none';
});

const colorInput = document.getElementById('borderColor');

colorInput.addEventListener('input', function() {
    comentContainer.style.borderColor = colorInput.value;
    comentContainer.style.borderWidth = '2px';
    comentContainer.style.borderStyle = 'solid';
});

const selectElement = document.getElementById('avatar');
const avatarImgContainer = document.getElementById('avatar-image');

selectElement.addEventListener('change', () => {
    const selectValue = selectElement.value;
    console.log(`Has elegido: ${selectValue}`)
    if (selectElement.value === 'Otro') {
        avatarImgContainer.style.display = 'block';
    }
    else {
        avatarImgContainer.style.display = 'none';
    }
});