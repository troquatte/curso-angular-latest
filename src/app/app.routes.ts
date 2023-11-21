import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home da página',
    component: HomeComponent,
  },
  {
    path: 'sobre/:id',
    title: 'Sobre da página',
    component: SobreComponent,
  },
  {
    path: 'servicos',
    title: 'Servicos da página',
    component: ServicosPrestadosComponent,
  },
];
