import { Component } from "@angular/core";

@Component({
  selector: "app-sonicwall",
  templateUrl: "./sonicwall.component.html",
  styleUrls: ["./sonicwall.component.scss"],
  standalone: false,
})
export class SonicwallComponent {
  readonly screenshots: string[] = [
    "https://static.wixstatic.com/media/4ec771_09d20d3ab49c499280ce484dd83df228~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_09d20d3ab49c499280ce484dd83df228~mv2.png",
    "https://static.wixstatic.com/media/4ec771_91749985f9a24c4f9eed0b1266a103a1~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_91749985f9a24c4f9eed0b1266a103a1~mv2.png",
    "https://static.wixstatic.com/media/4ec771_976a34d931f2478eb6823ae6d0427819~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_976a34d931f2478eb6823ae6d0427819~mv2.png",
    "https://static.wixstatic.com/media/4ec771_da575aba717a40ec8b394a8c59a68501~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_da575aba717a40ec8b394a8c59a68501~mv2.png",
    "https://static.wixstatic.com/media/4ec771_c391953f687d48f49426cf7d0d51b843~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_c391953f687d48f49426cf7d0d51b843~mv2.png",
    "https://static.wixstatic.com/media/4ec771_c3c8b3a77f7844979d2d4aa66deae03f~mv2.png/v1/fill/w_690,h_577,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ec771_c3c8b3a77f7844979d2d4aa66deae03f~mv2.png",
  ];

  currentScreenshot = 0;

  selectScreenshot(index: number): void {
    this.currentScreenshot = index;
  }

  scrollToContact(): void {
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
