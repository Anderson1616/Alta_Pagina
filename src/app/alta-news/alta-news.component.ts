import { Component } from "@angular/core";

interface NewsHighlight {
  title: string;
  description: string;
  date: string;
  category: string;
}

@Component({
  selector: "app-alta-news",
  templateUrl: "./alta-news.component.html",
  styleUrls: ["./alta-news.component.scss"],
  standalone: false,
})
export class AltaNewsComponent {
  readonly highlights: NewsHighlight[] = [
    {
      title: "Webinar: Observabilidad con IA",
      description:
        "Exploramos casos reales de optimización de aplicaciones con Dynatrace y flujos automatizados.",
      date: "20 de noviembre",
      category: "Eventos",
    },
    {
      title: "Buenas prácticas de Telepresencia",
      description:
        "Checklist para garantizar experiencias híbridas impecables en salas inteligentes y streaming corporativo.",
      date: "30 de noviembre",
      category: "Blog",
    },
    {
      title: "Novedades de Alta Tecnolog\u00eda",
      description:
        "Reconocimientos recientes y alianzas estratégicas que fortalecen nuestro portafolio de soluciones.",
      date: "15 de diciembre",
      category: "Noticias",
    },
  ];
}

