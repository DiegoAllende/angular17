import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: "gestion-comprobantes", pathMatch: "full" },
  { path: 'gestion-comprobantes', loadChildren: () => import('./gestion-comprobantes/gestion-comprobantes.routes').then(c => c.routes) },
];
