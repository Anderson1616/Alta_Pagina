import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SonicwallRoutingModule } from "./sonicwall-routing.module";
import { SonicwallComponent } from "./sonicwall.component";

@NgModule({
  declarations: [SonicwallComponent],
  imports: [CommonModule, SharedModule, SonicwallRoutingModule],
})
export class SonicwallModule {}

