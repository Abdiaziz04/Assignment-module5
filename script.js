// Function to load random category
function loadRandomCategory() {
    // Array of possible category short_names
    const categories = ['LUNCH', 'DINNER', 'SUSHI', 'DRINKS']; // Add more categories as needed

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * categories.length);

    // Get the random category short_name
    const randomCategory = categories[randomIndex];

    // Use the random category to load menu items (you might need to adjust this based on your actual code)
    $dc.loadMenuItems(randomCategory);
}
