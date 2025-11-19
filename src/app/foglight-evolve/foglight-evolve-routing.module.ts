import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FoglightEvolveComponent } from "./foglight-evolve.component";

const routes: Routes = [
  {
    path: "",
    component: FoglightEvolveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoglightEvolveRoutingModule {}

