import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SolarwindsComponent } from "./solarwinds.component";

const routes: Routes = [
  {
    path: "",
    component: SolarwindsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolarwindsRoutingModule {}
