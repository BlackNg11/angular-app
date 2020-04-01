import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoute: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
