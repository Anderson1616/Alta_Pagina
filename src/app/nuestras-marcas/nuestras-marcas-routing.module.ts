import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuestrasMarcasComponent } from './nuestras-marcas.component';

const routes: Routes = [
  {
    path: '',
    component: NuestrasMarcasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrasMarcasRoutingModule {}
