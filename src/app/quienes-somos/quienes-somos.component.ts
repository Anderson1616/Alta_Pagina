import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss'],
  standalone: false,
})
export class QuienesSomosComponent implements OnInit {
  offices: OfficeLocation[] = [];
  activeOfficeId = '';

  private readonly officeDefinitions: OfficeDefinition[] = [
    {
      id: 'cr',
      label: 'Costa Rica',
      city: 'San Jose, Costa Rica',
      mapUrl:
        'https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Alta%20Tecnologia%20S.A.%20Plaza%20Uruka%20San%20Jose%20Costa%20Rica&t=&z=16&ie=UTF8&iwloc=B&output=embed',
      phoneDisplay: '+506 2291-7440',
      phoneHref: '+50622917440',
      addressLines: [
        'Centro Comercial Plaza Uruka, Local 24',
        'Distrito La Uruca, San Jose 10107',
      ],
    },
    {
      id: 'pa',
      label: 'Panama',
      city: 'Ciudad de Panama, Panama',
      mapUrl:
        'https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Avenida%20Jose%20Agustin%20Arango%20Edificio%20Sertracen%20Ciudad%20de%20Panama&t=&z=16&ie=UTF8&iwloc=B&output=embed',
      phoneDisplay: '+507 836-6050',
      phoneHref: '+5078366050',
      addressLines: [
        'Avenida Jose Agustin Arango, Edificio Sertracen',
        'Nivel 3, Corregimiento Parque Lefebre',
      ],
    },
    {
      id: 'co',
      label: 'Colombia',
      city: 'Bogota, Colombia',
      mapUrl:
        'https://maps.google.com/maps?width=100%25&height=220&hl=es&q=Calle%20125%20%2318B-09%20Bogota%20Colombia&t=&z=16&ie=UTF8&iwloc=B&output=embed',
      phoneDisplay: '+57 601-489-6860',
      phoneHref: '+576014896860',
      addressLines: [
        'Calle 125 # 18B-09, Torre Empresarial',
        'Oficina 502, Usaquen, Bogota',
      ],
    },
  ];

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.offices = this.officeDefinitions.map((office) => ({
      ...office,
      mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(office.mapUrl),
    }));

    this.activeOfficeId = this.offices[0]?.id ?? '';
  }

  setActiveOffice(id: string): void {
    this.activeOfficeId = id;
  }
}
