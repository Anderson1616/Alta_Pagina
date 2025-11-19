import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AltaNewsRoutingModule } from "./alta-news-routing.module";
import { AltaNewsComponent } from "./alta-news.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AltaNewsComponent],
  imports: [CommonModule, SharedModule, AltaNewsRoutingModule],
})
export class AltaNewsModule {}

