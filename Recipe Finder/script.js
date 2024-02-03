let input = document.querySelector("input");
let find_btn = document.querySelector("button");
let body = document.body;

async function logRecipes() {
    let query = input.value;
    console.log(query);
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(URL);
    const data = await response.json();
    const recipes = data.meals;
    console.log(recipes);
    
    let bigContain = document.createElement("div")
    bigContain.classList.add("bigContain")
    body.appendChild(bigContain)


    recipes.forEach(recipe => {
        let div = document.createElement("div");
        div.classList.add("recipe");
        bigContain.appendChild(div);

        // Display recipe name
        let recipeName = document.createElement("h2");
        recipeName.textContent = recipe.strMeal;
        div.appendChild(recipeName);

        // Heading for Ingredients
        let ingredientsHeading = document.createElement("h3");
        ingredientsHeading.textContent = "Ingredients";
        div.appendChild(ingredientsHeading);

        // Display ingredients
        let ingredientsList = document.createElement("ul");
        div.appendChild(ingredientsList);
        
        for (let i = 1; i <= 20; i++) {
            let ingredient = recipe[`strIngredient${i}`];
            let measure = recipe[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== "") {
                let li = document.createElement("li");
                li.textContent = `${measure} ${ingredient}`;
                ingredientsList.appendChild(li);
            }
        }

        // Heading for Instructions
        let instructionsHeading = document.createElement("h3");
        instructionsHeading.textContent = "Instructions";
        div.appendChild(instructionsHeading);

        // Display recipe instructions
        let instructions = document.createElement("p");
        instructions.textContent = recipe.strInstructions;
        div.appendChild(instructions);
    });
}

find_btn.addEventListener("click", () => {
    logRecipes();
});
