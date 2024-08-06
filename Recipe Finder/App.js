// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function() {
    // Get the value from the search input field
    const query = document.getElementById('search-bar').value;
    // Call the function to fetch recipes based on the search query
    fetchRecipes(query);
});

// Function to fetch recipes from the Spoonacular API
function fetchRecipes(query) {
    // Spoonacular API key 
    const apiKey = '53cfed7be6ba4d06b1bed15737500d78';
    // Construct the API URL with the query and API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
    
    // Fetch data from the API
    fetch(url)
        .then(response => {
           
            if (!response.ok) {
                
                throw new Error('Network response was not ok');
            }
        
            return response.json();
        })
        .then(data => {
            
            if (data && data.results) {
                // If results are found, display the recipes
                displayRecipes(data.results);
            } else {
                // If no results are found, log an error message and display no results message
                console.error('No results found:', data);
                displayNoResultsMessage();
            }
        })
        .catch(error => {
            // Log any errors that occur during the fetch process
            console.error('Error fetching recipes:', error);
        });
}

// Function to display recipes on the web page
function displayRecipes(recipes) {
    // Check if recipes is a valid array
    if (!recipes || !Array.isArray(recipes)) {
        console.error('Invalid recipes data:', recipes);
        return;
    }

    // Get the element to display the list of recipes
    const recipeList = document.getElementById('recipe-list');
    // Clear any existing content in the recipe list
    recipeList.innerHTML = '';
    
    // Iterate over the array of recipes
    recipes.forEach(recipe => {
        // Create a div element for each recipe item
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        // Set the inner HTML of the div with the recipe image and title
        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
        `;
        // Append the recipe item to the recipe list
        recipeList.appendChild(recipeItem);
    });
}

// Function to display a message when no results are found
function displayNoResultsMessage() {
    // Get the element to display the list of recipes
    const recipeList = document.getElementById('recipe-list');
    // Set the inner HTML of the recipe list with a no results message
    recipeList.innerHTML = '<p>No recipes found. Please try a different search query.</p>';
}
