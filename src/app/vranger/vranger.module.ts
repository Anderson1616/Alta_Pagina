import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { VrangerRoutingModule } from "./vranger-routing.module";
import { VrangerComponent } from "./vranger.component";

@NgModule({
  declarations: [VrangerComponent],
  imports: [CommonModule, SharedModule, VrangerRoutingModule],
})
export class VrangerModule {}

