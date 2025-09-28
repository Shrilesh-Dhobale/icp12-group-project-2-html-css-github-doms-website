window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 2000); // 2 seconds delay for testing
});
    
document.addEventListener("DOMContentLoaded", function() {
    const imageMapping = {
        "blue-pencil": "./images/pencil.jpg",
        "violet-color": "./images/drawingandcolouring.jpg",
        "yellow-draw": "./images/craft.jpg",
        "pink-craft": "./images/fineart1.png",
        "red-pen": "./images/pens.jpg",
        "orange-hobby": "./images/marker.jpg",
        "brown-gift": "./images/gift.jpg",
        "green-stationary": "./images/paper stationary.jpg"
    };

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const img = card.querySelector("img");
                const imgId = img.id;

                if (imageMapping[imgId]) {
                    img.src = imageMapping[imgId];
                }
                observer.unobserve(card);
            }
        });
    }, { threshold: 1.0 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
