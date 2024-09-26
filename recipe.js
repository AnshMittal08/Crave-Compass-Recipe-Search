const recipes = [
    {
        name: "Pasta Carbonara",
        image:"Assests/pasta-carbonara-1.jpg",
        ingredients: ["200g spaghetti", "2 eggs", "100g pancetta", "50g grated Parmesan cheese"],
        instructions: "<h5>Step-1</h5>Cook spaghetti according to package instructions. <h5>Step-2</h5>In a bowl, whisk eggs and Parmesan. <h5>Step-3</h5>In a skillet, cook pancetta until crispy. <h5>Step-4</h5>Toss drained spaghetti with pancetta, then mix in egg mixture. Serve hot.",
        Area: "Italian",
        Category: ["Main Course","Crave Centre","Breakfast"]
    },
    {
        name: "Chocolate Chip Cookies",
        image:  "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
        ingredients: ["1 cup butter", "1 cup white sugar", "1 cup packed brown sugar", "2 eggs", "2 teaspoons vanilla extract", "3 cups all-purpose flour", "1 teaspoon baking soda", "2 teaspoons hot water", "1/2 teaspoon salt", "2 cups semisweet chocolate chips"],
        instructions: "<h5>Step-1</h5>Heat oven to 180C/160C fan/gas 4 and line two baking sheets with parchment.<h5>Step-2</h5> Cream the butter and sugars together until very light and fluffy, then beat in the egg and vanilla. <h5>Step-3</h5>Once combined, stir in the flour, bicarb, chocolate and ¼ tsp salt.Scoop 10 large tbsps of the mixture onto the trays, leaving enough space between each to allow for spreading. <h5>Step-4</h5>Bake for 10-12 mins or until firm at the edges but still soft in the middle – they will harden a little as they cool. <h5>Step-5</h5>Leave to cool on the tray for a few mins before eating warm, or transfer to a wire rack to cool completely.<h5>Step-6</h5> Will keep for three days in an airtight container.",
        Area: "Sweets",
        Category: ["Dessert","Light Snack"]
    },
    {
        name: "Baigan Bharta" ,
        image: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg" ,
        ingredients:["1 large Aubergine","½ cup Onion","1 cup Tomatoes","6 cloves Garlic","1 Green Chili","¼ teaspoon Red Chili Powder","1.5 tablespoon Oil","1 tablespoon chopped Coriander Leaves","as required salt"] ,
        instructions: "<h5>Step-1</h5>Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and keep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get the smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly cooked. You could also embed some garlic cloves in the baingan and then roast it. <h5>Step-2</h5> Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid easily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools down. <h5>Step-3</h5> You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step. Use natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red. <h5>Step-4</h5> Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted aubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke. <h5>Step-5</h5> As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the charcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will become. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is cooked, just like the way we do for Dal Tadka. <h5>Step-6</h5> Peel the skin from the roasted and smoked eggplant. Chop the cooked eggplant finely or you can even mash it.<h5>Step-7</h5> In a kadai or pan, heat oil. Then add finely chopped onions and garlic. Saute the onions till translucent. Don't brown them.<h5>Step-8</h5> Add chopped green chilies and saute for a minute.Add the chopped tomatoes and mix it well. Bhuno (saute) the tomatoes till the oil starts separating from the mixture.<h5>Step-9</h5> Now add the red chili powder. Stir and mix well. Add the chopped cooked baingan. Stir and mix the chopped baingan very well with the onion­tomato masala mixture.<h5>Step-10</h5> Season with salt. Stir and saute for some more 4 to 5 minutes more. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with phulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
        Area: " India",
        Category: ["Vegeterian","Lunch","Dinner"]
    },
    {
        name: "Matar Paneer" ,
        image: "https://shwetainthekitchen.com/wp-content/uploads/2012/11/IMG_7026-scaled.jpg" ,
        ingredients:["1 tbls Sunflower Oil","225g Paneer","2 Ginger","1 tsp Cumin","1 tsp Turmeric","1 tsp Coriander","1 Green Chilli","4 large Tomato","150g Peas","1 tsp Garam Masala","Small bunch Coriander","to serve Naan Bread"] ,
        instructions: "<h5>Step-1</h5>Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. <h5>Step-2</h5>Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away.<h5>Step-3</h5> Remove the paneer from the pan and drain on kitchen paper. <h5>Step-4</h5>Put the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min.<h5>Step-5</h5> Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. <h5>Step-6</h5>Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala.<h5>Step-7</h5> Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice.",
        Area: "India",
        Category: ["Vegeterian","Curry","Paneer","Lunch","Dinner"]
    },
    {
        name: "Dal Fry" ,
        image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg" ,
        ingredients:["1 cup Toor dal","2-1/2 cups Water","1 tsp Salt","1/4 tsp Turmeric","3 tbs Ghee","1 cup Chopped tomatoes","1/2 tsp Cumin seeds","1/2 tsp Mustard Seeds","2 Bay Leaf","1 tbs chopped Green Chili","2 tsp shredded Ginger","2 tbs Cilantro","1/2 tsp Red Pepper","1/2 tsp Salt","1 tsp Sugar","1/4 tsp Garam Masala"] ,
        instructions: "<h5>Step-1</h5>Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. <h5>Step-2</h5>Drain the water. Cook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup. <h5>Step-3</h5>In a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. <h5>Step-4</h5>Stir for a few seconds. Add tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy. <h5>Step-5</h5>Add cilantro and garam masala cook for about one minute. Pour the seasoning over dal mix it well and cook for another minute. Serve with Naan.",
        Area: "India",
        Category: ["Curry","Vegeterian","Pulses","Lunch","Dinner"]
    },
    {
        name: "Rajma/Kidney Beans Curry" ,
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg" ,
        ingredients:["1 tbls Vegetable Oil","1 finely chopped Onion","2 cloves chopped Garlic","1 part Ginger","1 Packet Coriander","1 tsp Cumin","1 tsp Paprika","2 tsp Garam Masala","400g Chopped Tomatoes","400g Kidney Beans","to serve Basmati Rice"] ,
        instructions: "<h5>Step-1</h5>Heat the oil in a large frying pan over a low-medium heat.Add the onion and a pinch of salt and cook slowly, stirring occasionally, until softened and just starting to colour.Add the garlic, ginger and coriander stalks and cook for a further 2 mins, until fragrant.<h5>Step-2</h5>Add the spices to the pan and cook for another 1 min, by which point everything should smell aromatic.<h5>Step-3</h5>Tip in the chopped tomatoes and kidney beans in their water, then bring to the boil.<h5>Step-4</h5>Turn down the heat and simmer for 15 mins until the curry is nice and thick.<h5>Step-5</h5>Season to taste, then serve with the basmati rice and the coriander leaves.",
        Area: "India",
        Category: ["Curry","Pulses","Vegeterian","Lunch","Dinner"]
    },
    {
        name: "Strawberries Romanoff" ,
        image: "https://www.gittaskitchen.com/wp-content/uploads/2020/06/Final-single-glass-side-view.jpg" ,
        ingredients:["2 pint Strawberries","4 tbs Sugar","4 tbs Grand Marnier","1 cup Cream","1/4 cup Sour Cream"] ,
        instructions: "<h5>Step-1</h5>In a medium bowl, combine hulled and quartered strawberries, 4 Tbsp sugar and 4 Tbsp liqueur, stir to combine then cover and refrigerate at least 1 hour and up to 2 hours, stirring once or twice.<h5>Step-2</h5>Two photos of cut strawberries in a bowl with one having sugar being added to the bowl Two photos of cut up strawberries for Strawberry Romanoff Just before serving, in a large mixing bowl, combine 1 cup cold heavy cream and 1/4 cup powdered sugar, and beat with an electric mixer until stiff peaks form.<h5>Step-3</h5>Using a spatula, fold in 1/4 cup sour cream just until well blended.<h5>Step-4</h5>To serve, stir strawberries then divide between 6 serving glasses or bowls.You can spoon a little syrup over the berries if you like.<h5>Step-5</h5>You can also use this syrup to soak a cake.<h5>Step-6</h5>Spoon cream over strawberries, dividing evenly.You can also use an ice cream scoop with trigger release for a nice rounded puff of cream.<h5>Step-7</h5>Serve right away or chill and enjoy within 2 hours of assembly.",
        Area: "Sweets",
        Category: ["Sweet Dish","Fruits","Ice Cream"]
    },
    {
        name: "Chole Chawal",
        image: "https://img.freepik.com/premium-photo/indian-food-chole-chawal-spicy-chickpea-curry-with-plain-rice-served-with-green-salad_466689-372.jpg" ,
        ingredients:["1 cup kabuli chana (white chick peas) , soaked overnight and drained","1 tea bags or 1 tsp of tea powder (chai ki patti) tied in muslin cloth","2 tbsp oil","1/2 tsp cumin seeds (jeera)","1/2 cup finely chopped onions","1/2 tsp finely chopped ginger (adrak)","2 tsp finely chopped garlic (lehsun)","2 tsp chole masala","1 tsp chilli powder","1 tsp dried mango powder (amchur)","1/4 tsp turmeric powder (haldi)","2 tsp coriander (dhania) powder","1 tsp cumin seeds (jeera) powder","salt to taste","rice with Chole"] ,
        instructions: "<h5>Step-1</h5>Combine the kabuli chana, salt, tea leaf tied in muslin cloth and enough water in a pressure cooker and pressure cook for 3 whistles.Allow the steam to escape before opening the lid. Remove the tea powder tied in muslin cloth and drain the kabuli chana. Keep aside.<h5>Step-2</h5>Heat the oil in a deep non-stick pan and add the cumin seeds. Sauté on a medium flame for 30 seconds.<h5>Step-3</h5>Add the onions, ginger and garlic and sauté on a medium flame for 1 to 2 minute or till the onions turn translucent.<h5>Step-4</h5>Add the chole masala, chilli powder, dried mango powder, turmeric powder, coriander powder, cumin seeds powder, salt and 1 cup of water, mix well and cook on a medium flame for 1 to 2 minutes, while stirring occasionally.<h5>Step-5</h5>Add the kabuli chana, mix well and cook on a medium flame for 5 to 7 minutes, while stirring occasionally. Mash the kabuli chana once lightly with a help of a masher. Switch off the flame, keep aside.",
        Area: "India",
        Category: ["Vegeterian","Pulses","Lunch","Dinner"]
    },
    {
        name: "Eggless Apple Honey Pancake" ,
        image: "https://bestservedvegan.com/wp-content/uploads/2021/08/Vegan-Apple-Pancakes-21-681x1024.jpg" ,
        ingredients:["1/2 cup grated apples","1/2 tbsp honey","1/4 cup self rising flour","1 tbsp melted butter","2 tbsp condensed milk","1/2 tbsp castor sugar","1/2 tsp fruit salt","melted butter for greasing and cooking"] ,
        instructions: "<h5>Step-1</h5>To make eggless apple honey pancake, combine the apple, honey, self rising flour, melted butter, condensed milk, castor sugar and 2½ tbsp of water in a deep bowl and mix well to make a smooth batter making sure that no lumps remain.<h5>Step-2</h5>Add the fruit salt and sprinkle 1 tbsp of water over it. When the bubbles form, mix gently.<h5>Step-3</h5>Grease a non-stick mini uttapa pan using a little butter.<h5>Step-4</h5>Pour approximately 1½ tbsp of batter in each uttapa mould and spread it lightly.<h5>Step-5</h5>Cook, using a little butter, till they turn crisp and golden brown from both the sides.<h5>Step-6</h5>Repeat steps 3 to 5 to make more mini pancakes.<h5>Step-7</h5>Serve the eggless apple honey pancake immediately drizzled with honey.",
        Area: "French",
        Category: ["Dessert","Sweet Dish","Lunch"]
    },
    {
        name: "Paneer Grilled Sandwich" ,
        image: "https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800" ,
        ingredients:["8 bread slices","1 cup grated cabbage","3/4 cup crumbled paneer (cottage cheese)","2 tbsp chopped coriander (dhania)","2 tsp finely chopped green chillies","salt to taste","butter for spreading and brushing"] ,
        instructions: "<h5>Step-1</h5>To make cabbage and paneer grilled sandwich, combine the cabbage, paneer, coriander, green chillies and salt in a deep bowl and mix well.<h5>Step-2</h5>Divide the filling into 4 equal portions.<h5>Step-3</h5>Spread 2 bread slices on a clean, dry surface and butter them lightly.<h5>Step-4</h5>Place a portion of the prepared filling on each bread slice.<h5>Step-5</h5>Butter 2 more bread slices and place them on the filling with the buttered side facing downwards.<h5>Step-6</h5>Brush some more butter on top and grill in a greased griller for 5 to 7 minutes or till the sandwiches are brown and crisp.<h5>Step-7</h5>Repeat steps 3 to 6 to make 2 more cabbage and paneer grilled sandwiches.<h5>Step-8</h5>Serve the cabbage and paneer grilled sandwich immediately.",
        Area: "India",
        Category: ["Lunch","Sandwich"]
    },
];


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
