document.addEventListener("DOMContentLoaded", function() {
    var places = JSON.parse(localStorage.getItem("places"));
    var currentIndex = 0;
    var slideshowContainer = document.getElementById("slideshow-container");
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    function showPlace(index) {
        var place = places[index];
        slideshowContainer.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <div class="text">
                <h2>${place.name}</h2>
                <p1>${place.description}</p>
                <p><strong>Category:</strong> ${place.category}</p>
                <p><strong>Location:</strong> ${place.location}</p>
                <a href="${place.map}" target="_blank"><- Google Maps -></a>
            </div>
        `;
    }

    showPlace(currentIndex);

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + places.length) % places.length;
        showPlace(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % places.length;
        showPlace(currentIndex);
    });
});