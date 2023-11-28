import { Routes } from '@angular/router';
import { AnimationsComponent } from '@components/animations/animations.component';
import { canMatchGuard } from './guard/can-match.guard';
import SobreComponent from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
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
