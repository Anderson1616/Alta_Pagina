import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelepresenciaStreamingComponent } from './telepresencia-streaming.component';

const routes: Routes = [
  {
    path: '',
    component: TelepresenciaStreamingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelepresenciaStreamingRoutingModule {}
