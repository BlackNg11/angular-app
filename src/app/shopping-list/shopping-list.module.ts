import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShareModule } from "../share/share.module";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [FormsModule, ShoppingListRoutingModule, ShareModule]
})
export class ShoppingListModule {}
