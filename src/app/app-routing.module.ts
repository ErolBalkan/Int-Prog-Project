import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsViewComponent } from './ingredients-view/ingredients-view.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { CuisineViewComponent } from './cuisine-view/cuisine-view.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'recipes/:id', component: RecipeViewComponent },
  { path: 'recipes/edit/:id', component: RecipeEditComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredients/:id', component: IngredientsViewComponent }, // Ke sabav ingredients-view
  { path: 'cuisine', component: CuisineComponent },
  { path: 'cuisine/:id', component: CuisineViewComponent }, // Ke savam cuisine-view
  { path: 'about', component: AboutComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
