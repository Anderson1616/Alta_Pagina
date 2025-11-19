import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SalasInteligentesComponent } from "./salas-inteligentes.component";

const routes: Routes = [
  {
    path: "",
    component: SalasInteligentesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalasInteligentesRoutingModule {}

