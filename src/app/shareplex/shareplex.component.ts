import { Component } from "@angular/core";

@Component({
  selector: "app-shareplex",
  templateUrl: "./shareplex.component.html",
  styleUrls: ["./shareplex.component.scss"],
  standalone: false,
})
export class ShareplexComponent {
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

  readonly benefits = [
    {
      title: "Bajo costo",
      image:
        "http://static.wixstatic.com/media/4ec771_7abcf61f1bc8406c98ffb7e70837a78f~mv2.png/v1/fill/w_89,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bajo%20Costo.png",
      description:
        "Evite actualizaciones costosas, complementos y paquetes de administracion con un conjunto de herramientas de bajo costo e integral.",
    },
    {
      title: "Soporte galardonado",
      image:
        "https://static.wixstatic.com/media/4ec771_95e9322b8598419185b1b918fcd2b680~mv2.png/v1/fill/w_92,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soporte%20Galardonado.png",
      description:
        "Aproveche soporte incomparable disponible 24/7/365, con experiencia premiada en la industria para reducir riesgos.",
    },
    {
      title: "Precision de datos",
      image:
        "https://static.wixstatic.com/media/4ec771_0b4830ad30e64ec5a49332ef9db9301c~mv2.png/v1/fill/w_82,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Precisi%C3%B3n_de_datos.png",
      description:
        "Evite perdida de datos con monitoreo, resolucion de conflictos, comparacion y sincronizacion integradas. Replica cambios de inmediato y mejora el rendimiento.",
    },
    {
      title: "Simplicidad",
      image:
        "https://static.wixstatic.com/media/4ec771_d7b6bc90a23344d082fd762ec4e59ca0~mv2.png/v1/fill/w_124,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Simplicidad.png",
      description:
        "Instale y utilice SharePlex en minutos. Replica datos casi en tiempo real para escalabilidad y alta disponibilidad con creacion de destinos automatica.",
    },
    {
      title: "Soporte para el analisis",
      image:
        "https://static.wixstatic.com/media/4ec771_fc3717b0144d4432bceb0cda6321062b~mv2.png/v1/fill/w_110,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soporte-Analisis.png",
      description:
        "Descargue datos casi en tiempo real para BI y analytics, permitiendo acceso a datos sin afectar el rendimiento de la aplicacion.",
    },
  ];

  readonly resources = [
    {
      title: "SharePlex",
      image:
        "https://static.wixstatic.com/media/4ec771_52bfffff69d84966b9b6d43f1f0e6b05~mv2.png/v1/fill/w_158,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-08-01%20at%2011_19_38%20AM_pn.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_830f43e074fd452c9a14525e52e9b1da.pdf",
    },
    {
      title: "EPX: Una empresa del sector financiero protege sus bases de datos con la replicacion",
      image:
        "https://static.wixstatic.com/media/4ec771_d6e3fe49a75744afa874c6543513e48e~mv2.png/v1/fill/w_157,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-08-01%20at%2011_20_28%20AM_pn.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_684e2bd8552a4ec4a7b16f39187f8abc.pdf",
    },
    {
      title: "Simplifique las migraciones y actualizaciones",
      image:
        "https://static.wixstatic.com/media/4ec771_a60bae708ade4f13975dfa5b13dc294d~mv2.png/v1/fill/w_158,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-08-01%20at%2011_19_53%20AM_pn.png",
      href: "https://www.quest.com/resources/#f:language=[English]",
    },
    {
      title: "Migrar sus Bases de Datos Oracle al Nube- Parte 1",
      image:
        "https://static.wixstatic.com/media/4ec771_536ca5b358114816a784fed984a7e64d~mv2.png/v1/fill/w_160,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-08-01%20at%2011_20_03%20AM_pn.png",
      href: "https://www.quest.com/resources/",
    },
    {
      title: "DataSheet SharePlex",
      image:
        "https://static.wixstatic.com/media/4ec771_72f634c1edb243ddaf33aefc3405a25f~mv2.png/v1/fill/w_163,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PDF%20SharePlex.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_552253b7ea07442d86fb5ab15be42a6c.pdf",
    },
    {
      title: "Empresa de tecnologia financiera logra migrar 12 Bases de Datos Oracle en solo una hora",
      image:
        "https://static.wixstatic.com/media/4ec771_bec008ad46f74ca9945dea43fecda917~mv2.png/v1/fill/w_154,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-08-01%20at%2011_19_46%20AM_pn.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_793aa9712d2f4de4a26ba3adaebfa861.pdf",
    },
  ];
}
