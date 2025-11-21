import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CartService } from "../shared/services/cart.service";


interface Product {
  searchKey: string;
  displayName?: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  highlights: string[];
  tags?: string[];
  routerLink?: string | any[];
  link?: string;
  placeholderText?: string;
}

interface Training {
  searchKey: string;
  title: string;
  description: string;
  icon?: string;
  tags: string[];
  level?: string;
  routerLink?: string | any[];
}

interface OfficeDefinition {
  id: string;
  label: string;
  city: string;
  mapUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  addressLines: string[];
}

interface OfficeLocation extends OfficeDefinition {
  mapEmbed: SafeResourceUrl;
}

@Component({
  selector: "app-pantalla-inicio",
  templateUrl: "./pantalla-inicio.component.html",
  styleUrls: ["./pantalla-inicio.component.scss"],
  standalone: false,
})
export class PantallaInicioComponent implements OnInit, AfterViewInit {
  searchTerm = "";
  trainingSearchTerm = "";

  itemsPerView = 3;
  trainingItemsPerView = 2;

  currentIndex = 0;
  trainingCurrentIndex = 0;

  filteredProducts: Product[] = [];
  filteredTrainings: Training[] = [];
  offices: OfficeLocation[] = [];

  private readonly officeDefinitions: OfficeDefinition[] = [
    {
      id: "cr",
      label: "Costa Rica",
      city: "San José, Costa Rica",
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Alta%20Tecnologia%20S.A.%20Plaza%20Uruka%20San%20Jose%20Costa%20Rica&t=&z=16&ie=UTF8&iwloc=B&output=embed",
      phoneDisplay: "+506 2291-7440",
      phoneHref: "+50622917440",
      addressLines: [
        "Centro Comercial Plaza Uruka, Local 24",
        "Distrito La Uruca, San José 10107",
      ],
    },
    {
      id: "pa",
      label: "Panamá",
      city: "Ciudad de Panamá, Panamá",
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Avenida%20Jose%20Agustin%20Arango%20Edificio%20Sertracen%20Ciudad%20de%20Panama&t=&z=16&ie=UTF8&iwloc=B&output=embed",
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
        "https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Calle%20125%20%2318B-09%20Bogota%20Colombia&t=&z=16&ie=UTF8&iwloc=B&output=embed",
      phoneDisplay: "+57 601-489-6860",
      phoneHref: "+576014896860",
      addressLines: [
        "Calle 125 # 18B-09, Torre Empresarial",
        "Oficina 502, Usaquén, Bogotá",
      ],
    },
  ];

  activeOfficeId = "";

