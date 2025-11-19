import { Component } from "@angular/core";

interface EquipmentItem {
  title: string;
  image: string;
  details: string[];
}

interface GalleryItem {
  src: string;
  alt: string;
}

@Component({
  selector: "app-estudio-pa",
  templateUrl: "./estudio-pa.component.html",
  styleUrls: ["./estudio-pa.component.scss"],
  standalone: false,
})
export class EstudioPaComponent {
  readonly equipmentItems: EquipmentItem[] = [
    {
      title: "Sony Alpha 7",
      image:
        "https://static.wixstatic.com/media/4ec771_63ac3b00ecdf4832a2cc190a087dc139~mv2.jpg/v1/fill/w_595,h_417,al_c,lg_1,q_80,enc_avif,quality_auto/Sony-Alpha-7R-II.jpg",
      details: [
        "Sensor CMOS de cuadro completo de 24.3 MP",
        "ISO 100-25600 (AUTO ISO 100-6400)",
        "Video HD 1080 / 60p / 24p (AVCHD / MP4)",
        "LCD inclinable de 3\" con 921,600 puntos",
        "Visor electrónico color XGA de 1/2\" con 2.4M puntos",
        "Disparo RAW, RAW+JPEG",
      ],
    },
    {
      title: "AKG C2000B Side-Address Mic",
      image:
        "https://static.wixstatic.com/media/4ec771_d795ace211e0423688c6d14fc5ea3502~mv2.jpg/v1/fill/w_444,h_628,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/C2000B.jpg",
      details: [
        "Incluye montura shock H85",
        "Grabación multicanal con muy bajo ruido propio",
        "Patrón polar cardioide para múltiples aplicaciones",
        "Respuesta de frecuencia excepcionalmente suave",
      ],
    },
    {
      title: "Tascam DR-05 Portable Recorder",
      image:
        "https://static.wixstatic.com/media/4ec771_c0235271fb314c82a6954de3cc6191b0~mv2.jpg/v1/fill/w_444,h_628,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/tascam-dr-05-v2.jpg",
      details: [
        "Grabadora portátil compatible con tarjetas SD o microSD",
        "Formatos WAV / MP3 con controles fáciles",
      ],
    },
    {
      title: "Neewer NL 660 * 4",
      image:
        "https://static.wixstatic.com/media/4ec771_e9b424e0b1ed4659a644ce8c735e50cd~mv2_d_1500_1500_s_2.jpg/v1/fill/w_744,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/neewer_90089829_bi_color_660_led_video_1.jpg",
      details: [
        "Panel bicolor 3200-5600K con 660 LED y 3360 lúmenes",
        "Consumo de 40 W con CRI 96+ para color preciso",
        "Placa para baterías opcionales y barndoors integrados",
        "Dimensiones 27.6 x 12.0 x 7.2\"",
      ],
    },
    {
      title: "Neewer LED Dimmable 3200-5600K * 12",
      image:
        "https://static.wixstatic.com/media/4ec771_ae031c0ff9794c308d4de14372ab2f8b~mv2.jpg/v1/crop/x_80,y_0,w_480,h_480/fill/w_576,h_576,al_c,lg_1,q_80,enc_avif,quality_auto/A94K_130984450371919007gFM2W9TiJn.jpg",
      details: [
        "Filtro blanco suaviza la luz y mejora tonos de piel",
        "Perilla para ajustar temperatura 3200K-5600K",
      ],
    },
    {
      title: "IKAN Tablet Teleprompter",
      image:
        "https://static.wixstatic.com/media/4ec771_109a69085cbe4764b0f7baecc25fd9dd~mv2.jpg/v1/fill/w_630,h_630,al_c,q_85,enc_avif,quality_auto/IKAN-PT_-ELITE_U_RC-Elite-Universal-Tabl.jpg",
      details: [
        "Soporte universal para iPad y tabletas similares",
        "Cristal Teleprompter 70/30 de alta calidad",
      ],
    },
    {
      title: "Luz Softbox 700W",
      image:
        "https://static.wixstatic.com/media/4ec771_d6ed749504a24ab2a9e0620c90a82935~mv2.jpg/v1/crop/x_0,y_0,w_425,h_377/fill/w_510,h_452,al_c,lg_1,q_80,enc_avif,quality_auto/61pGsoiri2L__SX425_.jpg",
      details: [
        "Caja suave con portalámparas y soporte de 86\"",
        "Bombilla fotográfica 85W 6500K 120V",
        "Reflector 24\" x 24\" para iluminación uniforme",
      ],
    },
    {
      title: "Boom Stand x3",
      image:
        "https://static.wixstatic.com/media/4ec771_b3c5e8cc13fc47b190c3fc053775e84e~mv2.jpg/v1/crop/x_0,y_34,w_600,h_532/fill/w_719,h_638,al_c,lg_1,q_85,enc_avif,quality_auto/meking-heavy-duty-boom-stand-with-slidin.jpg",
      details: [
        "Altura 1450-3450 mm, peso 6.7 kg",
        "Capacidad de carga 10 kg",
        "Brazo oblicuo de 1240 mm y base de 1080 mm",
      ],
    },
    {
      title: "Micrófono Rode VideoMic GO",
      image:
        "https://static.wixstatic.com/media/4ec771_239da808707f431cae461d62d196fc8e~mv2_d_2500_2500_s_4_2.jpg/v1/crop/x_0,y_141,w_2500,h_2218/fill/w_744,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rode_videomic_go_videomic_go_on_camera_s.jpg",
      details: [
        "Peso de 2.6 oz con suspensión Rycote Lyre",
        "Soporte de zapata con rosca 3/8\"",
        "Salida mini-jack 3.5 mm y windshield incluido",
      ],
    },
    {
      title: "Tascam DR-60DmkII",
      image:
        "https://static.wixstatic.com/media/4ec771_bd38575c273a4394bd3115fc51542073~mv2_d_2500_2500_s_4_2.jpg/v1/crop/x_0,y_141,w_2500,h_2218/fill/w_744,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tascam_dr_60mkii_portable_recorder_for_d.jpg",
      details: [
        "Grabadora portátil de 4 canales, 24 bits / 96 kHz",
        "2 entradas combo XLR/TRS y 1 estéreo 1/8\"",
        "Alimentación phantom y plug-in, mezcla integrada",
        "Montaje para cámara y grabación en SD/SDHC",
      ],
    },
    {
      title: "Fondos Chromakey",
      image:
        "https://static.wixstatic.com/media/4ec771_29661ca2e89842b5b5d5171b975a6992~mv2.jpg/v1/fill/w_744,h_930,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/backdrop-support-system-kit-10-39-x-10-3.jpg",
      details: [
        "Fondos verde (chroma) y negro",
        "Medidas 10 pies x 10 pies",
      ],
    },
    {
      title: "Neewer NW759 Field Monitor",
      image:
        "https://static.wixstatic.com/media/4ec771_ffe065e889dd4c0d99e532d3fbc6c6d3~mv2.jpg/v1/fill/w_510,h_510,al_c,lg_1,q_80,enc_avif,quality_auto/81B0TKoR4fL__SX425_.jpg",
      details: [
        "Monitor IPS 7\" 1280x800 con retroiluminación LED",
        "Brillo 400 cd/m² y contraste 800:1",
      ],
    },
    {
      title: "Neewer 43\" Light Reflector",
      image:
        "https://static.wixstatic.com/media/4ec771_7117181295e24128b811c0504c52e9ea~mv2.jpg/v1/fill/w_744,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/71ZGch8sh4L__SL1001_.jpg",
      details: [
        "Reflector plegable de 43\"/110 cm",
        "Superficies translúcida, plateada, dorada, blanca y negra",
        "Compatible con soportes estándar",
      ],
    },
    {
      title: "Tascam DP-008EX",
      image:
        "https://static.wixstatic.com/media/4ec771_17d6423b89b945e2adf11076f50e87d0~mv2.jpg/v1/fill/w_800,h_534,al_c,q_85,enc_avif,quality_auto/10205210_800.jpg",
      details: [
        "Grabadora portátil de 8 canales en SD/SDHC",
        "Grabación estéreo y mono a 16 bits / 44.1 kHz",
        "Controles de nivel, efectos y metrónomo integrados",
        "2 entradas XLR y 2 de línea 1/4\" con USB",
      ],
    },
    {
      title: "Micrófono de Solapa Shure",
      image:
        "https://static.wixstatic.com/media/4ec771_f24e01e1acbe4ddebe3cc4983cc73110~mv2_d_2500_2500_s_4_2.jpg/v1/fill/w_744,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shure_blx14_cvl_j10_blx14_lavalier_syste.jpg",
      details: [
        "Sistema inalámbrico BLX14/CVL banda J10",
        "Incluye receptor BLX4, transmisor BLX1 y micrófono CVL",
      ],
    },
    {
      title: "Ronin-S DJI",
      image:
        "https://static.wixstatic.com/media/4ec771_577c55c511b7449abc5c93439f477ae5~mv2.png/v1/fill/w_540,h_868,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/RONIN-S%20DJI.png",
      details: [
        "Estabilizador compatible con cámaras DSLR y mirrorless",
        "Diseño ergonómico para movimientos fluidos",
        "Permite capturar tomas suaves al cambiar de ángulos",
      ],
    },
    {
      title: "Slider GVM",
      image:
        "https://static.wixstatic.com/media/4ec771_0dbea5a7493c44cd802e35f7d9b836e3~mv2.jpeg/v1/fill/w_786,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SLIDER%20-%20GVM.jpeg",
      details: [
        "Configura puntos de inicio y parada para tomas automáticas",
        "Motores silenciosos ideales para entrevistas",
        "Puede operarse de forma manual",
      ],
    },
  ];

