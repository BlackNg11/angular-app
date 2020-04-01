import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "../share/share.module";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ShareModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "auth",
        component: AuthComponent
      }
    ])
  ]
})
export class AuthModule {}
