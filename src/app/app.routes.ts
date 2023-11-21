import { Routes } from '@angular/router';

// Components

export const routes: Routes = [
  {
    path: 'curso',
    loadChildren: () =>
      import('./pages/curso.routes').then((r) => r.cursoRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
