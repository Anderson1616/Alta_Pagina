import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { AcademyRoutingModule } from "./academy-routing.module";
import { AcademyComponent } from "./academy.component";

@NgModule({
  declarations: [AcademyComponent],
  imports: [CommonModule, SharedModule, AcademyRoutingModule],
})
export class AcademyModule {}

