// Sample Recipe Data
const recipes = [
    {
        title: "Spaghetti Carbonara",
        cuisine: "italian",
        image: "images/carbonara.jpg",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper."
    },
    {
        title: "Chicken Tikka Masala",
        cuisine: "indian",
        image: "images/tikka-masala.jpg",
        description: "A flavorful Indian curry made with chicken and spices."
    },
    {
        title: "Tacos al Pastor",
        cuisine: "mexican",
        image: "images/tacos.jpg",
        description: "Delicious Mexican tacos with marinated pork and pineapple."
    },
    {
        title: "Margherita Pizza",
        cuisine: "italian",
        image: "images/pizza.jpg",
        description: "A simple pizza topped with fresh tomatoes, mozzarella, and basil."
    }
];

// DOM Elements
const recipesGrid = document.getElementById("recipes-grid");
const searchBar = document.getElementById("search-bar");
const cuisineSelect = document.getElementById("cuisine-select");

// Render Recipes
function renderRecipes(filteredRecipes) {
    recipesGrid.innerHTML = ""; // Clear previous content
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        recipesGrid.appendChild(recipeCard);
    });
}

// Filter Recipes
function filterRecipes() {
    const searchQuery = searchBar.value.toLowerCase();
    const selectedCuisine = cuisineSelect.value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCuisine = selectedCuisine === "all" || recipe.cuisine === selectedCuisine;
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery);
        return matchesCuisine && matchesSearch;
    });

    renderRecipes(filteredRecipes);
}

// Event Listeners
searchBar.addEventListener("input", filterRecipes);
cuisineSelect.addEventListener("change", filterRecipes);

// Initial Render
renderRecipes(recipes);
