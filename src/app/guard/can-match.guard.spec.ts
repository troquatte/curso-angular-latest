import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { canMatchGuard } from './can-match.guard';

describe('canMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
