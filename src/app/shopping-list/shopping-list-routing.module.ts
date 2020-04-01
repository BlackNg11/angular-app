import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

const route: Routes = [{ path: "", component: ShoppingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
