import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SolarwindsRoutingModule } from "./solarwinds-routing.module";
import { SolarwindsComponent } from "./solarwinds.component";

@NgModule({
  declarations: [SolarwindsComponent],
  imports: [CommonModule, SharedModule, SolarwindsRoutingModule],
})
export class SolarwindsModule {}
