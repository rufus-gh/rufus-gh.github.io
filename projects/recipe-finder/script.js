document.addEventListener('DOMContentLoaded', () => {
    // Static recipe data - this makes the app work without a backend API
    const recipes = [
        {
            id: 1,
            name: 'Avocado Toast with Poached Egg',
            description: 'A nutritious and delicious breakfast option that\'s ready in minutes.',
            category: 'breakfast',
            prepTime: 5,
            cookTime: 10,
            servings: 2,
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '2 slices of whole grain bread',
                '1 ripe avocado',
                '2 eggs',
                '1 tablespoon white vinegar',
                'Salt and pepper to taste',
                'Red pepper flakes (optional)',
                'Fresh herbs for garnish (optional)'
            ],
            instructions: [
                'Toast the bread until golden and firm.',
                'While the bread is toasting, halve the avocado and remove the pit. Scoop the flesh into a bowl and mash with a fork. Add salt and pepper to taste.',
                'For the poached eggs, bring a pot of water to a simmer. Add the vinegar.',
                'Crack each egg into a small bowl, then gently slide into the simmering water.',
                'Cook for about 3-4 minutes, then remove with a slotted spoon.',
                'Spread the mashed avocado on the toast and top with a poached egg.',
                'Season with additional salt, pepper, red pepper flakes, and fresh herbs if desired.'
            ],
            tags: ['healthy', 'vegetarian', 'high-protein', 'quick']
        },
        {
            id: 2,
            name: 'Classic Caesar Salad',
            description: 'A timeless salad with crisp romaine lettuce, parmesan cheese, and homemade croutons.',
            category: 'lunch',
            prepTime: 15,
            cookTime: 10,
            servings: 4,
            difficulty: 'Medium',
            image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '2 heads of romaine lettuce, chopped',
                '1 cup croutons (homemade or store-bought)',
                '1/2 cup freshly grated Parmesan cheese',
                '2 cloves garlic, minced',
                '2 anchovy fillets, minced (optional)',
                '1 egg yolk',
                '2 tablespoons fresh lemon juice',
                '1 teaspoon Dijon mustard',
                '1/2 cup olive oil',
                'Salt and pepper to taste'
            ],
            instructions: [
                'For homemade croutons: cut bread into cubes, toss with olive oil, salt, and pepper, and bake at 375°F for 10 minutes or until golden.',
                'In a bowl, whisk together garlic, anchovies (if using), egg yolk, lemon juice, and Dijon mustard.',
                'Slowly drizzle in the olive oil while whisking continuously to create an emulsion.',
                'Season the dressing with salt and pepper to taste.',
                'In a large bowl, toss the chopped romaine with the dressing until well coated.',
                'Add the croutons and most of the Parmesan cheese and toss again.',
                'Serve immediately, topped with the remaining Parmesan cheese.'
            ],
            tags: ['classic', 'salad', 'lunch']
        },
        {
            id: 3,
            name: 'Spaghetti Bolognese',
            description: 'A rich and hearty Italian meat sauce served over al dente pasta.',
            category: 'dinner',
            prepTime: 20,
            cookTime: 90,
            servings: 6,
            difficulty: 'Medium',
            image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '1 lb (450g) spaghetti',
                '2 tablespoons olive oil',
                '1 large onion, finely chopped',
                '2 carrots, finely diced',
                '2 celery stalks, finely diced',
                '4 cloves garlic, minced',
                '1 lb (450g) ground beef',
                '1/2 lb (225g) ground pork',
                '1 cup red wine',
                '2 tablespoons tomato paste',
                '28 oz (800g) crushed tomatoes',
                '2 bay leaves',
                '1 teaspoon dried oregano',
                'Salt and pepper to taste',
                'Freshly grated Parmesan cheese for serving',
                'Fresh basil for garnish'
            ],
            instructions: [
                'In a large pot or Dutch oven, heat the olive oil over medium heat.',
                'Add the onion, carrots, and celery, and cook until softened, about 5-7 minutes.',
                'Add the garlic and cook for another minute until fragrant.',
                'Increase heat to medium-high and add the ground beef and pork. Cook, breaking up the meat with a spoon, until browned.',
                'Pour in the red wine and simmer until reduced by half, about 5 minutes.',
                'Stir in the tomato paste, crushed tomatoes, bay leaves, and oregano.',
                'Bring to a boil, then reduce heat to low and simmer, partially covered, for at least 1 hour (preferably 1.5-2 hours), stirring occasionally.',
                'While the sauce is finishing, cook the spaghetti in salted water according to package instructions until al dente.',
                'Season the Bolognese sauce with salt and pepper to taste.',
                'Serve the sauce over the drained pasta, topped with freshly grated Parmesan cheese and torn basil leaves.'
            ],
            tags: ['italian', 'pasta', 'meat', 'dinner']
        },
        {
            id: 4,
            name: 'Chocolate Chip Cookies',
            description: 'Soft and chewy cookies with melty chocolate chips. A classic favorite!',
            category: 'dessert',
            prepTime: 15,
            cookTime: 10,
            servings: 24,
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '2 1/4 cups all-purpose flour',
                '1 teaspoon baking soda',
                '1 teaspoon salt',
                '1 cup (2 sticks) unsalted butter, at room temperature',
                '3/4 cup granulated sugar',
                '3/4 cup packed brown sugar',
                '2 large eggs',
                '2 teaspoons vanilla extract',
                '2 cups semi-sweet chocolate chips',
                '1 cup chopped nuts (optional)'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.',
                'In a small bowl, whisk together the flour, baking soda, and salt.',
                'In a large bowl, beat the butter, granulated sugar, and brown sugar together until light and fluffy.',
                'Beat in the eggs one at a time, then stir in the vanilla.',
                'Gradually blend in the dry ingredients, then fold in the chocolate chips and nuts if using.',
                'Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches apart.',
                'Bake for 9 to 11 minutes or until golden brown.',
                'Allow cookies to cool on the baking sheet for 2 minutes before transferring to wire racks to cool completely.'
            ],
            tags: ['dessert', 'baking', 'cookies', 'chocolate']
        },
        {
            id: 5,
            name: 'Vegetable Stir Fry',
            description: 'A quick and vibrant vegetable stir fry loaded with fresh veggies and a flavorful sauce.',
            category: 'dinner',
            prepTime: 15,
            cookTime: 10,
            servings: 4,
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '2 tablespoons vegetable oil',
                '2 cloves garlic, minced',
                '1 tablespoon ginger, grated',
                '1 carrot, thinly sliced',
                '1 red bell pepper, sliced',
                '1 yellow bell pepper, sliced',
                '1 cup broccoli florets',
                '1 cup snap peas',
                '1 cup mushrooms, sliced',
                '2 tablespoons soy sauce',
                '1 tablespoon oyster sauce',
                '1 tablespoon honey or brown sugar',
                '1/2 teaspoon sesame oil',
                '1/4 cup water or vegetable broth',
                '1 tablespoon cornstarch mixed with 2 tablespoons water',
                'Sesame seeds and chopped green onions for garnish'
            ],
            instructions: [
                'Heat vegetable oil in a large wok or skillet over medium-high heat.',
                'Add garlic and ginger and stir-fry for 30 seconds until fragrant.',
                'Add carrots and cook for 2 minutes, then add bell peppers, broccoli, snap peas, and mushrooms.',
                'Cook for 5-6 minutes, stirring frequently, until vegetables are crisp-tender.',
                'In a small bowl, mix together soy sauce, oyster sauce, honey or brown sugar, sesame oil, and water or broth.',
                'Pour the sauce over the vegetables and bring to a simmer.',
                'Add the cornstarch mixture and stir until the sauce thickens, about 1 minute.',
                'Serve immediately over rice or noodles, garnished with sesame seeds and chopped green onions.'
            ],
            tags: ['vegetarian', 'healthy', 'quick', 'asian']
        },
        {
            id: 6,
            name: 'Banana Bread',
            description: 'Moist and delicious banana bread, perfect for breakfast or a snack.',
            category: 'breakfast',
            prepTime: 15,
            cookTime: 60,
            servings: 10,
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '3-4 very ripe bananas, mashed',
                '1/3 cup melted butter',
                '1 cup granulated sugar',
                '1 egg, beaten',
                '1 teaspoon vanilla extract',
                '1 teaspoon baking soda',
                'Pinch of salt',
                '1 1/2 cups all-purpose flour',
                '1/2 cup chopped nuts (optional)',
                '1/4 cup chocolate chips (optional)'
            ],
            instructions: [
                'Preheat the oven to 350°F (175°C). Grease a 9x5 inch loaf pan.',
                'In a large bowl, combine the mashed bananas and melted butter.',
                'Mix in the sugar, egg, and vanilla extract.',
                'Sprinkle the baking soda and salt over the mixture and mix in.',
                'Add the flour and mix until just combined. Do not overmix.',
                'If using, fold in nuts and chocolate chips.',
                'Pour the batter into the prepared loaf pan and bake for 50-60 minutes, until a toothpick inserted into the center comes out clean.',
                'Let cool in the pan for 10 minutes, then remove to a wire rack to cool completely.'
            ],
            tags: ['baking', 'breakfast', 'snack', 'fruit']
        },
        {
            id: 7,
            name: 'Greek Salad',
            description: 'A refreshing Mediterranean salad with crisp vegetables, feta cheese, and olives.',
            category: 'lunch',
            prepTime: 15,
            cookTime: 0,
            servings: 4,
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '1 English cucumber, chopped',
                '4 Roma tomatoes, chopped',
                '1 red onion, thinly sliced',
                '1 green bell pepper, chopped',
                '1 cup Kalamata olives, pitted',
                '6 oz (170g) feta cheese, cubed or crumbled',
                '2 tablespoons fresh oregano leaves or 1 teaspoon dried',
                '1/4 cup extra virgin olive oil',
                '3 tablespoons red wine vinegar',
                '1 teaspoon Dijon mustard',
                '2 cloves garlic, minced',
                'Salt and freshly ground black pepper to taste'
            ],
            instructions: [
                'In a large bowl, combine cucumber, tomatoes, red onion, bell pepper, Kalamata olives, and feta cheese.',
                'In a small bowl, whisk together olive oil, red wine vinegar, Dijon mustard, garlic, salt, and pepper to make the dressing.',
                'Pour the dressing over the salad and toss gently to combine.',
                'Sprinkle with fresh or dried oregano.',
                'Let sit for at least 10 minutes before serving to allow flavors to meld.',
                'Serve with warm pita bread or as a side dish.'
            ],
            tags: ['mediterranean', 'vegetarian', 'fresh', 'no-cook']
        },
        {
            id: 8,
            name: 'Chocolate Mousse',
            description: 'A rich and creamy chocolate dessert that\'s sure to impress.',
            category: 'dessert',
            prepTime: 20,
            cookTime: 0,
            servings: 6,
            difficulty: 'Medium',
            image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: [
                '7 oz (200g) dark chocolate (70% cocoa), chopped',
                '4 tablespoons unsalted butter',
                '4 large eggs, separated',
                '1/4 cup granulated sugar',
                '1 cup heavy cream',
                '1 teaspoon vanilla extract',
                'Pinch of salt',
                'Chocolate shavings or berries for garnish'
            ],
            instructions: [
                'Place the chopped chocolate and butter in a heatproof bowl over a pan of barely simmering water. Stir until melted and smooth. Remove from heat and let cool slightly.',
                'In a medium bowl, whisk the egg yolks, then gradually add half of the sugar, whisking until pale and thickened.',
                'Slowly stir the melted chocolate mixture into the egg yolk mixture.',
                'In a separate bowl, beat the egg whites with a pinch of salt until soft peaks form. Gradually add the remaining sugar and beat until stiff peaks form.',
                'Gently fold the egg whites into the chocolate mixture.',
                'In another bowl, whip the heavy cream and vanilla until soft peaks form.',
                'Gently fold the whipped cream into the chocolate mixture until no streaks remain.',
                'Divide the mousse into individual serving glasses or cups.',
                'Refrigerate for at least 4 hours or overnight.',
                'Before serving, garnish with chocolate shavings or fresh berries.'
            ],
            tags: ['dessert', 'chocolate', 'no-bake', 'make-ahead']
        }
    ];

    // DOM Elements
    const recipeGrid = document.getElementById('recipe-grid');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('recipe-modal');
    const recipeDetails = document.getElementById('recipe-details');
    const closeBtn = document.querySelector('.close-btn');
    
    // Initialize the page
    let currentRecipes = [...recipes];
    let currentCategory = 'all';
    
    // Display loading initially
    displayLoading();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Remove loading and display recipes
        displayRecipes(currentRecipes);
    }, 800);
    
    // Display loading UI
    function displayLoading() {
        recipeGrid.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Loading recipes...</p>
            </div>
        `;
    }
    
    // Display recipes in the grid
    function displayRecipes(recipesToShow) {
        if (recipesToShow.length === 0) {
            recipeGrid.innerHTML = `
                <div class="no-results">
                    <h3>No recipes found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }
        
        recipeGrid.innerHTML = '';
        recipesToShow.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="recipe-category">${recipe.category}</div>
                </div>
                <div class="recipe-info">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <div class="recipe-tags">
                        ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.prepTime + recipe.cookTime} mins</span>
                        <span><i class="fas fa-user-friends"></i> ${recipe.servings} servings</span>
                    </div>
                </div>
            `;
            
            // Add click event to show recipe details
            recipeCard.addEventListener('click', () => showRecipeDetails(recipe));
            
            recipeGrid.appendChild(recipeCard);
        });
    }
    
    // Filter recipes by category
    function filterRecipes(category) {
        currentCategory = category;
        displayLoading();
        
        setTimeout(() => {
            if (category === 'all') {
                currentRecipes = [...recipes];
            } else {
                currentRecipes = recipes.filter(recipe => recipe.category === category);
            }
            
            // If there's a search query, apply that filter too
            const searchQuery = searchInput.value.trim().toLowerCase();
            if (searchQuery) {
                currentRecipes = currentRecipes.filter(recipe => 
                    recipe.name.toLowerCase().includes(searchQuery) || 
                    recipe.description.toLowerCase().includes(searchQuery) ||
                    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery)) ||
                    recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery))
                );
            }
            
            displayRecipes(currentRecipes);
        }, 400);
    }
    
    // Search recipes
    function searchRecipes(query) {
        displayLoading();
        
        setTimeout(() => {
            query = query.trim().toLowerCase();
            
            // First filter by category if one is selected
            let filteredRecipes = currentCategory === 'all' ? 
                [...recipes] : 
                recipes.filter(recipe => recipe.category === currentCategory);
            
            // Then filter by search query
            if (query) {
                filteredRecipes = filteredRecipes.filter(recipe => 
                    recipe.name.toLowerCase().includes(query) || 
                    recipe.description.toLowerCase().includes(query) ||
                    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
                    recipe.tags.some(tag => tag.toLowerCase().includes(query))
                );
            }
            
            currentRecipes = filteredRecipes;
            displayRecipes(currentRecipes);
        }, 400);
    }
    
    // Show recipe details in modal
    function showRecipeDetails(recipe) {
        recipeDetails.innerHTML = `
            <h2>${recipe.name}</h2>
            
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            
            <p class="recipe-description">${recipe.description}</p>
            
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
            </div>
            
            <div class="recipe-meta">
                <span>
                    <i class="fas fa-clock"></i>
                    <strong>Prep Time</strong>
                    ${recipe.prepTime} mins
                </span>
                <span>
                    <i class="fas fa-fire"></i>
                    <strong>Cook Time</strong>
                    ${recipe.cookTime} mins
                </span>
                <span>
                    <i class="fas fa-user-friends"></i>
                    <strong>Serves</strong>
                    ${recipe.servings}
                </span>
                <span>
                    <i class="fas fa-chart-line"></i>
                    <strong>Difficulty</strong>
                    ${recipe.difficulty}
                </span>
            </div>
            
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Event Listeners
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter recipes by selected category
            filterRecipes(button.dataset.category);
        });
    });
    
    // Search form
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        searchRecipes(searchInput.value);
    });
    
    // Real-time search when typing
    searchInput.addEventListener('input', () => {
        searchRecipes(searchInput.value);
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});