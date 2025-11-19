import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { FoglightEvolveRoutingModule } from "./foglight-evolve-routing.module";
import { FoglightEvolveComponent } from "./foglight-evolve.component";

@NgModule({
  declarations: [FoglightEvolveComponent],
  imports: [CommonModule, SharedModule, FoglightEvolveRoutingModule],
})
export class FoglightEvolveModule {}

