import { CanDeactivateFn } from '@angular/router';
import ServicosPrestadosComponent from 'app/pages/servicos-prestados/servicos-prestados.component';

export const canDeactivateGuard: CanDeactivateFn<ServicosPrestadosComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.form.get('name')?.dirty) {
    return confirm('Você deseja sair?');
  }

  return true;
};
