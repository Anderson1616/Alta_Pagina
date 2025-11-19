import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { EstudioPaRoutingModule } from "./estudio-pa-routing.module";
import { EstudioPaComponent } from "./estudio-pa.component";

@NgModule({
  declarations: [EstudioPaComponent],
  imports: [CommonModule, SharedModule, EstudioPaRoutingModule],
})
export class EstudioPaModule {}