  readonly galleryItems: GalleryItem[] = [
    {
      src: "https://static.wixstatic.com/media/4ec771_964a1fd501e84aabb1c29ffbeaa07bc9~mv2.jpg/v1/fit/w_1079,h_925,q_90,enc_avif,quality_auto/4ec771_964a1fd501e84aabb1c29ffbeaa07bc9~mv2.jpg",
      alt: "Estudio con pantalla verde",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_f186603abd1d481daea57c9516a81c35~mv2_d_4032_3024_s_4_2.jpg/v1/fit/w_1790,h_1286,q_90,enc_avif,quality_auto/4ec771_f186603abd1d481daea57c9516a81c35~mv2_d_4032_3024_s_4_2.jpg",
      alt: "Detalle de cámara",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_9d50c32c8edf4a7c842da59c702642c9~mv2_d_4032_3024_s_4_2.jpg/v1/fit/w_1790,h_1286,q_90,enc_avif,quality_auto/4ec771_9d50c32c8edf4a7c842da59c702642c9~mv2_d_4032_3024_s_4_2.jpg",
      alt: "Producción con luces rojas",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_2b5b6562a832448885bd3bf5fe9ec876~mv2_d_2160_3840_s_2.jpg/v1/fit/w_1790,h_1286,q_90,enc_avif,quality_auto/4ec771_2b5b6562a832448885bd3bf5fe9ec876~mv2_d_2160_3840_s_2.jpg",
      alt: "Operador de cámara con iluminación cálida",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_ce2a9c31080441dfbfcc3ea4cf150fa1~mv2.jpg/v1/fit/w_1307,h_938,q_90,enc_avif,quality_auto/4ec771_ce2a9c31080441dfbfcc3ea4cf150fa1~mv2.jpg",
      alt: "Set morado con elenco",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_2342db46549f4b7e8a0d58a9165e8f41~mv2.jpg/v1/fit/w_1307,h_938,q_90,enc_avif,quality_auto/4ec771_2342db46549f4b7e8a0d58a9165e8f41~mv2.jpg",
      alt: "Escenario violeta",
    },
    {
      src: "https://static.wixstatic.com/media/4ec771_c61bdab06a9a4f29ad7a413e6875e32b~mv2_d_1440_2560_s_2.jpg/v1/fit/w_1790,h_1286,q_90,enc_avif,quality_auto/4ec771_c61bdab06a9a4f29ad7a413e6875e32b~mv2_d_1440_2560_s_2.jpg",
      alt: "Equipo en set con fondo rojo",
    },
  ];

  currentIndex = 0;
  selectedGalleryIndex = 0;

  get currentEquipment(): EquipmentItem {
    return this.equipmentItems[this.currentIndex];
  }

  goToPrevious(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.equipmentItems.length) %
      this.equipmentItems.length;
  }

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.equipmentItems.length;
  }

  goToIndex(index: number): void {
    if (index < 0 || index >= this.equipmentItems.length) {
      return;
    }
    this.currentIndex = index;
  }

  trackDetail(index: number): number {
    return index;
  }

  selectGallery(index: number): void {
    this.selectedGalleryIndex = index;
  }
}
