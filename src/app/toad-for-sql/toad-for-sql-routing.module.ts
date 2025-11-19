import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ToadForSqlComponent } from "./toad-for-sql.component";

const routes: Routes = [
  {
    path: "",
    component: ToadForSqlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToadForSqlRoutingModule {}
