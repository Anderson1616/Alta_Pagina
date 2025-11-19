import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductosComponent } from "./productos.component";
import { ToadComponent } from "./toad/toad.component";

const routes: Routes = [
  {
    path: "",
    component: ProductosComponent,
  },
  {
    path: "toad-by-quest",
    component: ToadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
