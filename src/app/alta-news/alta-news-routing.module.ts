import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AltaNewsComponent } from "./alta-news.component";

const routes: Routes = [
  {
    path: "",
    component: AltaNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaNewsRoutingModule {}

