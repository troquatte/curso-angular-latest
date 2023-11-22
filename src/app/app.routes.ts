import { Routes } from '@angular/router';
import { canMatchGuard } from './guard/can-match.guard';

export const routes: Routes = [
  {
    path: 'curso',
    loadChildren: () =>
      import('./pages/curso.routes').then((r) => r.cursoRoutes),
    canMatch: [canMatchGuard],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
