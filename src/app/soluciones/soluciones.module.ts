import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SolucionesRoutingModule } from "./soluciones-routing.module";
import { SolucionesComponent } from "./soluciones.component";

@NgModule({
  declarations: [SolucionesComponent],
  imports: [CommonModule, SharedModule, SolucionesRoutingModule],
})
export class SolucionesModule {}
