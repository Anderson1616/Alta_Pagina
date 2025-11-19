import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { OneIdentityRoutingModule } from "./one-identity-routing.module";
import { OneIdentityComponent } from "./one-identity.component";

@NgModule({
  declarations: [OneIdentityComponent],
  imports: [CommonModule, SharedModule, OneIdentityRoutingModule],
})
export class OneIdentityModule {}

