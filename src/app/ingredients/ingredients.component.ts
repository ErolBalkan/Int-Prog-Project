import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';//RecipeService
import { Recipe, Ingredients } from '../models/client';
import { Router } from '@angular/router';
import { RecipeResponse, IngredientsResponse } from '../models/server';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit{

  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  recipes: Recipe[] = [];
  ingredients: Ingredients[] = []

  constructor(
    private recipeService: RecipeService,
    private ingredientsService: RecipeService
  ) { }

  ngOnInit(){
    this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.sortById()
    });
    this.ingredientsService.getIngredients().subscribe((data_i: Ingredients[]) => {
      this.ingredients = data_i;
      this.sortByName()
    });
  }

  sortById(){
    if(this.sortField === 'id'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.recipes.sort((a,b) => a.id - b.id);  
      }else{
        this.recipes.sort((a,b) => b.id - a.id);
      }
    }else{
    this.recipes.sort((a,b) => a.id - b.id);
    this.sortField = 'id';
    this.sortDirection = 'asc';
    }
  }

  sortByName(){
    if(this.sortField === 'Name'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.ingredients.sort((a,b) => a.name.localeCompare(b.name));  
      }else{
        this.ingredients.sort((a,b) => b.name.localeCompare(a.name));
      }
    }else{
    this.ingredients.sort((a,b) => a.name.localeCompare(b.name));
    this.sortField = 'Name';
    this.sortDirection = 'asc';
    }
  }

}
