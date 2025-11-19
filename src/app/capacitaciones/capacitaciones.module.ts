import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CapacitacionesRoutingModule } from "./capacitaciones-routing.module";
import { CapacitacionesComponent } from "./capacitaciones.component";
import { ToadForOracleComponent } from "./toad-for-oracle/toad-for-oracle.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CapacitacionesComponent, ToadForOracleComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, CapacitacionesRoutingModule],
})
export class CapacitacionesModule {}
