import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CartService } from "../../shared/services/cart.service";

interface ModuleCard {
  title: string;
  description: string;
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
  selector: "app-toad-for-oracle",
  templateUrl: "./toad-for-oracle.component.html",
  styleUrls: ["./toad-for-oracle.component.scss"],
  standalone: false,
})
export class ToadForOracleComponent {
  readonly modules: ModuleCard[] = [
    {
      title: "TOAD 201",
      description: "TOAD Fundamentals",
    },
    {
      title: "TOAD 202",
      description: "TOAD Optimizacion de SQL",
    },
    {
      title: "TOAD 203",
      description: "TOAD DevOps y despliegue",
    },
  ];

  readonly outcomes: string[] = [
    "Acelera los ciclos de desarrollo y despliegue con las herramientas nativas de TOAD.",
    "Automatiza tareas repetitivas y minimiza los cuellos de botella tradicionales.",
    "Reduce el riesgo de la salida a produccion con controles y validaciones.",
    "Diagnostica problemas de rendimiento con tableros especificos para Oracle.",
    "Integra equipos de desarrollo y operaciones bajo un flujo colaborativo.",
    "Implementa buenas practicas de seguridad, cumplimiento y versionamiento.",
    "Gestiona multiples entornos sin afectar la estabilidad.",
    "Genera reportes y analitica para justificar mejoras continuas.",
  ];

  readonly offices: OfficeLocation[];
  activeOfficeId: string;

  constructor(private readonly sanitizer: DomSanitizer, private readonly cartService: CartService) {
    const officeDefinitions: OfficeLocation[] = [
      {
        id: "cr",
        label: "Costa Rica",
        city: "San Jose, Costa Rica",
        mapUrl:
          "https://www.google.com/maps?q=Alta%20Tecnolog%C3%ADa%20S.A.,%20Centro%20Comercial%20Plaza%20Uruka,%20La%20Uruca,%20San%20Jos%C3%A9,%20Costa%20Rica&output=embed",
        phoneDisplay: "+506 2291-7440",
        phoneHref: "+50622917440",
        addressLines: ["La Uruca, Centro Comercial Plaza Uruka"],
      },
      {
        id: "pa",
        label: "Panama",
        city: "Ciudad de Panama, Panama",
        mapUrl:
          "https://www.google.com/maps?q=Sertracen,%20Avenida%20Jos%C3%A9%20Agust%C3%ADn%20Arango,%20Parque%20Lefebre,%20Ciudad%20de%20Panam%C3%A1,%20Panam%C3%A1&output=embed",
        phoneDisplay: "+507 836-6050",
        phoneHref: "+5078366050",
        addressLines: [
          "Avenida Jose Agustin Arango, Edificio Sertracen",
          "Nivel 3, Corregimiento Parque Lefebre",
        ],
      },
      {
        id: "co",
        label: "Colombia",
        city: "Bogota, Colombia",
        mapUrl:
          "https://www.google.com/maps?q=Calle%20125%20%2318B-09,%20Bogot%C3%A1,%20Colombia&output=embed",
        phoneDisplay: "+57 601-489-6860",
        phoneHref: "+576014896860",
        addressLines: ["Calle 125 # 18B-09, Torre Empresarial", "Oficina 502, Usaquen, Bogota"],
      },
    ];

    this.offices = officeDefinitions.map((office) => ({
      ...office,
      mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(office.mapUrl),
    }));
    this.activeOfficeId = this.offices[0]?.id ?? "";
  }

  addModuleToCart(id: string, title: string, description: string): void {
    try {
      this.cartService.addItem({ id, title, description });
    } catch (e) {
      // silently ignore - cart is non-critical
      console.warn('Failed to add item to cart', e);
    }
  }

  setActiveOffice(id: string): void {
    this.activeOfficeId = id;
  }

  scrollToContact(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const el = document.getElementById('contacto-final');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        try { history.replaceState(null, '', '#contacto-final'); } catch (e) {}
      }, 600);
    }
  }
}
