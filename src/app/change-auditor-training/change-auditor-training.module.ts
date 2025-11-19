import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ChangeAuditorTrainingRoutingModule } from "./change-auditor-training-routing.module";
import { ChangeAuditorTrainingComponent } from "./change-auditor-training.component";

@NgModule({
  declarations: [ChangeAuditorTrainingComponent],
  imports: [CommonModule, SharedModule, ChangeAuditorTrainingRoutingModule],
})
export class ChangeAuditorTrainingModule {}
