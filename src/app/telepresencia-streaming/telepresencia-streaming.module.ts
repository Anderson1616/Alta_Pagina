import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TelepresenciaStreamingRoutingModule } from './telepresencia-streaming-routing.module';
import { TelepresenciaStreamingComponent } from './telepresencia-streaming.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TelepresenciaStreamingComponent],
  imports: [CommonModule, SharedModule, TelepresenciaStreamingRoutingModule],
})
export class TelepresenciaStreamingModule {}
