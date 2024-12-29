import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentService } from './services/student.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { IngredientsViewComponent } from './ingredients-view/ingredients-view.component';
import { CuisineViewComponent } from './cuisine-view/cuisine-view.component';
// import {  } from '';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeListComponent,
    RecipeCreateComponent,
    RecipeEditComponent,
    //IngredientsComponent,
    CuisineComponent,
    AboutComponent,
    StatisticsComponent,
    RecipeViewComponent,
    IngredientsViewComponent,
    CuisineViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
