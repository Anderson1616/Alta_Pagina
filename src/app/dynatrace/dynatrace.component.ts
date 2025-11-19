import { Component } from "@angular/core";

@Component({
  selector: "app-dynatrace",
  templateUrl: "./dynatrace.component.html",
  styleUrls: ["./dynatrace.component.scss"],
  standalone: false,
})
export class DynatraceComponent {
  scrollToContact(): void {
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
