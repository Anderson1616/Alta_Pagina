import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

interface Capability {
  title: string;
  description: string;
  icon: string;
}

interface Solution {
  title: string;
  description: string[];
  icon: string;
}

interface FeatureContent {
  intro: string[];
  bullets: string[];
  closing: string;
  ctas: { label: string; link: string }[];
}

interface SpecCard {
  title: string;
  items: string[];
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
  selector: "app-toad",
  templateUrl: "./toad.component.html",
  styleUrls: ["./toad.component.scss"],
  standalone: false,
})
export class ToadComponent {
  readonly tabs = [
    { id: "dba-suite", label: "Toad DBA Suite" },
    { id: "development", label: "Toad Desarrollo" },
    { id: "data-analyst", label: "Toad Data Analyst" },
  ];

  readonly highlights = [
    "Reduce hasta un 40% el tiempo y esfuerzo necesario para administración, DevOps y desarrollo ágil de bases de datos.",
    "Automatiza tareas repetitivas para DBAs: optimización de queries, gestión de parches y despliegue controlado de cambios.",
    "Elimina los cuellos de botella al integrar a DevOps y desarrollo de bases de datos en un mismo flujo colaborativo.",
  ];

  readonly capabilities: Capability[] = [
    {
      title: "Toad Development Suite",
      description:
        "Emplee un enfoque de mejores prácticas para el desarrollo de bases de datos para mejorar la calidad del código, el rendimiento y la facilidad de mantenimiento.\n\nIncluye TOAD Expert, TOAD Data Modeler, (Oracle ED.), Benchmark Factory, Code Tester (Oracle Ed.).",
      icon: "https://static.wixstatic.com/media/4ec771_a58754dce3fd46c3b3f548ce09eedb79~mv2.png/v1/fill/w_226,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_a58754dce3fd46c3b3f548ce09eedb79~mv2.png",
    },
    {
      title: "Toad DBA Suite",
      description:
        "Utilice herramientas completas de productividad que automatizan el mantenimiento, aumentan el rendimiento y reducen los riesgos de tiempo de inactividad.\nIncluye TOAD Expert, TOAD Data Modeler, (Oracle ED.), Spotlight, Benchmark Factory, TOAD for MySQL (Oracle Ed).",
      icon: "https://static.wixstatic.com/media/4ec771_49d13bf819174a1ba774f85645f0ed31~mv2.png/v1/fill/w_240,h_288,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_49d13bf819174a1ba774f85645f0ed31~mv2.png",
    },
    {
      title: "TOAD Data Point",
      description:
        "Construya visualmente consultas SQL entre diversas plataformas con una herramienta que simplifica la preparación de datos para cerrar la brecha entre TI y el negocio.\n\nIncluye TOAD Data Point Base Edition, Cross-plat query, transform/cleanse, data profiling and more.",
      icon: "https://static.wixstatic.com/media/4ec771_9b4d6856494f401a828f6dd89635a65d~mv2.png/v1/fill/w_246,h_246,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_9b4d6856494f401a828f6dd89635a65d~mv2.png",
    },
  ];

  readonly solutions: Solution[] = [
    {
      title: "Información en silos",
      description: [
        "Tamaño de la base de datos",
        "Datos no estructurados",
        "Nube e híbrido",
        "Virtualización",
      ],
      icon: "https://static.wixstatic.com/media/4ec771_f39a072819d64587ae9fb681c4b630ab~mv2.png/v1/fill/w_294,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_f39a072819d64587ae9fb681c4b630ab~mv2.png",
    },
    {
      title: "Problemas de recurso",
      description: [
        "Poco presupuesto",
        "Recursos limitados",
        "Falta de skills especializados",
        "Proyectos complejos",
      ],
      icon: "https://static.wixstatic.com/media/4ec771_8a4f5592d87e454eb6c65e3d02bf2fe5~mv2.png/v1/fill/w_296,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_8a4f5592d87e454eb6c65e3d02bf2fe5~mv2.png",
    },
    {
      title: "Complejidad de datos",
      description: [
        "Múltiples motores de base de datos",
        "Datos no estructurados",
        "Integraciones continuas",
        "Entornos virtualizados",
      ],
      icon: "https://static.wixstatic.com/media/4ec771_a300e407e7d44e6dbfe4c16a335b032a~mv2.png/v1/fill/w_294,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_a300e407e7d44e6dbfe4c16a335b032a~mv2.png",
    },
    {
      title: "Agilidad en TI y negocio",
      description: [
        "Tiempo de datos para tomar decisiones",
        "Agilidad DevOps",
        "Integración con CI/CD",
        "Resiliencia y cumplimiento",
        "Necesidad de normas",
      ],
      icon: "https://static.wixstatic.com/media/4ec771_8fc8ca1fc45741699d191f31ee4c6d9e~mv2.png/v1/fill/w_294,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_8fc8ca1fc45741699d191f31ee4c6d9e~mv2.png",
    },
  ];

