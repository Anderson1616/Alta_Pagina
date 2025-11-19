import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantallaInicioRoutingModule } from './pantalla-inicio-routing.module';
import { PantallaInicioComponent } from './pantalla-inicio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PantallaInicioComponent],
  imports: [CommonModule, RouterModule, SharedModule, PantallaInicioRoutingModule],
})
export class PantallaInicioModule {}
