import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeResponse } from '../models/server';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/client';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
  id: number = 0;
  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get(`id`);
      this.id = Number(id);
      this.loadRecipeData();
    })
  }

  loadRecipeData(){
    this.recipeService.getRecipe(this.id).subscribe(recipe => {
      this.recipe = recipe;
    })
  }

  showTitle(event: Event) {
    const title = ((event.target as HTMLInputElement).value);
    this.recipe!.title = title;
  }

  saveRecipe(){
    if(this.recipe){
      this.recipeService.updateRecipe(this.recipe).subscribe((data) => {
        this.router.navigate([`/recipes`]);
      })
    }
  }

}
