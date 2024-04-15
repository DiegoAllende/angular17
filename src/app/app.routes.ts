import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", redirectTo: "/public", pathMatch: "full" },
  { path: "public", loadChildren: () => import('./modules/public/public.routes').then(r => r.routes) },
  { path: "private", loadChildren: () => import('./modules/private/private.routes').then(r => r.routes) },
];
