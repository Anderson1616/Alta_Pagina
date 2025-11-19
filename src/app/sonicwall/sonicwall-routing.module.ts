import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SonicwallComponent } from "./sonicwall.component";

const routes: Routes = [
  {
    path: "",
    component: SonicwallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonicwallRoutingModule {}

