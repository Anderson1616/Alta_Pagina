import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [HeaderComponent, ContactComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ContactComponent],
})
export class SharedModule {}
