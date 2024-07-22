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
        
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('toggle');
    var socialMedia = document.querySelector('.social-media');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            
            socialMedia.style.backgroundColor = 'white';
            socialMedia.querySelectorAll('i, span').forEach(function(el) {
                el.style.color = 'black';
            });
            socialMedia.style.transform = 'translateY(-50vh)';
        } else {
            
            socialMedia.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            socialMedia.querySelectorAll('i, span').forEach(function(el) {
                el.style.color = 'white';
            });
            socialMedia.style.transform = 'translateY(0)';
        }
    });

    
    const checkbox = document.getElementById('toggle');
    const duration = 5000; 

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                setTimeout(() => {
                    checkbox.checked = false; 
                    
                    socialMedia.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                    socialMedia.querySelectorAll('i, span').forEach(function(el) {
                        el.style.color = 'white';
                    });
                    socialMedia.style.transform = 'translateY(0)';
                }, duration); 
            }
        });
    }
});