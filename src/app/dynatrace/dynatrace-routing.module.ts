import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DynatraceComponent } from "./dynatrace.component";

const routes: Routes = [
  {
    path: "",
    component: DynatraceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynatraceRoutingModule {}

