import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChangeAuditorTrainingComponent } from "./change-auditor-training.component";

const routes: Routes = [
  {
    path: "",
    component: ChangeAuditorTrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAuditorTrainingRoutingModule {}
