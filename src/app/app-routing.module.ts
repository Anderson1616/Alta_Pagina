import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pantalla-inicio/pantalla-inicio.module').then(
        (m) => m.PantallaInicioModule,
      ),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./servicios/servicios.module').then((m) => m.ServiciosModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'capacitaciones',
    loadChildren: () =>
      import('./capacitaciones/capacitaciones.module').then(
        (m) => m.CapacitacionesModule,
      ),
  },
  {
    path: 'academy',
    loadChildren: () =>
      import('./academy/academy.module').then((m) => m.AcademyModule),
  },
  {
    path: 'nuestros-reconocimientos',
    loadChildren: () =>
      import('./nuestros-reconocimientos/nuestros-reconocimientos.module').then(
        (m) => m.NuestrosReconocimientosModule,
      ),
  },
  {
    path: 'quienes-somos',
    loadChildren: () =>
      import('./quienes-somos/quienes-somos.module').then(
        (m) => m.QuienesSomosModule,
      ),
  },
  {
    path: 'nuestra-empresa',
    loadChildren: () =>
      import('./nuestra-empresa/nuestra-empresa.module').then(
        (m) => m.NuestraEmpresaModule,
      ),
  },
  {
    path: 'nuestras-marcas',
    loadChildren: () =>
      import('./nuestras-marcas/nuestras-marcas.module').then(
        (m) => m.NuestrasMarcasModule,
      ),
  },
  {
    path: 'telepresencia-streaming',
    loadChildren: () =>
      import('./telepresencia-streaming/telepresencia-streaming.module').then(
        (m) => m.TelepresenciaStreamingModule,
      ),
  },
  {
    path: 'alta-news',
    loadChildren: () =>
      import('./alta-news/alta-news.module').then((m) => m.AltaNewsModule),
  },
  {
    path: 'dynatrace',
    loadChildren: () =>
      import('./dynatrace/dynatrace.module').then((m) => m.DynatraceModule),
  },
  {
    path: 'foglight-evolve',
    loadChildren: () =>
      import('./foglight-evolve/foglight-evolve.module').then(
        (m) => m.FoglightEvolveModule,
      ),
  },
  {
    path: 'one-identity',
    loadChildren: () =>
      import('./one-identity/one-identity.module').then((m) => m.OneIdentityModule),
  },
  {
    path: 'kace',
    loadChildren: () =>
      import('./kace/kace.module').then((m) => m.KaceModule),
  },
  {
    path: 'vranger',
    loadChildren: () =>
      import('./vranger/vranger.module').then((m) => m.VrangerModule),
  },
  {
    path: 'sonicwall',
    loadChildren: () =>
      import('./sonicwall/sonicwall.module').then((m) => m.SonicwallModule),
  },
  {
    path: 'shareplex',
    loadChildren: () =>
      import('./shareplex/shareplex.module').then((m) => m.ShareplexModule),
  },
  {
    path: 'solarwinds',
    loadChildren: () =>
      import('./solarwinds/solarwinds.module').then((m) => m.SolarwindsModule),
  },
  {
    path: 'soluciones',
    loadChildren: () =>
      import('./soluciones/soluciones.module').then((m) => m.SolucionesModule),
  },
  {
    path: 'webinars',
    loadChildren: () =>
      import('./webinars/webinars.module').then((m) => m.WebinarsModule),
  },
  {
    path: 'toad-for-sql',
    loadChildren: () =>
      import('./toad-for-sql/toad-for-sql.module').then((m) => m.ToadForSqlModule),
  },
  {
    path: 'change-auditor-training',
    loadChildren: () =>
      import('./change-auditor-training/change-auditor-training.module').then(
        (m) => m.ChangeAuditorTrainingModule,
      ),
  },
  {
    path: 'change-auditor',
    loadChildren: () =>
      import('./change-auditor/change-auditor.module').then(
        (m) => m.ChangeAuditorModule,
      ),
  },
  {
    path: 'estudio-pa',
    loadChildren: () =>
      import('./estudio-pa/estudio-pa.module').then((m) => m.EstudioPaModule),
  },
  {
    path: 'salas-inteligentes',
    loadChildren: () =>
      import('./salas-inteligentes/salas-inteligentes.module').then(
        (m) => m.SalasInteligentesModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled",
      scrollOffset: [0, 0],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

