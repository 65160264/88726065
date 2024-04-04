var places = [];
if (localStorage.getItem('places')) {
    var dataArray = localStorage.getItem('places');
    places = JSON.parse(dataArray);
}
else localStorage.setItem("places", JSON.stringify(places));



document.addEventListener("DOMContentLoaded", function main() {
    document.getElementById("search").value = "";
    var html = '';
    for (var i = 0; i < places.length; i++) {
        if (places && places.length > 0) {
            html += `<br>
                    <h2>${places[i].name}</h2><br>
                    <a href="${places[i].map}" target="_blank"><- Google Maps -></a><br>
                    <img src="${places[i].image}">
                    <p>${places[i].description}</p>
                    <p1>
                        Category: ${places[i].category}<br>
                        Location: ${places[i].location}
                    </p1>
                    <br>
                    <hr>       
                `;
        }
    }
    document.getElementById("details").innerHTML = html;
});






document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("search").value = "";
    var html = '';
    for (var i = 0; i < places.length; i++) {
        if (places && places.length > 0) {
            html += `<br>
                    <h2>${places[i].name}</h2><br>
                    <a href="${places[i].map}" target="_blank"><- Google Maps -></a><br>
                    <img src="${places[i].image}">
                    <p>${places[i].description}</p>
                    <p1>
                        Category: ${places[i].category}<br>
                        Location: ${places[i].location}
                    </p1>
                    <br>
                    <hr>
                `;
        }
    }
    document.getElementById("details").innerHTML = html;
});


function search() {
    var search = document.getElementById("search").value.toLowerCase();
    var result = document.getElementById("details");
    var html = '';
    var found = false; // Flag to check if any result is found
    for (var i = 0; i < places.length; i++) {
        var str = places[i].name.toLowerCase() + places[i].location.toLowerCase() + places[i].category.toLowerCase() + places[i].sector.toLowerCase();
        if (str.includes(search)) {
            html += `<br>
                    <h2>${places[i].name}</h2><br>
                    <a href="${places[i].map}" target="_blank"><- Google Maps -></a><br>
                    <img src="${places[i].image}">
                    <p>${places[i].description}</p>
                    <p1>
                        Category: ${places[i].category}<br>
                        Location: ${places[i].location}
                    </p1>
                    <br>
                    <hr>
                `;
            found = true;
        }
    }
    if (!found) { // If no result is found, display the message
        html += `
                <h1 style="text-align: center;">NO Result In Data</h1>
            `;
    }
    result.innerHTML = html;
}

