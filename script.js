let sliderInner = document.querySelector('.slider--iner');
if (sliderInner) {
    let images = sliderInner.querySelectorAll('img');
    let index = 1;

    setInterval(function() {
        let percentage = index * -100;
        sliderInner.style.transform = "translateX(" + percentage + "%)";
        index++;
        if (index > images.length - 1) {
            index = 0;
        }
    }, 5000);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Elimina la clase 'active' de todas las tarjetas
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

        // Añade la clase 'active' a la tarjeta clicada
        this.classList.add('active');
    });
});