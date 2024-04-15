import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'alta-cuentas', pathMatch: 'full'
  },
  {
    path: 'alta-cuentas', loadComponent: () => import('./alta-cuentas/alta-cuentas.component').then(c => c.AltaCuentasComponent),
    children: [
      {
        path: 'solicitud',
        children: [
          { path: '', loadComponent: () => import('./alta-cuentas/solicitud/solicitud.component').then(c => c.SolicitudComponent) },
          { path: ':accion', loadComponent: () => import('./alta-cuentas/gcom-form-edit/gcom-form-edit.component').then(c => c.GcomFormEditComponent) },
        ]
      },
      {
        path: 'validacion',
        children: [
          { path: '', loadComponent: () => import('./alta-cuentas/validacion/validacion.component').then(c => c.ValidacionComponent) },
          { path: ':accion', loadComponent: () => import('./alta-cuentas/gcom-form-edit/gcom-form-edit.component').then(c => c.GcomFormEditComponent) },
        ]
      },
      { path: 'aprobacion', loadComponent: () => import('./alta-cuentas/aprobacion/aprobacion.component').then(c => c.AprobacionComponent) },
      { path: 'aprobados', loadComponent: () => import('./alta-cuentas/aprobados/aprobados.component').then(c => c.AprobadosComponent) },
    ]
  },
];
