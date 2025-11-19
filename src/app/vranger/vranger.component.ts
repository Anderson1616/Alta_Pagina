import { Component } from "@angular/core";
import { VRANGER_RESOURCES, VrangerResource } from "./resources";

@Component({
  selector: "app-vranger",
  templateUrl: "./vranger.component.html",
  styleUrls: ["./vranger.component.scss"],
  standalone: false,
})
export class VrangerComponent {
  readonly resources: VrangerResource[] = VRANGER_RESOURCES;
  readonly screenshots: string[] = [
    "https://static.wixstatic.com/media/4ec771_0dddb4bab3154fde890aafb7963e8e08~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_0dddb4bab3154fde890aafb7963e8e08~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_6ec58f0ab2574d23962c1f64839e775f~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_6ec58f0ab2574d23962c1f64839e775f~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_9a8685e31291457683f4d443a2da04a1~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_9a8685e31291457683f4d443a2da04a1~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_c855405801654cad87805dd996c8f429~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_c855405801654cad87805dd996c8f429~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_7749abef55504772a9ad87f1e96c617a~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_7749abef55504772a9ad87f1e96c617a~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_fd0fdce115844939bdca3222dec53d41~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_fd0fdce115844939bdca3222dec53d41~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_3db4a5c2c5134c19a58b523548cc7579~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_3db4a5c2c5134c19a58b523548cc7579~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_75b007a3d7674569a2554484a52a0a93~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_75b007a3d7674569a2554484a52a0a93~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_68f2865a06f74c3ea59def069074c4c2~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_68f2865a06f74c3ea59def069074c4c2~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_ba5b129b807f4587ab94955399e1e624~mv2.jpg/v1/fill/w_598,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_ba5b129b807f4587ab94955399e1e624~mv2.jpg",
    "https://static.wixstatic.com/media/4ec771_0448d392c3514f6cbeeca2b00f9ca428~mv2.jpg/v1/fill/w_445,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ec771_0448d392c3514f6cbeeca2b00f9ca428~mv2.jpg",
  ];

  currentScreenshot = 0;

  nextScreenshot(): void {
    this.currentScreenshot = (this.currentScreenshot + 1) % this.screenshots.length;
  }

  prevScreenshot(): void {
    this.currentScreenshot =
      (this.currentScreenshot - 1 + this.screenshots.length) % this.screenshots.length;
  }
}
