import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ShareplexRoutingModule } from "./shareplex-routing.module";
import { ShareplexComponent } from "./shareplex.component";

@NgModule({
  declarations: [ShareplexComponent],
  imports: [CommonModule, SharedModule, ShareplexRoutingModule],
})
export class ShareplexModule {}

