import recipes from "./recipes.js";

// Get the recipe name from the URL
const urlParams = new URLSearchParams(window.location.search);
const recipeName = urlParams.get('name');

// Display the recipe details
if (recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (recipe) {
        const recipeDetailsDiv = document.getElementById('recipeDetails');
        recipeDetailsDiv.innerHTML = `
            <div class="recipe-title-area">
            <h2>${recipe.name}</h2> <button onclick="shareRecipe()"><i class='bx bxs-share-alt'></i></button>
            </div>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
            <h3>Ingredients:</h3>
            <div>
                ${recipe.ingredients.map(ingredient => `<button class="ingredient-btn">${ingredient}</button>`).join('')}
            </div>
            <div class="recipe-tags"><h3>Area :</h3> <p>${recipe.Area}<p></div>
            <div class="recipe-tags"><h3>Category :</h3> <p>${recipe.Category}<p></div>
        `;
        document.querySelector('.recipe-img img').src = recipe.image;
        document.querySelector('.recipe-title h2').innerHTML = recipe.name;
    } else {
        alert('Recipe not found');
    }
} else {
    alert('Recipe name not provided');
}

function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

// JavaScript
function shareRecipe() {
if (navigator.share) {
navigator.share({
    title: 'Recipe Name',
    text: 'Check out this delicious recipe!',
    url: window.location.href
})
.then(() => console.log('Shared successfully'))
.catch((error) => console.error('Error sharing:', error));
} else {
// Fallback for browsers that do not support Web Share API
alert('Web Share API not supported. Please share manually.');
}
}
