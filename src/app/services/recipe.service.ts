import { Injectable } from '@angular/core';

import { BehaviorSubject, map, tap } from 'rxjs';
import { Recipe, Ingredients } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { toRecipe, toIngredients, fromRecipe, fromIngredients } from '../models/mapping';
import { RecipeResponse, IngredientsResponse } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly BASE_URL = 'http://localhost:2999';

  constructor(private http: HttpClient) { }

  getRecipes(){
    const url = `${this.BASE_URL}/recipes`;
    const recipes = this.http.get<RecipeResponse[]>(url).pipe(
      tap(recipeResponses => console.table(recipeResponses)),
      map(recipeResponses => recipeResponses.map(toRecipe))
    );
    return recipes;
  }

  getRecipe(id: number){
    const url = `${this.BASE_URL}/recipes/${id}`;
    const recipe = this.http.get<RecipeResponse>(url).pipe(
      map(toRecipe)
    );
    return recipe;
  }

  updateRecipe(recipe: Recipe){
    const url = `${this.BASE_URL}/recipes/${recipe.id}`;
    const recipeResponses = fromRecipe(recipe);
    return this.http.put(url, recipeResponses);
  }

  // getIngredients(){
  //   const url = `${this.BASE_URL}/ingredients`;
  //   const ingredients = this.http.get<IngredientsResponse[]>(url).pipe(
  //     tap(ingredientsResponses => console.table(ingredientsResponses)),
  //     map(ingredientsResponses => ingredientsResponses.map(toIngredients))
  //   );
  //   return ingredients;
  // }


}