  readonly products: Product[] = [
    {
      searchKey: "Dynatrace",
      description:
        "Observabilidad full-stack con IA Davis: trazas, métricas, logs y experiencia digital instrumentada automáticamente para modernizaciones ágiles y reducción del MTTR.",
      logo: "https://cdn.dm.dynatrace.com/assets/Marketing/seo/dynatrace_web.png",
      logoAlt: "Logo Dynatrace",
      highlights: [
        "Detección automática de dependencias.",
        "Mapas de servicio en tiempo real.",
        "Optimización de experiencia digital.",
      ],
      tags: ["AIOps", "Observabilidad", "Experiencia digital"],
      routerLink: ["/dynatrace"],
    },
    {
      searchKey: "One Identity",
      displayName: "One Identity",
      description:
        "IGA y PAM unificados: aprovisionamientos libres de reprocesos, MFA, insights y gobierno global de identidades con cumplimiento SOX/GDPR.",
      logo: "https://wp.logos-download.com/wp-content/uploads/2021/02/One_Identity_LLC_Logo-700x97.png",
      logoAlt: "Logo One Identity",
      highlights: [
        "Flujos configurables de aprobaciones.",
        "Microservicios modulares.",
        "Dashboards para riesgos y auditoría.",
      ],
      tags: ["IGA", "PAM", "Cumplimiento"],
      routerLink: ["/one-identity"],
    },
    {
      searchKey: "Toad by Quest",
      description:
        "Observabilidad full-stack en la gestión de bases de datos, trazas, métricas y logs con automatización para acelerar ciclos DevOps y SQL Ops.",
      logo:
        "https://static.wixstatic.com/media/4ec771_baebde70dd3b421684891ffe1c6078a9~mv2.png/v1/fill/w_410,h_348,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_baebde70dd3b421684891ffe1c6078a9~mv2.png",
      logoAlt: "Logo Toad by Quest",
      highlights: [
        "Automatización de pipelines SQL.",
        "Comparación y despliegue controlado.",
        "Catálogo de scripts reutilizables.",
      ],
      tags: ["DevOps", "SQL", "Automatización"],
      routerLink: ["/productos", "toad-by-quest"],
    },
    {
      searchKey: "Foglight Evolve",
      description:
        "Optimización para VMware y Hyper-V: capacity planning, rightsizing y chargeback/showback con analítica para reducir costos y riesgos.",
      logo: "assets/logos/foglight-evolve.jpg",
      logoAlt: "Logo Foglight Evolve",
      highlights: [
        "Forecast de capacidad multihypervisor.",
        "Modelos de costos y chargeback/showback.",
        "Alertas inteligentes de performance.",
      ],
      tags: ["Virtualización", "Capacidad", "Costos"],
      routerLink: ["/foglight-evolve"],
    },
    {
      searchKey: "KACE",
      description:
        "Gestión de endpoints integral: inventario HW/SW, despliegue de SO o paquetes, parcheo automático, help desk y cumplimiento desde una consola.",
      logo: "assets/logos/kace.jpg",
      logoAlt: "Logo KACE",
      highlights: [
        "Gestión unificada de activos.",
        "Parcheo automatizado y workflows.",
        "Mesa de ayuda integrada.",
      ],
      tags: ["Endpoints", "Parches", "Help Desk"],
      routerLink: ["/kace"],
    },
    {
      searchKey: "vRanger",
      description:
        "Protección de datos para VMware y Hyper-V con backups incrementales, replicación eficiente y restauración granular para cargas virtuales críticas.",
      logo: "assets/logos/vranger.jpg",
      logoAlt: "Logo vRanger",
      highlights: [
        "Backups incrementales a nivel de bloque.",
        "Optimización con deduplicación y compresión.",
        "Restauración granular de VM y archivos.",
      ],
      tags: ["Backup", "DR", "Virtualización"],
      routerLink: ["/vranger"],
    },
    {
      searchKey: "SonicWall",
      description:
        "NGFW y SD-Branch con IPS, inspección TLS, sandboxing y orquestación centralizada para proteger sedes y trabajo remoto seguro.",
      logo: "assets/logos/sonicwall.jpg",
      logoAlt: "Logo SonicWall",
      highlights: [
        "Seguridad Zero Trust y políticas unificadas.",
        "Firewall de nueva generación con prevención de intrusiones.",
        "Segmentación y SD-Branch para redes distribuidas.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/sonicwall"],
    },
    {
      searchKey: "SharePlex",
      description:
        "Replicación de datos en tiempo real para Oracle y heterogéneos, con mínima latencia para HA, migraciones sin downtime y reporting sin impacto.",
      logo: "https://www.socallinuxexpo.org/scale/22x/_assets/www.socallinuxexpo.org/sites/default/files/logos/SharePlexQuest%20RGB.png",
      logoAlt: "Logo SharePlex",
      highlights: [
        "Replicación bidireccional y captura continua.",
        "Compatibilidad con entornos híbridos y nube.",
        "Sincronización confiable para reporting y analítica.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/shareplex"],
    },
    {
      searchKey: "Change Auditor",
      description:
        "Auditoría y alertas en tiempo real sobre quién/qué/cuándo/dónde de cambios críticos en AD, Exchange y Windows, con reportes de cumplimiento y forense.",
      displayName: "Change Auditor",
      placeholderText: "Change Auditor",
      highlights: [
        "Alertas inmediatas con contexto accionable.",
        "Reportes de cumplimiento preconstruidos.",
        "Seguimiento de privilegios y actividad sospechosa.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/change-auditor-training"],
    },
    {
      searchKey: "SolarWinds",
      description:
        "Gestión unificada de red, servidores y aplicaciones: módulos NPM, SAM y NCM; mapas, alertas inteligentes, NetPath y análisis de desempeño.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Solarwinds.svg/1200px-Solarwinds.svg.png",
      logoAlt: "Logo SolarWinds",
      highlights: [
        "Monitoreo de infraestructura integral NPM/SAM.",
        "Mapeo dinámico de rutas con NetPath.",
        "Alertamiento inteligente basado en umbrales.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/solarwinds"],
    },
    {
      searchKey: "Soluciones",
      description:
        "Portafolio de Alta Tecnología: seguridad/identidad, continuidad/backup, monitoreo, optimización y casos de éxito por industria.",
      displayName: "Soluciones",
      placeholderText: "Soluciones",
      highlights: [
        "Catálogo integral de fabricantes aliados.",
        "Servicios profesionales certificados.",
        "Implementaciones llave en mano para TI y negocio.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/soluciones"],
    },
    {
      searchKey: "Webinars",
      description:
        "Biblioteca on-demand y agenda de demos técnicas, mejores prácticas y sesiones con expertos para equipos de TI y negocio.",
      displayName: "Webinars",
      placeholderText: "Webinars",
      highlights: [
        "Contenidos exclusivos con especialistas.",
        "Sesiones en vivo y grabadas por vertical.",
        "Material descargable y seguimiento personalizado.",
      ],
      tags: ["APM", "RUM", "Logs"],
      routerLink: ["/webinars"],
    },
  ];

