import { Component } from "@angular/core";

interface OrionTile {
  title: string;
  image: string;
}

@Component({
  selector: "app-solarwinds",
  templateUrl: "./solarwinds.component.html",
  styleUrls: ["./solarwinds.component.scss"],
  standalone: false,
})
export class SolarwindsComponent {
  readonly orionTiles: OrionTile[] = [
    { title: "Network Performance Monitor", image: "https://static.wixstatic.com/media/4ec771_caeba14ab05842739ff8a9f2ef652a62~mv2.png/v1/crop/x_0,y_18,w_417,h_384/fill/w_94,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png" },
    { title: "Network Traffic Analyzer", image: "https://static.wixstatic.com/media/4ec771_03b3c72476694ecfa901dd82530e0486~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png" },
    { title: "Network Configuration Manager", image: "https://static.wixstatic.com/media/4ec771_6b08e3fef8d2414f8155ad5a59678f66~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png" },
    { title: "Virtualization Manager", image: "https://static.wixstatic.com/media/4ec771_cfdaeb790004463b8d8d5b49c6bf2609~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png" },
    { title: "Server & Aplication Manager", image: "https://static.wixstatic.com/media/4ec771_6223292572d34741bc4fbabb43cf6385~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png" },
    { title: "Storage Resource Monitor", image: "https://static.wixstatic.com/media/4ec771_96a1a517415a4e91affe47e40a7ec2d9~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png" },
    { title: "Database PerformanceAnalyzer", image: "https://static.wixstatic.com/media/4ec771_10cd21223169457daa2ebc6d8786251e~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png" },
    { title: "LOG Manager For Orion", image: "https://static.wixstatic.com/media/4ec771_463fa2f3d6cd48c59fd721d8c24c90ab~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png" },
    { title: "Server Configuration Monitor", image: "https://static.wixstatic.com/media/4ec771_9dbfbdf866bf4a2fb3485e262f481e4a~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.png" },
  ];
}
