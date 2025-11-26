import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [CommonModule, SharedModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
