import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailtComponent } from "./recipes/recipe-detailt/recipe-detailt.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoute: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipesStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailtComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
