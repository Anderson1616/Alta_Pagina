import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CartService } from "../shared/services/cart.service";

interface TrainingProgram {
  title: string;
  description: string;
  level: string;
  tags: string[];
  icon?: string;
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
  selector: "app-capacitaciones",
  templateUrl: "./capacitaciones.component.html",
  styleUrls: ["./capacitaciones.component.scss"],
  standalone: false,
})
export class CapacitacionesComponent {
  searchTerm = "";

  readonly programs: TrainingProgram[] = [
    {
      title: "Academy",
      description:
        "Rutas de aprendizaje por rol y nivel (bï¿½sico a avanzado) para acelerar la adopciï¿½n tecnolï¿½gica.",
      level: "Todos los niveles",
      tags: [],
      icon: "https://static.wixstatic.com/media/4ec771_469381e219cc446bae288fbae8621403~mv2_d_1405_1261_s_2.png/v1/fill/w_724,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_469381e219cc446bae288fbae8621403~mv2_d_1405_1261_s_2.png",
      link: "#",
    },
    {
      title: "Toad for Oracle",
      description:
        "Productividad para DBAs: modelado, tuning y automatizaciï¿½n con buenas prï¿½cticas.",
      level: "Intermedio",
      tags: [],
      icon: "https://e7.pngegg.com/pngimages/946/433/png-clipart-toad-oracle-database-computer-software-quest-software-others-dump-tree-frog-thumbnail.png",
      routerLink: ["/capacitaciones", "toad-for-oracle"],
    },
    {
      title: "Change Auditor",
      description:
        "Auditorï¿½a y monitoreo de cambios para fortalecer seguridad y cumplimiento en entornos Microsoft.",
      level: "Avanzado",
      tags: [],
      icon: "https://static.wixstatic.com/media/4ec771_4b962c8495494740a072833c39eada49~mv2.png/v1/fill/w_710,h_632,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20AT-ACADEMY_Texto%20Blanco-01.png",
      routerLink: ["/change-auditor-training"],
    },
    {
      title: "Toad for SQL",
      description:
        "Toad es la herramienta lï¿½der para asegurar la mejor productividad en el desarrollo y administraciï¿½n de bases de datos.",
      level: "Intermedio",
      tags: [],
      icon: "https://e7.pngegg.com/pngimages/946/433/png-clipart-toad-oracle-database-computer-software-quest-software-others-dump-tree-frog-thumbnail.png",
      routerLink: ["/toad-for-sql"],
    },
  ];

  readonly offices: OfficeLocation[];
  activeOfficeId: string;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly cartService: CartService,
  ) {
    const officeDefinitions: OfficeLocation[] = [
      {
        id: "cr",
        label: "Costa Rica",
        city: "San Josï¿½, Costa Rica",
        mapUrl:
          "https://www.google.com/maps?q=Alta%20Tecnolog%C3%ADa%20S.A.,%20Centro%20Comercial%20Plaza%20Uruka,%20La%20Uruca,%20San%20Jos%C3%A9,%20Costa%20Rica&output=embed",
        phoneDisplay: "+506 2291-7440",
        phoneHref: "+50622917440",
        addressLines: ["La Uruca, Centro Comercial Plaza Uruka"],
      },
      {
        id: "pa",
        label: "Panamï¿½",
        city: "Ciudad de Panamï¿½, Panamï¿½",
        mapUrl:
          "https://www.google.com/maps?q=Sertracen,%20Avenida%20Jos%C3%A9%20Agust%C3%ADn%20Arango,%20Parque%20Lefebre,%20Ciudad%20de%20Panam%C3%A1,%20Panam%C3%A1&output=embed",
        phoneDisplay: "+507 836-6050",
        phoneHref: "+5078366050",
        addressLines: [
          "Avenida Josï¿½ Agustï¿½n Arango, Edificio Sertracen",
          "Nivel 3, Corregimiento Parque Lefebre",
        ],
      },
      {
        id: "co",
        label: "Colombia",
        city: "Bogotï¿½, Colombia",
        mapUrl:
          "https://www.google.com/maps?q=Calle%20125%20%2318B-09,%20Bogot%C3%A1,%20Colombia&output=embed",
        phoneDisplay: "+57 601-489-6860",
        phoneHref: "+576014896860",
        addressLines: ["Calle 125 # 18B-09, Torre Empresarial", "Oficina 502, Usaquï¿½n, Bogotï¿½"],
      },
    ];

    this.offices = officeDefinitions.map((office) => ({
      ...office,
      mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(office.mapUrl),
    }));
    this.activeOfficeId = this.offices[0]?.id ?? "";
  }

  get filteredPrograms(): TrainingProgram[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.programs;
    }
    return this.programs.filter((program) =>
      [program.title, program.description, program.level, ...program.tags]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }

  clearSearch(): void {
    this.searchTerm = "";
  }

  setActiveOffice(id: string): void {
    this.activeOfficeId = id;
  }

  addProgramToCart(program: TrainingProgram): void {
    this.cartService.addItem({
      id: "program-" + program.title.toLowerCase().replace(/\s+/g, "-"),
      title: program.title,
      description: program.description,
    });
  }
}













