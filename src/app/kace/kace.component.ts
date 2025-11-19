import { Component } from "@angular/core";
import { KACE_RESOURCES, KaceResource } from "./resources";

@Component({
  selector: "app-kace",
  templateUrl: "./kace.component.html",
  styleUrls: ["./kace.component.scss"],
  standalone: false,
})
export class KaceComponent {
  readonly resources: KaceResource[] = KACE_RESOURCES;

  scrollToContact(): void {
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
