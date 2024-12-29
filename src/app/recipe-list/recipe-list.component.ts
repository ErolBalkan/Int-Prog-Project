import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  recipes: Recipe[] = [];

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
      this.sortById()
    });
  }

  deleteRecipe(id: number){
    console.log(`Deleting with the id:` + id);
  }

  editRecipe(id: number){
    this.router.navigate([`recipes`, `edit` , id]);
  }

  viewRecipe(id: number){
    this.router.navigate([`recipes`, id]);
  }

  cuiRecipe(id: number){
    this.router.navigate([`cuisine`, id]);
  }

  ingRecipe(id: number){
    this.router.navigate([`ingredients`, id]);
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

  sortByTitle(){
    if(this.sortField === 'title'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.recipes.sort((a,b) => a.title.localeCompare(b.title));  
      }else{
        this.recipes.sort((a,b) => b.title.localeCompare(a.title));
      }
    }else{
    this.recipes.sort((a,b) => a.title.localeCompare(b.title));
    this.sortField = 'title';
    this.sortDirection = 'asc';
    }
  }

  sortByCui(){
    if(this.sortField === 'cuisine'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.recipes.sort((a,b) => a.cuisine.localeCompare(b.cuisine));  
      }else{
        this.recipes.sort((a,b) => b.cuisine.localeCompare(a.cuisine));
      }
    }else{
    this.recipes.sort((a,b) => a.cuisine.localeCompare(b.cuisine));
    this.sortField = 'cuisine';
    this.sortDirection = 'asc';
    }
  }

  sortByTime(){
    if(this.sortField === 'time'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.recipes.sort((a,b) => a.time - b.time);  
      }else{
        this.recipes.sort((a,b) => b.time - a.time);
      }
    }else{
    this.recipes.sort((a,b) => a.time - b.time);
    this.sortField = 'time';
    this.sortDirection = 'asc';
    }
  }

  sortBySer(){
    if(this.sortField === 'servings'){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc'){
        this.recipes.sort((a,b) => a.servings - b.servings);  
      }else{
        this.recipes.sort((a,b) => b.servings - a.servings);
      }
    }else{
    this.recipes.sort((a,b) => a.servings - b.servings);
    this.sortField = 'servings';
    this.sortDirection = 'asc';
    }
  }

}