  readonly trainings: Training[] = [
    {
      searchKey: "Academy",
      title: "Academy",
      description:
        "Rutas de aprendizaje por rol y nivel (básico a avanzado) para acelerar la adopción de tecnologías A+.",
      icon: "https://static.wixstatic.com/media/4ec771_469381e219cc446bae288fbae8621403~mv2_d_1405_1261_s_2.png/v1/fill/w_724,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_469381e219cc446bae288fbae8621403~mv2_d_1405_1261_s_2.png",
      tags: ["Ruta", "Roles", "Práctico"],
      level: "Todos los niveles",
      routerLink: ["/academy"],
    },
    {
      searchKey: "Toad for Oracle",
      title: "Toad for Oracle",
      description:
        "Productividad para DBAs: modelado, tuning y automatización con buenas prácticas DevOps.",
      icon: "https://e7.pngegg.com/pngimages/946/433/png-clipart-toad-oracle-database-computer-software-quest-software-others-dump-tree-frog-thumbnail.png",
      tags: ["DBA", "Oracle", "Automatización"],
      level: "Intermedio",
      routerLink: ["/capacitaciones", "toad-for-oracle"],
    },
    {
      searchKey: "Toad for SQL",
      title: "Toad for SQL",
      description:
        "Herramienta líder, ideal para asegurar la mejor productividad posible en el desarrollo y administración de bases de datos.",
      icon: "https://e7.pngegg.com/pngimages/946/433/png-clipart-toad-oracle-database-computer-software-quest-software-others-dump-tree-frog-thumbnail.png",
      tags: ["Herramienta", "Productividad", "Bases de datos"],
      level: "Avanzado",
      routerLink: ["toad-for-sql"],
    },
    {
      searchKey: "Change Auditor",
      title: "Change Auditor",
      description:
        "Es una herramienta de monitoreo y auditoría en tiempo real que pertenece a la suite de gestión de Quest Software.",
      icon: "https://static.wixstatic.com/media/4ec771_4b962c8495494740a072833c39eada49~mv2.png/v1/fill/w_710,h_632,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20AT-ACADEMY_Texto%20Blanco-01.png",
      tags: ["Auditoría", "Monitoreo", "Quest"],
      level: "Intermedio",
      routerLink: ["/change-auditor-training"],
    },
  ];

  private readonly productGap = 32;
  private readonly trainingGap = 32;

  private productSlideSize = 0;
  private trainingSlideSize = 0;

  @ViewChild("productsViewport")
  private productsViewport?: ElementRef<HTMLDivElement>;

  @ViewChild("trainingViewport")
  private trainingViewport?: ElementRef<HTMLDivElement>;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
    private readonly cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.offices = this.officeDefinitions.map((office) => ({
      ...office,
      mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(office.mapUrl),
    }));
    this.activeOfficeId = this.offices[0]?.id ?? "";

    this.filteredProducts = [...this.products];
    this.filteredTrainings = [...this.trainings];

    this.updateItemsPerView();
    this.updateTrainingItemsPerView();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateProductSlideMetrics();
      this.updateTrainingSlideMetrics();
    });
  }

  @HostListener("window:resize")
  onResize(): void {
    const previousProducts = this.itemsPerView;
    const previousTrainings = this.trainingItemsPerView;

    this.updateItemsPerView();
    this.updateTrainingItemsPerView();

    if (previousProducts !== this.itemsPerView) {
      this.ensureProductIndexBounds();
    }
    if (previousTrainings !== this.trainingItemsPerView) {
      this.ensureTrainingIndexBounds();
    }

    this.updateProductSlideMetrics();
    this.updateTrainingSlideMetrics();
  }

  handleSearchSubmit(event: Event): void {
    event.preventDefault();
    this.applyProductFilter(this.searchTerm);
  }

  onSearch(term: string): void {
    this.applyProductFilter(term);
  }

  resetSearch(): void {
    this.applyProductFilter("");
  }

  handleTrainingSearchSubmit(event: Event): void {
    event.preventDefault();
    this.applyTrainingFilter(this.trainingSearchTerm);
  }

  onTrainingSearch(term: string): void {
    this.applyTrainingFilter(term);
  }

  resetTrainingSearch(): void {
    this.applyTrainingFilter("");
  }

  goToPrevious(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  goToNext(): void {
    const maxIndex = Math.max(this.filteredProducts.length - this.columnsInView, 0);
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
  }

  goToPreviousTraining(): void {
    this.trainingCurrentIndex = Math.max(this.trainingCurrentIndex - 1, 0);
  }

  goToNextTraining(): void {
    const maxIndex = Math.max(this.filteredTrainings.length - this.trainingColumnsInView, 0);
    this.trainingCurrentIndex = Math.min(this.trainingCurrentIndex + 1, maxIndex);
  }

  setActiveOffice(id: string): void {
    if (!id || this.activeOfficeId === id) {
      return;
    }
    this.activeOfficeId = id;
  }

  get columnsInView(): number {
    return Math.min(this.itemsPerView, this.filteredProducts.length || 1);
  }

  get trainingColumnsInView(): number {
    return Math.min(this.trainingItemsPerView, this.filteredTrainings.length || 1);
  }

  get canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get canGoNext(): boolean {
    return this.currentIndex + this.columnsInView < this.filteredProducts.length;
  }

  get trainingCanGoPrevious(): boolean {
    return this.trainingCurrentIndex > 0;
  }

  get trainingCanGoNext(): boolean {
    return this.trainingCurrentIndex + this.trainingColumnsInView < this.filteredTrainings.length;
  }

  get trackTransform(): string {
    if (!this.productSlideSize) {
      return "translateX(0)";
    }
    return `translateX(-${this.currentIndex * this.productSlideSize}px)`;
  }

  get trainingTrackTransform(): string {
    if (!this.trainingSlideSize) {
      return "translateX(0)";
    }
    return `translateX(-${this.trainingCurrentIndex * this.trainingSlideSize}px)`;
  }

  private applyProductFilter(term: string): void {
    this.searchTerm = term;
    const normalized = term.trim().toLowerCase();

    this.filteredProducts = normalized
      ? this.products.filter((product) => {
          const keys = [
            product.searchKey,
            product.displayName,
            product.description,
            ...(product.tags ?? []),
          ]
            .filter(Boolean)
            .map((value) => value!.toLowerCase());
          return keys.some((value) => value.includes(normalized));
        })
      : [...this.products];

    this.ensureProductIndexBounds(true);
    setTimeout(() => this.updateProductSlideMetrics());
  }

  private applyTrainingFilter(term: string): void {
    this.trainingSearchTerm = term;
    const normalized = term.trim().toLowerCase();

    this.filteredTrainings = normalized
      ? this.trainings.filter((training) => {
          const keys = [training.searchKey, training.title, training.description, ...(training.tags ?? [])]
            .filter(Boolean)
            .map((value) => value!.toLowerCase());
          return keys.some((value) => value.includes(normalized));
        })
      : [...this.trainings];

    this.ensureTrainingIndexBounds(true);
    setTimeout(() => this.updateTrainingSlideMetrics());
  }

  private updateItemsPerView(): void {
    if (typeof window === "undefined") {
      this.itemsPerView = 3;
      return;
    }

    const width = window.innerWidth;
    if (width < 640) {
      this.itemsPerView = 1;
    } else if (width < 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
  }

  private updateTrainingItemsPerView(): void {
    if (typeof window === "undefined") {
      this.trainingItemsPerView = 2;
      return;
    }

    const width = window.innerWidth;
    this.trainingItemsPerView = width < 900 ? 1 : 2;
  }

  private ensureProductIndexBounds(reset = false): void {
    if (reset) {
      this.currentIndex = 0;
      return;
    }

    const maxIndex = Math.max(this.filteredProducts.length - this.columnsInView, 0);
    this.currentIndex = Math.min(this.currentIndex, maxIndex);
  }

  private ensureTrainingIndexBounds(reset = false): void {
    if (reset) {
      this.trainingCurrentIndex = 0;
      return;
    }

    const maxIndex = Math.max(this.filteredTrainings.length - this.trainingColumnsInView, 0);
    this.trainingCurrentIndex = Math.min(this.trainingCurrentIndex, maxIndex);
  }

  private updateProductSlideMetrics(): void {
    const viewport = this.productsViewport?.nativeElement;
    if (!viewport) {
      return;
    }

    const visible = Math.max(Math.min(this.columnsInView, this.filteredProducts.length || 1), 1);

    // Prefer measuring the actual rendered card width from the track so
    // translations align exactly with visible cards and avoid clipping.
    const track = viewport.querySelector<HTMLElement>(".products-track");
    let gap = this.productGap;
    let cardWidth = 0;

    if (track) {
      const computed = getComputedStyle(track);
      // try CSS gap first, then custom property --gap
      const gapCss = computed.getPropertyValue("gap") || computed.getPropertyValue("--gap");
      gap = parseFloat(gapCss) || this.productGap;

      const firstCard = track.querySelector<HTMLElement>(".product-card");
      if (firstCard) {
        // use offsetWidth to include padding/border as rendered
        cardWidth = firstCard.offsetWidth;
      }
    }

    // fallback: compute from viewport if measurement failed
    if (!cardWidth) {
      const viewportWidth = viewport.clientWidth;
      cardWidth = (viewportWidth - Math.max(visible - 1, 0) * gap) / visible || viewportWidth;
    }

    this.productSlideSize = cardWidth + gap;
  }

  private updateTrainingSlideMetrics(): void {
    const viewport = this.trainingViewport?.nativeElement;
    if (!viewport) {
      return;
    }

    const visible = Math.max(
      Math.min(this.trainingColumnsInView, this.filteredTrainings.length || 1),
      1,
    );
    const track = viewport.querySelector<HTMLElement>(".trainings-track");
    let gap = this.trainingGap;
    let cardWidth = 0;

    if (track) {
      const computed = getComputedStyle(track);
      const gapCss = computed.getPropertyValue("gap") || computed.getPropertyValue("--gap");
      gap = parseFloat(gapCss) || this.trainingGap;

      const firstCard = track.querySelector<HTMLElement>(".training-card");
      if (firstCard) {
        cardWidth = firstCard.offsetWidth;
      }
    }

    if (!cardWidth) {
      const viewportWidth = viewport.clientWidth;
      cardWidth = (viewportWidth - Math.max(visible - 1, 0) * gap) / visible || viewportWidth;
    }

    this.trainingSlideSize = cardWidth + gap;
  }

  goToServicios(): void {
    this.router.navigate(["/servicios"]);
  }

  goToProductos(): void {
    this.router.navigate(["/productos"]);
  }

  goToCapacitaciones(): void {
    this.router.navigate(["/capacitaciones"]);
  }

  goToNuestrasMarcas(): void {
    this.router.navigate(["/nuestras-marcas"]);
  }

  goToSalasInteligentes(): void {
    this.router.navigate(["/salas-inteligentes"]);
  }

  addTrainingToCart(training: Training): void {
    this.cartService.addItem({
      id: `training-${training.searchKey}`,
      title: training.title,
      description: training.description,
    });
  }
}
