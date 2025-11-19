import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChangeAuditorComponent } from "./change-auditor.component";

const routes: Routes = [
  {
    path: "",
    component: ChangeAuditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAuditorRoutingModule {}
