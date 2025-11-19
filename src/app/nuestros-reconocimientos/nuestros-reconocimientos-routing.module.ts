import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuestrosReconocimientosComponent } from './nuestros-reconocimientos.component';

const routes: Routes = [
  {
    path: '',
    component: NuestrosReconocimientosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrosReconocimientosRoutingModule {}

