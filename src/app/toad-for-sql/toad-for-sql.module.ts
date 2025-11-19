import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ToadForSqlRoutingModule } from "./toad-for-sql-routing.module";
import { ToadForSqlComponent } from "./toad-for-sql.component";

@NgModule({
  declarations: [ToadForSqlComponent],
  imports: [CommonModule, SharedModule, ToadForSqlRoutingModule],
})
export class ToadForSqlModule {}
