import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuestraEmpresaComponent } from './nuestra-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: NuestraEmpresaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestraEmpresaRoutingModule {}

