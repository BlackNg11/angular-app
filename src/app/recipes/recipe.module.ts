import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailtComponent } from "./recipe-detailt/recipe-detailt.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailtComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipeEditComponent
  ],
  imports: [ReactiveFormsModule, RecipesRoutingModule, ShareModule]
})
export class RecipesModule {}
