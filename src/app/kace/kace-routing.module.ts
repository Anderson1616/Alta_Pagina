import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { KaceComponent } from "./kace.component";

const routes: Routes = [
  {
    path: "",
    component: KaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaceRoutingModule {}

