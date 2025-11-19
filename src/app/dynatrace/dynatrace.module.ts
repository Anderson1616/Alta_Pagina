import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DynatraceRoutingModule } from "./dynatrace-routing.module";
import { DynatraceComponent } from "./dynatrace.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [DynatraceComponent],
  imports: [CommonModule, SharedModule, DynatraceRoutingModule],
})
export class DynatraceModule {}

