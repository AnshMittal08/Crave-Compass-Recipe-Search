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
    {
        "name": "Vada Pav",
        "image": "https://www.tarladalal.com/members/9306/big/big_vada_pav-2455.jpg?size=696X905",
        "ingredients": [
            "1 1/2 cups boiled, peeled and mashed potatoes",
            "1 tbsp oil",
            "1/2 tsp mustard seeds (rai / sarson)",
            "1/4 tsp asafoetida (hing)",
            "5 to 7 curry leaves (kadi patta)",
            "1/2 tbsp finely chopped ginger (adrak)",
            "1/2 tbsp finely chopped green chillies",
            "1/2 tbsp finely chopped garlic (lehsun)",
            "salt to taste",
            "a pinch of turmeric powder (haldi)",
            "2 tbsp finely chopped coriander (dhania)",
            "oil for deep-frying",
            "3/4 cup besan (bengal gram flour)",
            "salt to taste",
            "a pinch of turmeric powder (haldi)",
            "1/4 cup water",
            "4 laddi pavs",
            "khajur imli chutney",
            "green chutney",
            "sukhi lehsun ki chutney",
            "8 to 10 fried green chillies"
        ],
        "instructions": "<h5>Step-1</h5>Heat the oil in a deep non-stick kadhai and add the mustard seeds. <h5>Step-2</h5>When the seeds crackle, add the asafoetida and curry leaves and sauté on a medium flame for a few seconds. <h5>Step-3</h5>Add the ginger, green chillies and garlic and sauté on a medium flame for a few more seconds. <h5>Step-4</h5>Add the potatoes, salt and turmeric powder, mix well and cook for a minute, while stirring continuously. <h5>Step-5</h5>Add the coriander and mix well. Remove from the flame and keep aside to cool. <h5>Step-6</h5>Divide it into 4 equal portions and shape each portion into a round. <h5>Step-7</h5>Heat the oil in a deep non-stick kadhai, dip each vada in the prepared batter and deep-fry in hot oil till they turn golden brown in colour from all the sides. Drain on absorbent paper and keep aside. <h5>Step-8</h5>Slit a pav horizontally, apply a little khajur imli ki chutney, green chutney and sukhi lehsun ki chutney on the inner sides of the pav and stuff with a hot vada. <h5>Step-9</h5>Repeat with the remaining ingredients to make 3 more vada pavs. <h5>Step-10</h5>Serve immediately with fried green chillies. <h5>Step-11</h5>Deep-fry the green chillies in hot oil till they become crisp and slightly whitish in colour. Drain on absorbent paper and serve with vada pav.",
        "Area": "Indian",
        "Category": ["Snack", "Street Food", "Vegetarian"]
    },
    {
        name: "Chilli Garlic Sauce",
        image: "https://www.tarladalal.com/members/9306/big/big_chilli_garlic_sauce-14773.jpg?size=696X905",
        ingredients: [
            "10 whole dry kashmiri red chillies",
            "2 tbsp roughly chopped garlic (lehsun)",
            "5 tbsp vinegar",
            "1 tbsp sugar",
            "salt to taste",
            "2 tbsp sesame (til) oil"
        ],
        instructions: "<h5>Step-1</h5>To make chilli garlic sauce, remove the stems of the kashmiri red chillies and put them in enough hot water, cover with a lid and keep aside for 30 minutes. Drain. <h5>Step-2</h5>Combine the soaked kashmiri red chillies, garlic, sugar, vinegar and salt and blend in a mixer till smooth. <h5>Step-3</h5>Transfer the mixture into a deep bowl, add the sesame oil and mix well. <h5>Step-4</h5>Store the chilli garlic sauce in an air-tight container in the refrigerator and use as required.",
        Area: "Indian",
        Category: ["Sauce", "Condiment", "Spicy"]
    },
    {
        name: "Vegetable Manchow Soup",
        image: "https://www.tarladalal.com/members/9306/big/big_manchow_soup-16882.jpg?size=696X905",
        ingredients: [
            "2 tbsp finely chopped spring onions whites",
            "1/4 cup finely chopped cabbage",
            "1/4 cup finely chopped carrot",
            "1/4 cup finely chopped capsicum",
            "2 tbsp cornflour",
            "1 tbsp oil",
            "1 1/2 tbsp finely chopped garlic (lehsun)",
            "1 tbsp finely chopped ginger (adrak)",
            "1/2 tsp finely chopped green chillies",
            "3 cups vegetable stock",
            "4 tsp soy sauce",
            "1 tsp green chilli sauce",
            "1/4 tsp vinegar",
            "1/4 tsp freshly ground black pepper (kalimirch)",
            "salt to taste",
            "4 tsp finely chopped spring onion greens",
            "1 cup fried noodles"
        ],
        instructions: "<h5>Step-1</h5>To make vegetable manchow soup, combine the cornflour and ½ cup of water in a small bowl, mix well and keep aside. <h5>Step-2</h5>Heat the oil in a deep non-stick pan, add the garlic, ginger and spring onions and sauté on a high flame for 30 seconds. <h5>Step-3</h5>Add the cabbage, carrot, capsicum and green chillies and sauté on a medium flame for 2 minutes. <h5>Step-4</h5>Add the vegetable stock, mix well and cook on a medium flame for 3 minutes, while stirring occasionally. <h5>Step-5</h5>Add the soy sauce, green chilli sauce, vinegar, pepper and salt, mix well and cook on a medium flame for 1 minute. <h5>Step-6</h5>Add the cornflour-water mixture, mix well and cook on a medium flame for 4 minutes, while stirring occasionally. <h5>Step-7</h5>Serve vegetable manchow soup hot topped with spring onions and fried noodles.",
        Area: "Indian",
        Category: ["Soup", "Street Food", "Vegetarian"]
    },
    {
        name: "Chilli Paneer",
        image: "https://www.tarladalal.com/members/9306/big/big_chilli_paneer-15962.jpg?size=696X905",
        ingredients: [
            "1 1/2 cups paneer (cottage cheese) cubes",
            "3 tbsp cornflour",
            "oil for deep-frying",
            "1/4 cup cornflour",
            "1/4 cup plain flour (maida)",
            "1 tsp soy sauce",
            "1 tsp chilli powder",
            "1/4 tsp freshly ground black pepper (kalimirch) powder",
            "salt to taste",
            "1/2 cup water",
            "1 1/2 tbsp oil",
            "1 tsp grated ginger (adrak)",
            "2 tsp finely chopped garlic (lehsun)",
            "2 tsp finely chopped green chillies",
            "1/4 cup chopped spring onions whites and greens",
            "1/4 cup onion cubes",
            "1/4 cup capsicum cubes",
            "2 tsp red chilli paste",
            "1/2 tsp soy sauce",
            "1/2 tsp vinegar",
            "salt to taste",
            "1 tsp red chilli sauce",
            "2 tsp cornflour",
            "5 tsp water",
            "1/4 cup finely chopped spring onion greens"
        ],
        instructions: "<h5>Step-1</h5>Combine the paneer cubes and cornflour in a deep bowl or plate and toss them well. <h5>Step-2</h5>Add the above cornflour coated paneer cubes into the prepared batter and toss gently. <h5>Step-3</h5>Heat the oil in a deep non-stick pan and deep-fry a few pieces at a time till they turn golden brown in colour from all the sides. Drain on absorbent paper and keep aside. <h5>Step-4</h5>To make chilli paneer, heat the oil in a deep non-stick kadhai or pan, add the garlic, ginger and green chillies and sauté on a medium flame for a few seconds. <h5>Step-5</h5>Add the spring onions, onion cubes, capsicum and sauté on a medium flame for a few seconds. <h5>Step-6</h5>Add the red chilli paste, soy sauce, vinegar and red chilli sauce and cook on a medium flame for a few seconds. <h5>Step-7</h5>Add the deep-fried paneer cubes and sauté on a high flame for a few seconds. <h5>Step-8</h5>Add the cornflour-water mixture, mix gently and cook on a high flame for a few seconds. <h5>Step-9</h5>Garnish the chilli paneer with spring onion greens and serve immediately.",
        Area: "Indian",
        Category: ["Appetizer", "Indo-Chinese", "Vegetarian"]
    },
    {
        name: "Hakka Noodles",
        image: "https://www.tarladalal.com/members/9306/big/big_hakka_noodles,__chinese_hakka_noodle_recipe-15671.jpg?size=696X905",
        ingredients: [
            "1/4 cup oil",
            "5 whole dry kashmiri red chillies, broken into pieces",
            "2 cups boiled noodles",
            "2 tbsp oil",
            "1/4 cup finely chopped spring onions whites",
            "2 tsp finely chopped garlic (lehsun)",
            "2 to 3 whole dry kashmiri red chillies, broken into pieces",
            "1/2 cup carrot juliennes",
            "1/4 cup shredded cabbage",
            "1/2 cup thinly sliced capsicum",
            "1 tsp soy sauce",
            "salt to taste",
            "a pinch of black peppercorns (kalimirch) powder",
            "2 tbsp finely chopped spring onion greens"
        ],
        instructions: "<h5>Step-1</h5>Heat the oil in a deep pan on a high flame till it smokes. <h5>Step-2</h5>Add the red chillies, cover with a lid and switch off the flame. <h5>Step-3</h5>Allow it to cool for some time and strain it using a strainer. Keep aside. <h5>Step-4</h5>Heat the oil in a wok, add the spring onion whites, garlic and red chillies and sauté on a high flame for 30 seconds. <h5>Step-5</h5>Add the carrots, cabbage, capsicum and sauté on a high flame for 1 to 2 minutes. <h5>Step-6</h5>Add the noodles, soya sauce and salt, mix well and toss on a high flame for 1 to 2 minutes. <h5>Step-7</h5>Add the black pepper powder and 2 tsp prepared chilli oil and toss well. <h5>Step-8</h5>Sprinkle spring onion greens and toss well. <h5>Step-9</h5>Serve the hakka noodles immediately.",
        Area: "Indo-Chinese",
        Category: ["Main Course", "Street Food", "Vegetarian"]
    },
    {
        name: "Cola Chocolate Ice Cream Float",
        image: "https://www.tarladalal.com/members/9306/big/big_cola_chocolate_ice_cream_float-12229.jpg?size=696X905",
        ingredients: [
            "2 cups chilled coca-cola",
            "1/2 cup chocolate ice-cream",
            "2 scoops amul chocolate ice-cream"
        ],
        instructions: "<h5>Step-1</h5>Combine the coca-cola and chocolate ice-cream in a mixer and blend till smooth. <h5>Step-2</h5>Pour into 2 individual glasses and serve immediately topped with a scoop of chocolate ice cream in each glass.",
        Area: "International",
        Category: ["Drinks", "Dessert", "Quick & Easy", "Cold Beverage"]
    },
    {
        name: "Chocolate Ice-Cream",
        image: "https://www.tarladalal.com/members/9306/big/big_chocolate_ice-_cream_(_frozen_desserts_recipe)-9808.jpg?size=696X905",
        ingredients: [
            "1 cup grated dark chocolate",
            "2 1/2 cups milk",
            "1/2 cup sugar",
            "1 tbsp cornflour",
            "1/2 cup fresh cream",
            "a few drops of vanilla essence"
        ],
        instructions: "<h5>Step-1</h5>Mix cornflour and water, set aside. <h5>Step-2</h5>Cook chocolate with milk on slow flame for 2 minutes, stirring continuously. <h5>Step-3</h5>In another pan, combine remaining milk and sugar, cook for 5 minutes. <h5>Step-4</h5>Add cornflour mixture and cook for 3 minutes. <h5>Step-5</h5>Mix chocolate mixture, cool, add cream and vanilla. <h5>Step-6</h5>Freeze for 6 hours. Blend and freeze for 10 more hours. Serve.",
        Area: "International",
        Category: ["Dessert", "Frozen Dessert", "Sweet", "Ice-Cream"]
    },
    {
        name: "Cold Cocoa Milkshake",
        image: "https://www.tarladalal.com/members/9306/big/big_cold_cocoa_milkshake-15331.jpg?size=696X905",
        ingredients: [
            "2 1/2 tbsp cocoa powder",
            "2 cups chilled full-fat milk",
            "1/4 cup sugar",
            "10 ice-cubes",
            "2 tbsp grated chocolate"
        ],
        instructions: "<h5>Step-1</h5>Combine all ingredients, blend till smooth and frothy. <h5>Step-2</h5>Pour into glasses, serve garnished with chocolate.",
        Area: "International",
        Category: ["Drinks", "Beverage", "Milkshake", "Cold Beverage"]
    },
    {
        name: "Bournvita Milk",
        image: "https://www.tarladalal.com/members/9306/big/big_bournvita_milk_recipe-16322.jpg?size=696X905",
        ingredients: [
            "2 1/2 tbsp bournvita",
            "2 cups hot milk",
            "1 1/2 tbsp sugar"
        ],
        instructions: "<h5>Step-1</h5>Mix bournvita, milk, and sugar in a bowl till sugar dissolves. <h5>Step-2</h5>Pour into glasses and serve immediately.",
        Area: "Indian",
        Category: ["Drinks", "Hot Beverage", "Kids Special", "Breakfast"]
    },
    {
        name: "Eggless Chocolate Cookies",
        image: "https://www.tarladalal.com/members/9306/big/big_chocolate_cookies,_homemade_chocolate_cookies-17411.jpg?size=696X905",
        ingredients: [
            "1/2 cup soft butter",
            "1/2 cup coarsely powdered brown sugar",
            "1 tsp vanilla extract",
            "1 cup plain flour (maida)",
            "1/4 cup cocoa powder",
            "1/4 tsp baking soda",
            "a pinch of salt",
            "1/2 cup chocolate chips",
            "2 tbsp milk",
            "chocolate chips for topping",
            "sea salt (khada namak) for sprinkling"
        ],
        instructions: "<h5>Step-1</h5>Cream butter, sugar, and vanilla. <h5>Step-2</h5>Add flour, cocoa, baking soda, salt, chocolate chips, and milk. Form dough. <h5>Step-3</h5>Roll into circles, top with chocolate chips. <h5>Step-4</h5>Bake at 180°C for 12-14 minutes. <h5>Step-5</h5>Cool and serve.",
        Area: "Indian",
        Category: ["Dessert", "Snack", "Baked", "Eggless"]
    },
    {
        name: "Nutritious Patties in Whole Wheat Pita Pockets",
        image: "https://www.tarladalal.com/members/9306/big/big_nutritious_patties_in_whole_wheat_pita_pockets-17424.jpg?size=696X905",
        ingredients: [
        "6 whole whole wheat pita breads",
        "1/4 cup broken wheat (dalia)",
        "1 cup grated carrot",
        "1/2 cup finely chopped onions",
        "1/3 cup finely chopped mushrooms (khumbh)",
        "1/2 cup grated paneer (cottage cheese)",
        "1 tbsp soy sauce",
        "2 tsp finely chopped green chillies",
        "4 tbsp whole wheat flour (gehun ka atta)",
        "2 tbsp finely chopped coriander (dhania)",
        "salt to taste",
        "2 tbsp olive oilor oil for cooking",
        "1/2 cup whisked curds (dahi)",
        "2 tbsp finely chopped spring onion greens",
        "1 tsp finely chopped garlic (lehsun)",
        "1/2 tsp cumin seeds (jeera) powder",
        "1/2 tsp finely chopped green chillies",
        "salt to taste",
        "1 1/4 cups sliced tomatoes",
        "2 1/4 cups shredded lettuce"
        ],
        instructions: "<h5>Step-1</h5>To make broken wheat and paneer patties, clean and wash the broken wheat thoroughly. <h5>Step-2</h5>In a deep pan add water and bring it to a boil. <h5>Step-3</h5>Add the bulgur wheat and cook for 7 to 10 minutes. Drain and keep aside. <h5>Step-4</h5>In a deep bowl, combine cooked dalia, carrots, onion, chopped mushrooms, grated paneer, soy sauce, green chillies, whole wheat flour, chopped coriander and salt. <h5>Step-5</h5>Mix well with hand. If the pattice is not binding well then add 1 tbsp whole wheat flour and mix again. <h5>Step-6</h5>Divide the mixture into 12 equal parts and shape into patties. <h5>Step-7</h5>Heat 1 tbsp oil on a non- stick tava (griddle). <h5>Step-8</h5>Place 4 patties on the tava and let them cook on a medium flame for 2 minutes till golden brown on one side. Flip the side and cook for 2 more minutes until light golden brown from both the sides. <h5>Step-9</h5>Repeat steps 7 and 8 to cook 8 more patties. <h5>Step-10</h5>To make the curd dressing for nutritious patties in whole wheat pita pockets recipe, in a bowl add beaten fresh curds, chopped spring onion greens, chopped garlic, cumin seeds powder, chopped green chillies and salt. Mix well and keep aside. <h5>Step-11</h5>Place the whole whole wheat pita breads on a clean, dry surface and cut them it into halves. <h5>Step-12</h5>Fill each pita bread halve with 2 to 3 sliced tomatoes, and some shredded lettuce. <h5>Step-13</h5>Place one patty over it and 1 tbsp of the dressing on top. <h5>Step-14</h5>Serve nutritious patties in whole wheat pita pockets immediately.",
        Area: "Indian",
        Category: ["Appetizer", "Vegetarian", "Healthy"]
        },
        {
        name: "Tzatziki Dip",
        image: "https://www.tarladalal.com/members/9306/big/big_tzatziki_dip,_lebanese_hung_curd_and_cucumber_dip-12621.jpg?size=696X905",
        ingredients: [
        "1 cup hung curds (chakka dahi)",
        "1 1/4 cups grated dark green cucumber",
        "2 1/2 tbsp finely chopped dill leaves",
        "1 1/2 tsp grated garlic (lehsun)",
        "2 tsp extra virgin olive oil",
        "salt to taste",
        "pita bread"
        ],
        instructions: "<h5>Step-1</h5>To make tzatziki dip, combine the cucumber and little salt in a deep bowl, mix well and keep aside for 10 to 15 minutes. <h5>Step-2</h5>Squeeze out the excess water and place in another deep bowl. <h5>Step-3</h5>Add all the remaining ingredients and mix well using a wooden spoon. <h5>Step-4</h5>Serve the tzatziki dip chilled with pita bread.",
        Area: "Lebanese",
        Category: ["Dip", "Appetizer", "Vegetarian"]
        },
        {
        name: "Falafel",
        image: "https://www.tarladalal.com/members/9306/big/big_falafel,_lebanese_falafel_stuffed_in_pita_bread-14440.jpg?size=696X905",
        ingredients: [
        "1/2 cup kabuli chana (white chick peas) , soaked overnight and drained",
        "1 tbsp chopped garlic (lehsun)",
        "1/4 cup chopped onions",
        "2 tbsp chopped parsley",
        "1 tbsp chopped coriander (dhania)",
        "1 tbsp chopped mint leaves (phudina)",
        "1/2 tsp cumin seeds (jeera) powder",
        "salt to taste",
        "1/4 tsp baking powder",
        "1 tsp green chilli paste",
        "oil for deep-frying",
        "1 cup whisked curds (dahi)",
        "1/4 cup chopped spring onions",
        "1/2 tsp chopped garlic (lehsun)",
        "a pinch of sugar",
        "salt to taste",
        "9 pita bread",
        "butter for brushing",
        "4 1/2 tsp garlic chutney",
        "1/2 recipe tahini dip",
        "9 tomato slices , cut into halves",
        "9 tbsp shredded lettuce"
        ],
        instructions: "<h5>Step-1</h5>Combine the kabuli chana, garlic, onions, parsley, coriander, mint leaves, cumin seeds powder and salt and blend in a mixer to a coarse mixture using approx. ¼ cup of water. <h5>Step-2</h5>Transfer the mixture into a bowl, add the baking powder and green chilli paste and mix well. <h5>Step-3</h5>Divide the mixture into 18 equal portions. <h5>Step-4</h5>Shape a portion into a round ball and put in hot oil in a deep non-stick kadhai. Shape 5 more portions, into a ball and put it in the oil and deep-fry all 6 at a time in a batch till they turn golden brown in colour from all the sides. <h5>Step-5</h5>Repeat step 4 to make 12 more balls in 2 more batches. Drain on an absorbent paper and keep aside. <h5>Step-6</h5>Cut a pita bread into two vertically and slit each halve to form a pocket. <h5>Step-7</h5>Brush each halve with little butter on both the sides. <h5>Step-8</h5>Heat a non-stick tava (griddle), and cook it on a medium flame till light brown spots appear on both the sides. <h5>Step-9</h5>Repeat steps 1 to 3 with the remaining pita breads. <h5>Step-10</h5>Take a pita bread halve, spread ½ tsp of garlic chutney evenly in it, add 1 tsp of tahini dip and place 2 bullets. <h5>Step-11</h5>Top it with 1½ tbsp of the prepared curd dressing, place 2 tomato halves and 1 tbsp of the shredded lettuce. <h5>Step-12</h5>Repeat steps 5 and 6 to make 8 more falafels. <h5>Step-13</h5>Serve the lebanese falafel stuffed in pita bread immediately.",
        Area: "Lebanese",
        Category: ["Appetizer", "Vegetarian"]
        },
        {
        name: "Herbed Pita Strips",
        image: "https://www.tarladalal.com/members/9306/big/big_herbed_pita_strips-11345.jpg?size=696X905",
        ingredients: [
        "1 readymade (10) pita bread or pizza base",
        "1/4 cup melted butter",
        "1 tsp dry red chilli flakes (paprika)",
        "1 tsp dried mixed herbs",
        "1 1/2 tsp finely chopped garlic (lehsun)",
        "a pinch of salt"
        ],
        instructions: "<h5>Step-1</h5>Place the pita base on a clean, dry surface, put the prepared topping on it and spread it evenly using a spoon. <h5>Step-2</h5>Cut the pita bread into 2 halves and cut 6 long strips from each halve. You will get 12 strips in all. <h5>Step-3</h5>Place the strips on a greased baking tray and bake in a pre-heated oven at 200°c (400°f) for 8 to 10 minutes or till the base is evenly browned and crisp. <h5>Step-4</h5>Serve immediately with a dip of your choice.",
        Area: "Middle Eastern",
        Category: ["Appetizer", "Snack"]
        },
        {
        name: "Hummus",
        image: "https://www.tarladalal.com/members/9306/big/big_hummus,_lebanese_dip-15015.jpg?size=696X905",
        ingredients: [
        "3/4 cup soaked and boiled kabuli chana (white chick peas)",
        "3 tbsp olive oil",
        "salt to taste",
        "4 garlic (lehsun) cloves",
        "1 tbsp lemon juice",
        "3 tbsp fresh curd (dahi)",
        "1 tbsp olive oil",
        "a little chilli powder",
        "1 tsp finely chopped parsley",
        "lavash"
        ],
        instructions: "<h5>Step-1</h5>To make hummus, combine the kabuli chana, olive oil, salt, garlic, lemon juice and curds in a mixer and blend to a smooth mixture. Add a little water only if required. <h5>Step-2</h5>Spoon the mixture into a serving plate and pour olive oil and sprinkle chilli powder and parsley over it. <h5>Step-3</h5>Refrigerate the hummus till use and serve with lavash.",
        Area: "Lebanese",
        Category: ["Dip", "Appetizer", "Vegetarian"]
        },
        {
        name: "Pita Bread",
        image: "https://www.tarladalal.com/members/9306/big/big_pita_bread,_lebanese_whole_wheat_pita_bread-17425.jpg?size=696X905",
        ingredients: [
        "3/4 cup whole wheat flour (gehun ka atta)",
        "1/2 tsp dry yeast",
        "1/2 tsp sugar",
        "2 tsp olive oil",
        "salt to taste",
        "whole wheat flour (gehun ka atta) for rolling"
        ],
        instructions: "<h5>Step-1</h5>To make  pita bread, combine the dry yeast, sugar and 2 tbsp of water in a bowl and mix well. Cover with a lid and keep aside for 5 minutes or till the dry yeast completely dissolves in the water. <h5>Step-2</h5>Combine all the ingredients along with the yeast-water mixture in a deep bowl, mix well and knead into a soft dough using enough water. <h5>Step-3</h5>Cover the dough with a wet muslin cloth and allow it to prove for 30 minutes or till the dough doubles in volume. <h5>Step-4</h5>Knead the dough to remove the excess air. <h5>Step-5</h5>Divide the dough into 3 equal portions and roll out each portion into an oblong of 175 mm. (7) length and 6 mm. (¼) thickness using a little whole wheat flour for rolling. <h5>Step-6</h5>Heat a non-stick tava (griddle) and cook the pita bread on a medium flame for 1 minute on both the sides or till small blisters are seen. <h5>Step-7</h5>Then, cook it on an open flame till it puffs up and brown spots appear on both the sides. <h5>Step-8</h5>Cut each pita bread into 2 halves horizontally and use as required.",
        Area: "Middle Eastern",
        Category: ["Bread", "Vegetarian"]
        },
        {
            name: "Whole Wheat Carrot and Raisin Muffins",
            image: "https://www.tarladalal.com/members/9306/big/big_whole_wheat_carrot_and_raisin_muffins_(_finger_foods_for_kids_)-11059.jpg?size=696X905",
            ingredients: [
            "1/4 cup whole wheat flour (gehun ka atta)",
            "2 tbsp thickly grated carrot",
            "1/4 cup raisins (kismis)",
            "1/2 cup plain flour (maida)",
            "2 tbsp wheat bran",
            "1 tsp baking powder",
            "4 tsp melted butter",
            "3/4 cup milk",
            "5 tbsp brown sugar",
            "1 tsp vanilla essence",
            "1/2 tsp fruit salt",
            "2 tbsp brown sugar",
            "9 raisins (kismis)"
            ],
            instructions: "<h5>Step-1</h5>Combine the wheat flour, plain flour, wheat bran, raisin, carrots and baking powder in a deep bowl, mix well and keep aside. <h5>Step-2</h5>Combine the butter, milk, brown sugar and vanilla essence in another deep bowl and mix well. <h5>Step-3</h5>Add the flour mixture and mix well using a wooden spoon or spatula. <h5>Step-4</h5>Add the fruit salt and mix gently. <h5>Step-5</h5>Place 9 paper cups in 9 muffin moulds of a muffin tray. <h5>Step-6</h5>Drop 1½ spoonfuls of the batter into each muffin moulds. <h5>Step-7</h5>Sprinkle a little of brown sugar on top and place a raisin in the center of each muffin. <h5>Step-8</h5>Bake in a pre-heated oven at 200°c (400°f) for 10 to 15 minutes or until a toothpick inserted in a muffin comes out clean. <h5>Step-9</h5>Cool slightly and serve.",
            Area: "International",
            Category: ["Baked", "Kids", "Snack"]
            },
            {
            name: "Eggless Orange Muffins",
            image: "https://www.tarladalal.com/members/9306/big/big_eggless_orange_muffins_recipe-16474.jpg?size=696X905",
            ingredients: [
            "1/2 cup melted butter",
            "1/2 cup condensed milk",
            "1 tbsp orange crush",
            "1 cup plain flour (maida)",
            "1 tsp baking powder",
            "1 tsp orange rind",
            "1/2 tsp baking soda",
            "1/4 cup orange juice",
            "1/4 cup icing sugar",
            "2 tsp orange juice",
            "2 tsp orange rind"
            ],
            instructions: "<h5>Step-1</h5>To make eggless orange muffins, in a deep bowl add melted butter and condensed milk. Mix well. <h5>Step-2</h5>Add orange crush, plain flour, baking powder, orange rind, baking soda and orange juice. <h5>Step-3</h5>Whisk well to form a lump free batter. Pour 9 equal quantities of batter into lined muffin tray. <h5>Step-4</h5>Bake the muffins in pre heated oven at 180°c (360°f) for 15 minutes or until done. <h5>Step-5</h5>Remove and cool them slightly. Meanwhile in another small bowl, combine icing sugar and orange juice to make glaze. <h5>Step-6</h5>Dip each muffin in the glaze and drip off the remaining glaze. <h5>Step-7</h5>Garnish with orange rind and serve eggless orange muffins.",
            Area: "International",
            Category: ["Baked", "Eggless", "Snack"]
            },
            {
            name: "Mayo Veg Curd Sandwich",
            image: "https://www.tarladalal.com/members/9306/big/big_mayo_veggie_curd_sandwich-12557.jpg?size=696X905",
            ingredients: [
            "6 bread slices , lightly buttered",
            "butter for brushing",
            "1/2 cup mayonnaise",
            "1/4 cup curd (dahi)",
            "3/4 cup shredded red cabbage",
            "1/2 cup capsicum slices",
            "1/2 cup sliced onions",
            "1/2 tsp garlic (lehsun) paste",
            "1 tbsp tomato ketchup",
            "1 tsp red chilli sauce",
            "1/2 tsp tabasco sauce",
            "salt and to taste"
            ],
            instructions: "<h5>Step-1</h5>To make mayo veg curd sandwich, divide the stuffing into 3 equal portions and keep aside. <h5>Step-2</h5>Place a bread slice on a clean, dry surface with the buttered side facing upwards. <h5>Step-3</h5>Spread a portion of the stuffing evenly on it and sandwich it using another bread slice with the buttered side facing downwards. <h5>Step-4</h5>Cut the mayo veg curd sandwich diagonally into 2 equal pieces. <h5>Step-5</h5>Repeat steps 2 to 4 to make 2 more mayo veg curd sandwiches. <h5>Step-6</h5>Serve the mayo veg curd sandwich immediately.",
            Area: "Indian",
            Category: ["Sandwich", "Snack", "Vegetarian"]
            },
            {
            name: "Russian Salad Sandwich",
            image: "https://www.tarladalal.com/members/9306/big/big_russian_salad_sandwich-15727.jpg?size=696X905",
            ingredients: [
            "3/4 cup chopped and boiled mixed vegetables (carrot  ,  green peas and french beans)",
            "1/2 cup mayonnaise",
            "2 tbsp fresh cream",
            "1/4 cup chopped canned pineapple",
            "1/4 cup boiled , peeled and chopped potatoes",
            "salt and to taste",
            "8 bread slices",
            "butter for spreading",
            "tomato ketchup",
            "potato wafers"
            ],
            instructions: "<h5>Step-1</h5>Combine all the ingredients in a deep bowl and mix well. <h5>Step-2</h5>Divide it into 4 equal portions and keep aside. <h5>Step-3</h5>Place 2 bread slices on a clean, dry surface and apply a little butter on each bread slice. <h5>Step-4</h5>Place 1 portion of the prepared russian salad in the centre of 1 buttered bread slice and spread it evenly. <h5>Step-5</h5>Sandwich it using another bread slice with the buttered side facing downwards. <h5>Step-6</h5>Cut the russian salad sandwich diagonally into 2 equal pieces. <h5>Step-7</h5>Repeat steps 1 to 4 to make 3 more sandwiches. <h5>Step-8</h5>Serve the russian salad sandwich immediately with tomato ketchup and potato wafers.",
            Area: "Fusion",
            Category: ["Sandwich", "Snack", "Vegetarian"]
            },
            {
            name: "Cheese Aloo Moong Toast",
            image: "https://cdn.tarladalal.com/members/9306/big/big_cheese_aloo_moong_toast-16127.jpg?size=696X905",
            ingredients: [
            "8 bread slices",
            "4 tsp butter for spreading",
            "4 tsp green chutney",
            "12 tomato slices",
            "8 sliced onions",
            "1 tsp butter for brushing",
            "2 tsp butter for cooking",
            "8 tbsp grated processed cheese",
            "1/2 cup boiled and mashed potatoes",
            "1/2 cup boiled moong (whole green gram)",
            "1/4 cup finely chopped onions",
            "1/4 cup finely chopped capsicum",
            "1 tsp chilli powder",
            "1/2 tsp chaat masala",
            "1 tsp lemon juice",
            "salt to taste",
            "tomato ketchup",
            "green chutney"
        ],
        instructions: "<h5>Step-1</h5>Combine all the ingredients in a deep bowl and mix very well. <h5>Step-2</h5>Divide the mixture into 4 portions and keep aside. <h5>Step-3</h5>Place 2 bread slices on a clean, dry surface. Apply ½ tsp of butter and ½ tsp of green chutney on each bread slice. <h5>Step-4</h5>Spread a portion of the mixture on one buttered-chutney bread slice and arrange 3 tomato slices and 2 onion slices evenly over it. <h5>Step-5</h5>Cover it with another slice of bread, with the buttered-chutney side facing downwards and press it lightly. Spread ¼ tsp of butter evenly over it. <h5>Step-6</h5>Grease a sandwich toaster on both the sides using ½ tsp of butter, place the sandwich in the sandwich toaster and cook on a medium flame, till it turns brown and crisp from both the sides. <h5>Step-7</h5>Sprinkle 2 tbsp of cheese evenly over it. <h5>Step-8</h5>Cut into 6 equal pieces using a sharp knife. <h5>Step-9</h5>Repeat steps 1 to 6 to make 3 more toasts. <h5>Step-10</h5>Serve the cheese aloo moong toast immediately with tomato ketchup and green chutney.",
        Area: "Indian",
        Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Grilled Corn Capsicum Sandwich",
            image: "https://www.tarladalal.com/members/9306/big/big_grilled_corn_and_capsicum_sandwich-14165.jpg?size=696X905",
            ingredients: [
                "1 1/2 cups boiled sweet corn kernels (makai ke dane)",
                "1/2 cup finely chopped capsicum",
                "8 bread slices",
                "1 tbsp butter",
                "1/4 cup finely chopped onions",
                "1 tsp finely chopped garlic (lehsun)",
                "2 tsp finely chopped green chillies",
                "salt to taste",
                "12 tsp butter for spreading and brushing",
                "tomato ketchup"
            ],
            instructions: "<h5>Step-1</h5>To make grilled corn and capsicum sandwich, heat the butter in a broad non-stick pan, add the onions, garlic and green chillies and sauté on a medium flame for a few seconds. <h5>Step-2</h5>Add the capsicum, sweet corn, salt and black pepper powder, mix well and cook on a medium flame for 1 to 2 minutes, while stirring occasionally. <h5>Step-3</h5>Keep aside to cool completely. <h5>Step-4</h5>Place 2 bread slices on a clean, dry surface and spread 1 tsp of butter on each bread slice. <h5>Step-5</h5>Spread 1/4th of the mixture evenly over it and sandwich it with another bread slice with the buttered side facing downwards. <h5>Step-6</h5>Brush 1 tsp of butter on top of the bread and grill in a greased pre-heated sandwich grill for 4 to 5 minutes or till the sandwich turns crispy and brown from both the sides. <h5>Step-7</h5>Cut the grilled corn and capsicum sandwich diagonally into 2 equal pieces. <h5>Step-8</h5>Repeat steps 4 to 7 to make 3 more grilled corn and capsicum sandwiches. <h5>Step-9</h5>Serve the grilled corn and capsicum sandwich immediately with tomato ketchup.",
            Area: "Indian",
            Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Focaccia Bread, Homemade Italian Soft Bread",
            image: "https://www.tarladalal.com/members/9306/big/big_focaccia_bread,_homemade_italian_soft_bread-13340.jpg?size=696X905",
            ingredients: [
                "2 cups plain flour (maida)",
                "14 tsp olive oil",
                "2 tsp instant dry yeast",
                "1 tsp sugar",
                "1/2 tsp dried rosemary",
                "2 tbsp sliced black olives",
                "1 tsp sea salt (khada namak)"
            ],
            instructions: "<h5>Step-1</h5>Combine the yeast, sugar and 2 tbsp of warm water in a small bowl, mix well and cover it with a lid and keep aside for 15 minutes. <h5>Step-2</h5>Combine the plain flour, 6 tsp of olive oil, yeast-sugar mixture and salt, mix well and knead it into soft dough using enough warm water. <h5>Step-3</h5>Transfer the dough on a clean dry surface, and knead it well till smooth and form a ball. <h5>Step-4</h5>Grease a deep bowl with 2 tsp of olive oil and place the dough in it and cover it with a cling wrap. <h5>Step-5</h5>Place the dough in a warm place for 45 minutes. <h5>Step-6</h5>Remove the cling wrap and knead it again in the bowl till smooth. <h5>Step-7</h5>Grease an aluminium tin of 200 mm. X 150 mm. (10” x 6”) with 2 tsp of olive oil and place the dough over it and spread it using your fingers and creating depressions with finger tips. <h5>Step-8</h5>Pour 2 tsp of olive oil over it, sprinkle rosemary, olives and sea salt evenly over it and press it lightly. <h5>Step-9</h5>Bake in a pre-heated oven at 200°c (400°f) for 15 minutes. <h5>Step-10</h5>Brush with 2 tsp of olive oil evenly over it. <h5>Step-11</h5>Cool slightly, demould it and cut into square pieces or as required and serve.",
            Area: "Italian",
            Category: ["Bread", "Appetizer", "Vegetarian"]
        },
        {
            name: "Chutney Sandwich, Green Chutney Sandwich Roadside Recipe",
            image: "https://www.tarladalal.com/members/9306/big/big_chutney_sandwich,_green_chutney_sandwich_roadside_recipe-15276.jpg?size=696X905",
            ingredients: [
                "20 bread slices",
                "10 tsp butter",
                "2 tsp chaat masala for sprinkling",
                "1/2 cup roughly chopped coriander (dhania)",
                "2 tbsp chopped spinach (palak)",
                "1 bread slice, torn into pieces",
                "3/4 tbsp roughly chopped green chillies",
                "1/2 tsp lemon juice",
                "salt to taste"
            ],
            instructions: "<h5>Step-1</h5>Combine all the ingredients along with 2½ tbsp water in a mixer and blend into a smooth paste. Keep aside. <h5>Step-2</h5>To make chutney sandwich, place 2 bread slices on a clean, dry surface, spread ½ tsp of butter on each bread slice and spread it evenly. <h5>Step-3</h5>Spread ½ tsp of green chutney on each bread slice and spread it evenly. Sprinkle a little chaat masala evenly over both the buttered-chutney bread slices, finally cover with a buttered-chutney side facing downwards and press it lightly. <h5>Step-4</h5>Repeat steps 1 and 2 to make 9 more sandwiches. <h5>Step-5</h5>Cut each chutney sandwich diagonally into 2 portions and serve.",
            Area: "Indian",
            Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Schezwan Paneer Cold Sandwich",
            image: "https://www.tarladalal.com/members/9306/big/big_schezwan_paneer_cold_sandwich-12561.jpg?size=696X905",
            ingredients: [
                "8 bread slices",
                "1/2 cup thick curds (dahi)",
                "1 tsp lemon juice",
                "salt to taste",
                "1/4 cup schezwan sauce",
                "3/4 cup chopped paneer (cottage cheese)",
                "1/2 cup chopped capsicum",
                "2 tbsp tomato ketchup",
                "salt to taste"
            ],
            instructions: "<h5>Step-1</h5>Combine the coloured capsicum, schezwan sauce, tomato ketchup and salt in a deep bowl and mix well. <h5>Step-2</h5>Add the paneer and mix gently. <h5>Step-3</h5>Divide the schezwan paneer stuffing into 4 equal portions and keep aside. <h5>Step-4</h5>To make schezwan paneer cold sandwich, divide the sour cream into 4 equal portions and keep aside. <h5>Step-5</h5>Place 2 bread slices on a clean, dry surface and apply a portion of the sour cream on both the bread slices. <h5>Step-6</h5>Spread a portion of the schezwan paneer stuffing evenly on a bread slice and sandwich it using another bread slice with the sour cream side facing downwards. <h5>Step-7</h5>Cut the sandwich diagonally into 2 equal pieces. <h5>Step-8</h5>Repeat steps 2 to 4 to make 3 more sandwiches. <h5>Step-9</h5>Serve the schezwan paneer cold sandwich immediately.",
            Area: "Indo-Chinese",
            Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Muskmelon Pineapple Juice",
            image: "https://www.tarladalal.com/members/9306/big/big_muskmelon_and_pineapple_juice-17158.jpg?size=696X905",
            ingredients: [
                "2 cups chilled and roughly chopped muskmelon (kharbooja)",
                "2 cups chilled and roughly chopped pineapple",
                "2 tsp chopped ginger (adrak)",
                "10 ice-cubes"
            ],
            instructions: "<h5>Step-1</h5>To make muskmelon pineapple juice, combine the muskmelon, pineapple and ginger in a mixer. <h5>Step-2</h5>Add 1/2 cup of chilled water and ice-cubes. <h5>Step-3</h5>Blend till smooth. <h5>Step-4</h5>Serve muskmelon pineapple juice immediately.",
            Area: "Indian",
            Category: ["Beverage", "Healthy", "Vegetarian"]
        },
        {
            name: "Moong Dal Dhokla",
            image: "https://www.tarladalal.com/members/9306/big/big_moong_dal_dhokla-14236.jpg?size=696X905",
            ingredients: [
                "3/4 cup yellow moong dal (split yellow gram)",
                "1 tsp roughly chopped green chillies",
                "salt to taste",
                "1 1/2 tsp sugar",
                "a pinch of asafoetida (hing)",
                "1 tbsp oil",
                "1/2 tsp turmeric powder (haldi)",
                "1 tbsp besan (bengal gram flour)",
                "1 1/2 tsp fruit salt",
                "1 tbsp oil",
                "1/2 tsp mustard seeds (rai / sarson)",
                "1/2 tsp sesame seeds (til)",
                "a pinch asafoetida (hing)",
                "2 tsp finely chopped green chillies",
                "1 tbsp finely chopped coriander (dhania)",
                "1 tbsp grated coconut",
                "green chutney"
            ],
            instructions: "<h5>Step-1</h5>To make moong dal dhokla, soak the yellow moong dal in enough water for 30 minutes. Drain well. <h5>Step-2</h5>Combine the yellow moong dal and green chillies and blend in a mixer using ½ cup of water to make a paste of pouring consistency. <h5>Step-3</h5>Transfer the paste to a bowl, add the salt, sugar, asafoetida, oil, turmeric powder, besan and curds and mix well to make a batter. <h5>Step-4</h5>Just before steaming, sprinkle fruit salt and mix lightly. <h5>Step-5</h5>Pour the batter into a greased 175 mm. (7”) diameter thali. <h5>Step-6</h5>Steam in a steamer for 10 to 12 minutes or till the dhokala is cooked. Keep aside. <h5>Step-7</h5>Heat the oil in a small non-stick pan and add the mustard seeds. <h5>Step-8</h5>When the mustard seeds crackle, add the sesame seeds, asafoetida and sauté on a medium flame for 30 seconds. <h5>Step-9</h5>Add the green chillies and sauté on a medium flame for 30 seconds. <h5>Step-10</h5>Pour the tempering over the prepared moong dal dhokla and spread it evenly. <h5>Step-11</h5>Sprinkle the coriander and coconut evenly on top. <h5>Step-12</h5>Cut the moong dal dhokla into pieces and serve hot with green chutney.",
            Area: "Gujarati",
            Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Anti-Aging Breakfast Platter",
            image: "https://www.tarladalal.com/members/9306/big/big_anti-_aging_breakfast_platter-14956.jpg?size=696X905",
            ingredients: [
                "2 tbsp sprouted moong (whole green gram)",
                "1/4 cup low fat paneer (cottage cheese) cubes",
                "1/4 tsp chilli powder",
                "1/4 tsp cumin seeds (jeera) powder",
                "1/4 tsp rock salt (sendha namak)",
                "6 oranges segments",
                "1/2 cup watermelon (tarbuj) balls",
                "1/4 cup green grapes",
                "2 dates (khajur)",
                "4 walnuts (akhrot)",
                "5 almonds (badam)"
            ],
            instructions: "<h5>Step-1</h5>To make anti-aging breakfast platter, combine the sprouted moong, paneer, chilli powder, cumin seeds powder and rock salt in a bowl and mix well. <h5>Step-2</h5>Arrange all the ingredients on a platter and serve immediately.",
            Area: "Indian",
            Category: ["Breakfast", "Healthy", "Vegetarian"]
        },
        {
            name: "Instant Poha Idli",
            image: "https://www.tarladalal.com/members/9306/big/big_instant_poha_idli,_aval_idli-15670.jpg?size=696X905",
            ingredients: [
                "1 cup raw rice (chawal)",
                "1/4 cup thick beaten rice (jada poha)",
                "1/4 cup urad dal (split black lentils)",
                "1/4 tsp fenugreek (methi) seeds",
                "1/4 cup curd (dahi)",
                "salt to taste",
                "1 tsp fruit salt"
            ],
            instructions: "<h5>Step-1</h5>To make instant poha idli, place the rice in a deep bowl. Clean and wash the rice well. Drain, add the poha and enough water and soak for 2 hours. Drain well. <h5>Step-2</h5>Clean, wash the urad dal and fenugreek seeds thoroughly and soak with enough water in a deep bowl for at least 2 hours. Drain well. <h5>Step-3</h5>Combine the rice-poha mixture and ½ cup of water in a mixer and blend till smooth. <h5>Step-4</h5>Combine the urad dal, fenugreek seeds and ¼ cup of water in a mixer and blend till smooth. <h5>Step-5</h5>Combine the two batters and curd and salt in a deep bowl and mix very well. <h5>Step-6</h5>Just before steaming the idlis, add the fruit salt and 2 tsp of water and mix gently. <h5>Step-7</h5>Put spoonfuls of the batter into greased idli moulds and steam in a steamer for 10 to 12 minutes. <h5>Step-8</h5>Repeat with the remaining batter to make more instant poha idlis. <h5>Step-9</h5>Serve the instant poha idlis hot with sambhar and coconut chutney.",
            Area: "Indian",
            Category: ["Breakfast", "South Indian", "Vegetarian"]
        },
        {
            name: "Vermicelli Idli",
            image: "https://www.tarladalal.com/members/9306/big/big_vermicelli_nut_idli-16835.jpg?size=696X905",
            ingredients: [
                "2 cups broken vermicelli (sevaiyan)",
                "3/4 cup semolina (rava / sooji)",
                "1 cup curd (dahi)",
                "4 tbsp oil",
                "1 tsp mustard seeds (rai / sarson)",
                "2 tsp urad dal (split black lentils)",
                "a pinch of asafoetida (hing)",
                "1 tbsp finely chopped green chillies",
                "1 tbsp broken cashew nut (kaju)",
                "3 to 4 curry leaves (kadi patta)",
                "salt to taste",
                "2 tsp fruit salt",
                "sambhar",
                "coconut chutney"
            ],
            instructions: "<h5>Step-1</h5>To make vermicelli idli recipe, heat 4 tbsp of oil in a broad non-stick pan, add mustard seeds, urad dal, asafoetida, cashewnuts and curry leaves. <h5>Step-2</h5>Sauté on medium flame for few seconds. Add semolina and sauté on medium flame for 2 to 3 minutes, while stirring continuously. <h5>Step-3</h5>Add vermicelli and sauté on medium flame for 2 minutes, while stirring occasionally. <h5>Step-4</h5>Switch off the flame and remove in a deep bowl and cool slightly. <h5>Step-5</h5>Add the salt and curd, mix well. <h5>Step-6</h5>Just before steaming the idlis, add the fruit salt and little water over it, when the bubbles form, mix gently. <h5>Step-7</h5>Pour a little batter into each of the greased idli moulds and steam in a steamer for 10 to 12 minutes or till the idlis are cooked. <h5>Step-8</h5>Repeat step 6 with the remaining batter to make more idlis. <h5>Step-9</h5>Allow the idlis to cool slightly and demould them. <h5>Step-10</h5>Serve vermicelli idli hot with sambhar and coconut chutney.",
            Area: "Indian",
            Category: ["Breakfast", "South Indian", "Vegetarian"]
        },
        {
            name: "Poha Dhokla",
            image: "https://www.tarladalal.com/members/9306/big/big_poha_dhokla-14099.jpg?size=696X905",
            ingredients: [
                "1/2 cup coarsely crushed thick beaten rice (jada poha)",
                "1/2 cup semolina (rava / sooji)",
                "1 tsp green chilli paste",
                "salt to taste",
                "1 tsp fruit salt",
                "1 tbsp oil",
                "1/2 tsp mustard seeds (rai / sarson)",
                "a pinch of asafoetida (hing)",
                "1 tbsp finely chopped coriander (dhania)",
                "green chutney"
            ],
            instructions: "<h5>Step-1</h5>To make poha dhokla, combine the curds and 1 cup of water in a deep bowl and mix well. <h5>Step-2</h5>Add the semolina, beaten rice, green chilli paste and salt, mix well and keep aside for 10 minutes. <h5>Step-3</h5>Just before steaming, add the fruit salt and 2 tsp of water over it. <h5>Step-4</h5>When the bubbles form, mix gently. <h5>Step-5</h5>Pour the batter into a greased 175 mm. (7”) diameter thali and shake the thali clockwise to spread the batter in an even layer. <h5>Step-6</h5>Steam in a steamer for 10 to 12 minutes or till the dhoklas are cooked. Keep aside. <h5>Step-7</h5>Heat the oil in a small pan and add the mustard seeds. <h5>Step-8</h5>When the seeds crackle, add the asafoetida. Sauté on a medium flame for a few seconds and pour this tempering over the dhoklas. <h5>Step-9</h5>Cool the poha dhokla slightly, cut into diamond shaped equal sized pieces and garnish with coriander. <h5>Step-10</h5>Cool the poha dhoklas slightly, wrap in an aluminum foil and pack in a tiffin box.",
            Area: "Gujarati",
            Category: ["Snack", "Street Food", "Vegetarian"]
        },
        {
            name: "Gujarati Plain Thepla",
            image: "https://www.tarladalal.com/members/9306/big/big_thepla_(_gujarati_recipe)-15767.jpg?size=696X905",
            ingredients: [
                "2 cups whole wheat flour (gehun ka atta)",
                "1 tbsp oil",
                "2 tbsp curd (dahi)",
                "1/4 tsp turmeric powder (haldi)",
                "1 tsp chilli powder",
                "salt to taste",
                "whole wheat flour (gehun ka atta) for rolling",
                "oil for kneading and cooking",
                "chunda or sweet pickle"
            ],
            instructions: "<h5>Step-1</h5>For making the famous Gujarati theplas at home, you first have to combine whole wheat flour, oil, curds, turmeric powder, chili powder and salt in a bowl and knead into a semi-soft dough using enough water. The addition of curd and oil in the dough results into soft thepla. <h5>Step-2</h5>Knead the dough well using a little oil. Cover with a lid or a muslin cloth and keep it aside for 10 minutes. Ensure that you are using a wide mouthed bowl which helps in kneading the dough without creating a mess. <h5>Step-3</h5>Divide the dough into 14 equal portions and shape them into round balls. Press them gently between your palms and flatten it to roll out each portion into a 125 mm. (5\") diameter circle using whole wheat flour for rolling. <h5>Step-4</h5>Heat a non-stick tava (griddle) over medium flame. On the hot tawa, place the rolled circle and cook each circle, using a little oil, till it turns golden brown in colour from both sides on a slow flame. <h5>Step-5</h5>To increase the shelf life of the thepla, use lots of oil while cooking; so that they will remain soft. <h5>Step-6</h5>Serve the Gujarati theplas hot with chunda or sweet mango pickle.",
            Area: "Gujarati",
            Category: ["Main Course", "Indian Bread", "Vegetarian"]
        }
];

export default recipes;