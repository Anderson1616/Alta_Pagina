import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './quienes-somos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [CommonModule, SharedModule, QuienesSomosRoutingModule],
})
export class QuienesSomosModule {}
