import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShareplexComponent } from "./shareplex.component";

const routes: Routes = [
  {
    path: "",
    component: ShareplexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareplexRoutingModule {}

