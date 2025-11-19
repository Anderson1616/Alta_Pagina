import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { KaceRoutingModule } from "./kace-routing.module";
import { KaceComponent } from "./kace.component";

@NgModule({
  declarations: [KaceComponent],
  imports: [CommonModule, SharedModule, KaceRoutingModule],
})
export class KaceModule {}

