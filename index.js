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

const recipeContainer = document.querySelector('.recipe-container');
recipes.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    const imgElement = document.createElement('img');
    imgElement.src = recipe.image;
    imgElement.alt = recipe.name;
    
    // Attach the event listener here
    imgElement.addEventListener('click', function() {
        navigateToRecipe(recipe.name);
    });
    
    recipeDiv.appendChild(imgElement);
    
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('recipe-heading');
    headingDiv.innerHTML = `<h4>${recipe.name}</h4>`;
    
    recipeDiv.appendChild(headingDiv);
    recipeDiv.classList.add('recipe-card');
    recipeContainer.appendChild(recipeDiv);
});




function navigateToRecipe(recipeName) {
    window.location.href = `recipe.html?name=${recipeName}`;
}

// window.navigateToRecipe = function(recipeName) {
//     window.location.href = `recipe.html?name=${recipeName}`;
// };

let recipeCards = document.querySelectorAll('.recipe-card');
let showBtn = document.querySelector('.show-btn');
let elementsPerRow = getElementsPerRow();

// Initially show only the elements in the first row
for (let i = elementsPerRow*3; i < recipeCards.length; i++) {
    recipeCards[i].style.display = 'none';
}

let currentRow = 3;

showBtn.addEventListener('click', function () {
    let startIndex = currentRow * elementsPerRow;
    let endIndex = Math.min(startIndex + elementsPerRow*3, recipeCards.length);

    for (let i = startIndex; i < endIndex; i++) {
        recipeCards[i].style.display = 'block';
    }

    currentRow+=3;

    if (endIndex >= recipeCards.length) {
        showBtn.style.display = 'none';
        toggleCollapseButton();
    }
});

function getElementsPerRow() {
    let rowWidth = document.querySelector('.recipe-container').offsetWidth;
    let cardWidth = recipeCards[0].offsetWidth;
    return Math.floor(rowWidth / cardWidth);
}

let collapseBtn = document.createElement('button');
collapseBtn.textContent = 'Collapse Recipes ';
let icon = document.createElement('i');
icon.classList.add('bx', 'bx-chevron-up-circle');
collapseBtn.appendChild(icon);
collapseBtn.classList.add('collapse-btn');
collapseBtn.style.display = 'none'; // Initially hide the collapse button

function toggleCollapseButton() {
    if (showBtn.style.display === 'none') {
        collapseBtn.style.display = 'inline-block';
        collapseBtn.addEventListener('click', function () {
            for (let i = elementsPerRow*3; i < recipeCards.length; i++) {
                recipeCards[i].style.display = 'none';
            }
            showBtn.style.display = 'block';
            collapseBtn.style.display = 'none';
            currentRow = 3; // Reset currentRow to 1
        });
        showBtn.parentNode.insertBefore(collapseBtn, showBtn.nextSibling);
    } else {
        collapseBtn.style.display = 'none';
    }
}

let viewAllButton = document.querySelector('.view-all-recipes');
viewAllButton.addEventListener('click', function(){
    viewAllRecipes();
});

function viewAllRecipes() {
    for (let i = 0; i < recipeCards.length; i++) {
        recipeCards[i].style.display = 'block';
    }
    showBtn.style.display = 'none';
    toggleCollapseButton();
}



//Nav-Bar Contact Us scroll movement
const contactUsLink = document.getElementById('ContactUs');
const footer = document.querySelector('footer');

contactUsLink.addEventListener('click', function(event){
    event.preventDefault();
    footer.scrollIntoView({ behavior: 'smooth' });
});

const recipesLink =  document.getElementById("recipes");
const recipeDiv = document.querySelector('.recipe-container');
recipesLink.addEventListener('click',function(event){
    event.preventDefault();
    recipeDiv.scrollIntoView({behavior:'smooth'});
});



function viewCategory(category) {
window.location.href = `view-all-categories.html?category=${category}`;
}

