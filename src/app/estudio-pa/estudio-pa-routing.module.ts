import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EstudioPaComponent } from "./estudio-pa.component";

const routes: Routes = [
  {
    path: "",
    component: EstudioPaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudioPaRoutingModule {}

