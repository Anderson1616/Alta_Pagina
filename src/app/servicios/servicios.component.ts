import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

type ServicioIcon =
  | "monitoring"
  | "training"
  | "consulting"
  | "mission"
  | "optimization"
  | "infrastructure";

interface ServicioDetalle {
  icon: ServicioIcon;
  title: string;
  bullets: string[];
}

interface OfficeLocation {
  id: string;
  label: string;
  city: string;
  mapUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  addressLines: string[];
  mapEmbed?: SafeResourceUrl;
}

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
  standalone: false,
})
export class ServiciosComponent {
  readonly servicios: ServicioDetalle[] = [
    {
      icon: "monitoring",
      title: "Servicio de Monitoreo",
      bullets: [
        "Cobertura 24/7/365 o esquemas adaptados a la operación.",
        "Supervisión de infraestructura física, virtual y aplicaciones críticas.",
        "Alertamiento oportuno y escalamiento bajo acuerdos de servicio.",
        "Integración con herramientas AIOps para correlación inteligente de eventos.",
        "Informes con análisis de tendencias y recomendaciones.",
        "Acompañamiento experto en la gestión de incidencias.",
      ],
    },
    {
      icon: "training",
      title: "Capacitación",
      bullets: [
        "Modalidad presencial, virtual e híbrida.",
        "Planes de formación multivendor para equipos de TI y negocio.",
        "Laboratorios prácticos, certificaciones y contenidos a la medida.",
        "Acompañamiento de instructores especialistas en cada tecnología.",
      ],
    },
    {
      icon: "consulting",
      title: "Asesoría de TI",
      bullets: [
        "Maximizamos los recursos tecnológicos y humanos disponibles.",
        "Documentamos procesos y actividades con mejores prácticas.",
        "Generamos informes ejecutivos para la toma de decisiones.",
        "Disponibilidad de expertos certificados en gestión de proyectos.",
        "Alineación estratégica entre TI y objetivos de negocio.",
        "Evaluaciones constantes y recomendaciones de mejora.",
      ],
    },
    {
      icon: "mission",
      title: "Sistemas de Misión Crítica",
      bullets: [
        "Alta disponibilidad de los sistemas esenciales del negocio.",
        "Disponibilidad continua con planes de recuperación ante desastres.",
        "Monitoreo avanzado y alertamiento proactivo de incidentes.",
        "Protección de datos sensibles con auditoría y cumplimiento normativo.",
        "Compromiso con la calidad y estabilidad del servicio.",
        "Evaluaciones periódicas para la mejora continua.",
      ],
    },
    {
      icon: "optimization",
      title: "Optimización de la Plataforma Operativa",
      bullets: [
        "Sistemas con mayor estabilidad proyectados al crecimiento del negocio.",
        "Disminución de tiempos de respuesta al usuario.",
        "Mejoras en la productividad del departamento de TI.",
        "Protección integral de la operación.",
        "Visibilidad en tiempo real de la salud de la infraestructura.",
        "Control y cumplimiento de procesos de operación.",
        "Análisis proactivo de la experiencia de servicio.",
      ],
    },
    {
      icon: "infrastructure",
      title: "Administración y Monitoreo de Infraestructura",
      bullets: [
        "Mejora del nivel de disponibilidad en los servicios.",
        "Simplificación en la administración del hardware.",
        "Reducción de los tiempos de respuesta para la optimización del rendimiento.",
        "Control y gobierno en los accesos a la plataforma y sistemas de información.",
        "Alertas proactivas ante posibles incidencias.",
        "Facilidad en las auditorías de los usuarios.",
        "Mesas de ayuda con especialistas certificados.",
      ],
    },
  ];

  readonly offices: OfficeLocation[];
  activeOfficeId: string;

  constructor(
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
  ) {
    const officeDefinitions: OfficeLocation[] = [
      {
        id: "cr",
        label: "Costa Rica",
        city: "San José, Costa Rica",
        mapUrl:
          "https://www.google.com/maps?q=Alta%20Tecnolog%C3%ADa%20S.A.,%20Centro%20Comercial%20Plaza%20Uruka,%20La%20Uruca,%20San%20Jos%C3%A9,%20Costa%20Rica&output=embed",
        phoneDisplay: "+506 2291-7440",
        phoneHref: "+50622917440",
        addressLines: ["La Uruca, Centro Comercial Plaza Uruka"],
      },
      {
        id: "pa",
        label: "Panamá",
        city: "Ciudad de Panamá, Panamá",
        mapUrl:
          "https://www.google.com/maps?q=Sertracen,%20Avenida%20Jos%C3%A9%20Agust%C3%ADn%20Arango,%20Parque%20Lefebre,%20Ciudad%20de%20Panam%C3%A1,%20Panam%C3%A1&output=embed",
        phoneDisplay: "+507 836-6050",
        phoneHref: "+5078366050",
        addressLines: [
          "Avenida José Agustín Arango, Edificio Sertracen",
          "Nivel 3, Corregimiento Parque Lefebre",
        ],
      },
      {
        id: "co",
        label: "Colombia",
        city: "Bogotá, Colombia",
        mapUrl:
          "https://www.google.com/maps?q=Calle%20125%20%2318B-09,%20Bogot%C3%A1,%20Colombia&output=embed",
        phoneDisplay: "+57 601-489-6860",
        phoneHref: "+576014896860",
        addressLines: ["Calle 125 # 18B-09, Torre Empresarial", "Oficina 502, Usaquén, Bogotá"],
      },
    ];

    this.offices = officeDefinitions.map((office) => ({
      ...office,
      mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(office.mapUrl),
    }));
    this.activeOfficeId = this.offices[0]?.id ?? "";
  }

  goHome(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.router.navigate(["/"]);
  }

  setActiveOffice(id: string): void {
    this.activeOfficeId = id;
  }

  scrollToLocalContact(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
