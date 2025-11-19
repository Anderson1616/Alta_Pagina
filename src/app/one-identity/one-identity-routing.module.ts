import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OneIdentityComponent } from "./one-identity.component";

const routes: Routes = [
  {
    path: "",
    component: OneIdentityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneIdentityRoutingModule {}

