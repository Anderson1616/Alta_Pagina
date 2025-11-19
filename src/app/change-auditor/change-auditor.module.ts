import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ChangeAuditorRoutingModule } from "./change-auditor-routing.module";
import { ChangeAuditorComponent } from "./change-auditor.component";

@NgModule({
  declarations: [ChangeAuditorComponent],
  imports: [CommonModule, SharedModule, ChangeAuditorRoutingModule],
})
export class ChangeAuditorModule {}
