import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NuestrasMarcasRoutingModule } from './nuestras-marcas-routing.module';
import { NuestrasMarcasComponent } from './nuestras-marcas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NuestrasMarcasComponent],
  imports: [CommonModule, SharedModule, NuestrasMarcasRoutingModule],
})
export class NuestrasMarcasModule {}
