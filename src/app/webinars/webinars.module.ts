import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { WebinarsRoutingModule } from "./webinars-routing.module";
import { WebinarsComponent } from "./webinars.component";

@NgModule({
  declarations: [WebinarsComponent],
  imports: [CommonModule, SharedModule, WebinarsRoutingModule],
})
export class WebinarsModule {}
