import { Component } from "@angular/core";

interface RoomView {
  src: string;
  alt: string;
}

interface FeatureItem {
  icon: string;
  line1: string;
  line2?: string;
}

interface ServiceItem {
  label: string;
  subItems?: string[];
}
@Component({
  selector: "app-salas-inteligentes",
  templateUrl: "./salas-inteligentes.component.html",
  styleUrls: ["./salas-inteligentes.component.scss"],
  standalone: false,
})
export class SalasInteligentesComponent {
  readonly roomViews: RoomView[] = [
    {
      src: "http://static.wixstatic.com/media/4ec771_4c3dfc752d7647c89d7d75990acd4869~mv2_d_5650_2831_s_4_2.jpg/v1/fill/w_1541,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_4c3dfc752d7647c89d7d75990acd4869~mv2_d_5650_2831_s_4_2.jpg",
      alt: "Sala Chirripó configuración 1",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_d1871ad39f0247ae8146b77d518732f5~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_d1871ad39f0247ae8146b77d518732f5~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Chirripó configuración 2",
    },
  ];

  selectedRoomIndex = 0;
  readonly irazuViews: RoomView[] = [
    {
      src: "https://static.wixstatic.com/media/4ec771_515da1b2fd384016bf105a5b4c8626e5~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_515da1b2fd384016bf105a5b4c8626e5~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Irazú vista 1",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_2dd0d2e7d37c453db904a3ecb02ab59a~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_2dd0d2e7d37c453db904a3ecb02ab59a~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Irazú vista 2",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_879b40b4e9ea4695bb69cd7216f3f380~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_879b40b4e9ea4695bb69cd7216f3f380~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Irazú vista 3",
    },
  ];
  selectedIrazuIndex = 0;
  readonly poasViews: RoomView[] = [
    {
      src: "https://static.wixstatic.com/media/4ec771_edd1168eec32413980e674eeac564c1c~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_edd1168eec32413980e674eeac564c1c~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Poás vista 1",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_4e74b45ffe1842299b534c503501f2a2~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_4e74b45ffe1842299b534c503501f2a2~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Poás vista 2",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_74252608d9d3498fa291ebdc5f626dc3~mv2_d_6000_3376_s_4_2.jpg/v1/fill/w_1373,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ec771_74252608d9d3498fa291ebdc5f626dc3~mv2_d_6000_3376_s_4_2.jpg",
      alt: "Sala Poás vista 3",
    },
  ];
  selectedPoasIndex = 0;
  readonly features: FeatureItem[] = [
    {
      icon: "https://static.wixstatic.com/media/4ec771_20d8ee5f6b694ba68ce365d36b77a589~mv2.png/v1/fill/w_108,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png",
      line1: "AC",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_ed034a5232444689b0f22c804eb31de8~mv2.png/v1/fill/w_186,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_ed034a5232444689b0f22c804eb31de8~mv2.png",
      line1: "PANTALLAS",
      line2: "Y VIDEO BEAM",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png/v1/fill/w_144,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png",
      line1: "TV 65\" 4K",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_0e69fcb6083e4ae69b5e4ae597a26502~mv2.png/v1/crop/x_1,y_0,w_164,h_272/fill/w_110,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%203.png",
      line1: "VDI",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png/v1/fill/w_154,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png",
      line1: "INTERNET",
      line2: "DE BANDA ANCHA",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png/v1/fill/w_184,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png",
      line1: "STREAMING",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png/v1/fill/w_202,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png",
      line1: "CÁMARAS DE",
      line2: "VIDEO CONFERENCIA",
    },
  ];
  readonly irazuFeatures: FeatureItem[] = [
    {
      icon: "https://static.wixstatic.com/media/4ec771_20d8ee5f6b694ba68ce365d36b77a589~mv2.png/v1/fill/w_102,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png",
      line1: "AC",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png/v1/fill/w_144,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png",
      line1: "TV 65\" 4K",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png/v1/fill/w_154,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png",
      line1: "INTERNET",
      line2: "DE BANDA ANCHA",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png/v1/fill/w_184,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png",
      line1: "STREAMING",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png/v1/fill/w_202,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png",
      line1: "CÁMARAS DE",
      line2: "VIDEO CONFERENCIA",
    },
  ];

  readonly irazuServices: ServiceItem[] = [
    {
      label: "Alimentación:",
      subItems: ["Desayuno", "Almuerzo", "Coffee break", "Estación de bebidas calientes y frías."],
    },
    {
      label: "Fotografía y video de su evento",
    },
    {
      label: "Servicio de parqueo",
    },
  ];

  readonly poasFeatures: FeatureItem[] = [
    {
      icon: "https://static.wixstatic.com/media/4ec771_20d8ee5f6b694ba68ce365d36b77a589~mv2.png/v1/fill/w_102,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png",
      line1: "AC",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png/v1/fill/w_144,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_2624224580e34981a7f68fbdab97b36f~mv2.png",
      line1: "TV 65\" 4K",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png/v1/fill/w_154,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_8aea45434a9245c9aa7638a85f958b5d~mv2.png",
      line1: "INTERNET",
      line2: "DE BANDA ANCHA",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png/v1/fill/w_184,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_903fd5a49e93470db02ef34e4bb00f53~mv2.png",
      line1: "STREAMING",
    },
    {
      icon: "https://static.wixstatic.com/media/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png/v1/fill/w_202,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_95bbab341b334a5081be9e93f654d403~mv2.png",
      line1: "CÁMARAS DE",
      line2: "VIDEO CONFERENCIA",
    },
  ];

  readonly poasServices: ServiceItem[] = [
    {
      label: "Alimentación:",
      subItems: ["Desayuno", "Almuerzo", "Coffee break", "Estación de bebidas calientes y frías."],
    },
    {
      label: "Fotografía y video de su evento",
    },
    {
      label: "Servicio de parqueo",
    },
  ];

  selectRoom(index: number): void {
    this.selectedRoomIndex = index;
  }

  selectIrazu(index: number): void {
    this.selectedIrazuIndex = index;
  }

  selectPoas(index: number): void {
    this.selectedPoasIndex = index;
  }
}
