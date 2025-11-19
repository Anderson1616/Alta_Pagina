import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [CommonModule, RouterModule, SharedModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
