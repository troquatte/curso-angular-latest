import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (
  childRoute,
  state
) => {
  return true;
};
