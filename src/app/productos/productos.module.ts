import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProductosRoutingModule } from "./productos-routing.module";
import { ProductosComponent } from "./productos.component";
import { ToadComponent } from "./toad/toad.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductosComponent, ToadComponent],
  imports: [CommonModule, FormsModule, SharedModule, ProductosRoutingModule],
})
export class ProductosModule {}
