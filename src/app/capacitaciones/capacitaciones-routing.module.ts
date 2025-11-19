import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CapacitacionesComponent } from "./capacitaciones.component";
import { ToadForOracleComponent } from "./toad-for-oracle/toad-for-oracle.component";

const routes: Routes = [
  {
    path: "",
    component: CapacitacionesComponent,
  },
  {
    path: "toad-for-oracle",
    component: ToadForOracleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitacionesRoutingModule {}
