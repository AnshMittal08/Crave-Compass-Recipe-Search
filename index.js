import recipes from "./recipes.js";

function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    var textOverlay = document.querySelector('.text-overlay');
    var h1 = textOverlay.querySelector('h1');
    var h3 = textOverlay.querySelectorAll('h3');

    navList.classList.toggle('show');
    if (navList.classList.contains('show')) {
        h1.style.display = 'none';
        h3.forEach(function (item) {
            item.style.display = 'none';
        });
    } else {
        h1.style.display = 'block';
        h3.forEach(function (item) {
            item.style.display = 'block';
        });
    }
}

