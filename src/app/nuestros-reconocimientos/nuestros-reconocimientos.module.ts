import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NuestrosReconocimientosRoutingModule } from './nuestros-reconocimientos-routing.module';
import { NuestrosReconocimientosComponent } from './nuestros-reconocimientos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NuestrosReconocimientosComponent],
  imports: [
    CommonModule,
    SharedModule,
    NuestrosReconocimientosRoutingModule,
  ],
})
export class NuestrosReconocimientosModule {}