  readonly features: FeatureContent = {
    intro: [
      "Consiga el tiempo que necesita para enfocar a sus equipos en iniciativas más estratégicas y haga avanzar a su empresa en la economía actual motivada por los datos.",
      "Adopte un enfoque proactivo con respecto a sus procesos ágiles de desarrollo y administración de sus bases de datos. Confíe en la línea de productos líder del mercado con millones de usuarios y casi 20 años de innovación en el desarrollo de bases de datos.",
      "Las soluciones de TOAD de desarrollo, optimización y consolidación de datos estructurados y no estructurados permiten a sus profesionales:",
    ],
    bullets: [
      "Automatizar los procesos de desarrollo ágil sin cuellos de botella.",
      "Acelerar los tiempos de desarrollo.",
      "Reducir el riesgo de cada pase a producción.",
      "Asegurar la funcionalidad mediante pruebas del código.",
      "Administrar diferentes tipos de base de datos con procedimientos homogéneos y el personal existente.",
      "Validar la calidad de los datos y prevenir problemas de desempeño antes de afectar producción.",
      "Automatizar la identificación y optimización de sus consultas SQL.",
      "Vigilar la automatización de tareas complejas de la base de datos en un ambiente colaborativo, seguro y controlado.",
    ],
    closing:
      "Trabaje de forma más inteligente y cumpla con las exigencias de los entornos de base de datos de hoy en día. TOAD simplifica los flujos de trabajo, potencia la colaboración y garantiza una base sólida para iniciativas de datos asociadas con la nube, la migración o los cambios, sin importar si usted es un analista, un administrador o un desarrollador de base de datos.",
    ctas: [
      { label: "Prueba de concepto", link: "mailto:info@alta-tecnologia.coMásubject=Prueba%20de%20concepto%20TOAD" },
      { label: "Ver recursos", link: "https://www.quest.com/toad/" },
      { label: "Demostración en español", link: "mailto:info@alta-tecnologia.coMásubject=Demo%20TOAD%20en%20español" },
    ],
  };

  readonly technicalSpecs: SpecCard[] = [
    {
      title: "Requisitos del cliente",
      items: [
        "Equipo Intel Pentium",
        "1 GB de RAM y 100 MB de espacio en disco para Toad for Oracle 32 bits",
        "2 GB de RAM y 150 MB de espacio en disco para Toad for Oracle 64 bits",
        "Oracle Client e Instant Client (no se soporta en Windows XP)",
      ],
    },
    {
      title: "Requisitos del servidor",
      items: ["Oracle 8.x a 21c", "Cualquier plataforma de hardware"],
    },
    {
      title: "Servicio de base de datos en la nube",
      items: ["Bases de datos Oracle que se ejecutan en Amazon EC2"],
    },
    {
      title: "Soporte de virtualizacion",
      items: [
        "Aplicación: Citrix XenApp 5.0 y 6.5",
        "Escritorio: Citrix VirtualApps y Virtual Desktops, VMware WorkSpace",
        "Servidor: Oracle VM 3.1, VMware ESX 3.5",
      ],
    },
  ];

  readonly offices: OfficeLocation[];
  activeOfficeId: string;

  constructor(private readonly sanitizer: DomSanitizer) {
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

  setActiveOffice(id: string): void {
    this.activeOfficeId = id;
  }
}







