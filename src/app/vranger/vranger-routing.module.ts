import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VrangerComponent } from "./vranger.component";

const routes: Routes = [
  {
    path: "",
    component: VrangerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VrangerRoutingModule {}

