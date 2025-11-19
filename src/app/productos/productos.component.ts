import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

interface ProductCard {
  logo: string;
  name: string;
  description: string;
  category: string;
  link?: string;
  routerLink?: string | any[];
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
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.scss"],
  standalone: false,
})
export class ProductosComponent {
  searchTerm = "";

  readonly productos: ProductCard[] = [
    {
      logo: "https://images.icon-icons.com/2699/PNG/512/dynatrace_logo_icon_168227.png",
      name: "Dynatrace",
      description:
        "Observabilidad full-stack con IA que une métricas, dependencias y experiencia digital para impulsar decisiones en tiempo real.",
      category: "Observabilidad",
      routerLink: ["/dynatrace"],
    },
    {
      logo: "https://innovatecybersecurity.com/wp-content/uploads/2022/07/One-Identity-training-logo-1200x1200.png",
      name: "One Identity",
      description:
        "IGA y PAM unificados para gobernar identidades, reforzar privilegios y automatizar auditorías con seguridad Zero Trust.",
      category: "Identidad y Seguridad",
      routerLink: ["/one-identity"],
    },
    {
      logo: "https://static.wixstatic.com/media/4ec771_baebde70dd3b421684891ffe1c6078a9~mv2.png/v1/fill/w_410,h_348,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_baebde70dd3b421684891ffe1c6078a9~mv2.png",
      name: "Toad",
      description:
        "Suite para DBAs que integra modelado, automatización de tareas y optimización del rendimiento en bases de datos críticas.",
      category: "Bases de datos",
      routerLink: ["/productos", "toad-by-quest"],
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFfkMxcVxttbg/company-logo_200_200/company-logo_200_200/0/1630584214123?e=2147483647&v=beta&t=K8ylcgB37ITsKpFsRRT8kZ2BFHNRbuO_Mdl-yzs-OT4",
      name: "Foglight Evolve",
      description:
        "Optimización para VMware y Hyper-V con capacity planning, chargeback y detección de riesgos en entornos híbridos.",
      category: "Observabilidad",
      link: "https://www.quest.com/products/foglight-evolve/",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUsQfL5nUtMWBwcGeCTor9e3OS-pUdXmSFA&s",
      name: "KACE",
      description:
        "Gestión de endpoints integral: inventarios, despliegue de software, parches y cumplimiento desde una consola unificada.",
      category: "Gestión de Endpoints",
      link: "https://www.quest.com/products/kace-systems-management-appliance/",
    },
    {
      logo: "https://www.bocada.com/wp-content/uploads/2019/06/vRanger.png.webp",
      name: "vRanger",
      description:
        "Backup y replicación rápidos para VMware y Hyper-V con deduplicación y verificación automatizada de restauración.",
      category: "Backup & DR",
      link: "https://www.quest.com/products/vranger/",
    },
    {
      logo: "https://assets.topadvisor.com/media/_solution_logo_06042024_31713326.png",
      name: "SonicWall",
      description:
        "NGFW y SD-Branch con DPI, inspección TLS, sandboxing Capture ATP y Zero Trust para entornos remotos y trabajo híbrido.",
      category: "Seguridad de Red",
      link: "https://www.sonicwall.com/",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWImvuD-ixHnyURHl9LDxoKx6jTlPPDVBWQ&s",
      name: "SharePlex",
      description:
        "Replicación de datos en tiempo real para Oracle y otras bases, minimiza downtime y soporta migraciones sin impacto.",
      category: "Bases de datos",
      link: "https://www.quest.com/products/shareplex/",
    },
    {
      logo: "assets/product-logos/change-auditor.png",
      name: "Change Auditor for Active Directory",
      description:
        "Auditoría y alertas en tiempo real sobre cambios críticos en AD, con reportes listos para cumplimiento y forense digital.",
      category: "Auditoría y Cumplimiento",
      routerLink: ["/change-auditor"],
    },
    {
      logo: "https://images.icon-icons.com/2699/PNG/512/solarwinds_logo_icon_169738.png",
      name: "SolarWinds",
      description:
        "Correlación unificada de infraestructura, aplicaciones, logs y redes para detectar cuellos de botella y optimizar experiencias digitales.",
      category: "Monitoreo y Gestión TI",
      routerLink: ["/solarwinds"],
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Soluciones",
      description:
        "Ofertas de Alta Tecnología que integran APIs, automatización de procesos y despliegues multi-nube alineados al negocio.",
      category: "Servicios Profesionales",
      routerLink: ["/soluciones"],
    },
    {
      logo: "assets/product-logos/webinars.png",
      name: "Webinars",
      description:
        "Sesiones en directo y on-demand sobre observabilidad, seguridad y automatización con casos de éxito regionales.",
      category: "Capacitación",
      routerLink: ["/webinars"],
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

  get filteredProducts(): ProductCard[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.productos;
    }
    return this.productos.filter((product) =>
      [product.name, product.description, product.category]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }

  clearSearch(): void {
    this.searchTerm = "";
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

}
