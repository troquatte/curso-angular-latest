import { Routes } from '@angular/router';

export const cursoRoutes: Routes = [
  {
    path: '',
    title: 'Home da página',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'sobre',
    title: 'Sobre da página',
    loadComponent: () => import('./sobre/sobre.component'),
  },
  {
    path: 'servicos/:id',
    title: 'Servicos da página',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component'),
  },
];
