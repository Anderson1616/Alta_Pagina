import { Component } from "@angular/core";

@Component({
  selector: "app-foglight-evolve",
  templateUrl: "./foglight-evolve.component.html",
  styleUrls: ["./foglight-evolve.component.scss"],
  standalone: false,
})
export class FoglightEvolveComponent {
  scrollToContact(): void {
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
