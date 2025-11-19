import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NuestraEmpresaRoutingModule } from './nuestra-empresa-routing.module';
import { NuestraEmpresaComponent } from './nuestra-empresa.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NuestraEmpresaComponent],
  imports: [CommonModule, SharedModule, NuestraEmpresaRoutingModule],
})
export class NuestraEmpresaModule {}
