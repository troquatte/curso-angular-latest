import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { canActivateChildGuard } from './can-activate-child.guard';

describe('canActivateChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActivateChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
