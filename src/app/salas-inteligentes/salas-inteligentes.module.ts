import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SalasInteligentesRoutingModule } from "./salas-inteligentes-routing.module";
import { SalasInteligentesComponent } from "./salas-inteligentes.component";

@NgModule({
  declarations: [SalasInteligentesComponent],
  imports: [CommonModule, SharedModule, SalasInteligentesRoutingModule],
})
export class SalasInteligentesModule {}

