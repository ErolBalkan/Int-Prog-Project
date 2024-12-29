import { Recipe, Ingredients } from "./client";
import { RecipeResponse, IngredientsResponse } from "./server";

export const toRecipe = (response: RecipeResponse): Recipe => { // i will need this
    return {
        id: response.id,
        title: response.title,
        cuisine: response.cuisine,
        description: response.description,
        ingredients: response.ingredients.map(toIngredients),
        instructions: response.instructions,
        time: response.time,
        servings: response.servings
    }
}

export const toIngredients = (response: IngredientsResponse): Ingredients => {
    return {
        name: response.name,
        quantity: response.quantity,
        unit: response.unit
    }
} //gong to fix

export const fromRecipe = (response: Recipe): RecipeResponse => { // i will need this
    return {
        id: response.id,
        title: response.title,
        cuisine: response.cuisine,
        description: response.description,
        ingredients: response.ingredients.map(fromIngredients),
        instructions: response.instructions,
        time: response.time,
        servings: response.servings
    }
}

export const fromIngredients = (response: Ingredients):  IngredientsResponse => {
    return {
        name: response.name,
        quantity: response.quantity,
        unit: response.unit
    }
}


// {
//     "id": "number", // the unique identifier of the recipe
//     "title": "string", // the title of the recipe
//     "cuisine": "string", // the cuisine of the recipe
//     "description": "string", // the description of the recipe
//     "ingredients": [{
//         "name": "string", // the name of the ingredient, must be a valid ingredient from the ingredients endpoint
//         "quantity": "number", // the quantity of the ingredient, in the unit specified
//         "unit": "string" // the unit of the ingredient (e.g. grams, cups, etc.). It can also be an empty string.
//     }], // an array of objects, each object is an ingredient
//     "instructions": "string", // a string that contains the instructions for the recipe
//     "time": "number", // the time it takes to prepare the recipe, in minutes
//     "servings": "number", // the number of servings the recipe makes
// }