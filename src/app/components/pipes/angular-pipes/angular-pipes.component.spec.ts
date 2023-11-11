import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipesComponent } from './angular-pipes.component';

describe('AngularPipesComponent', () => {
  let component: AngularPipesComponent;
  let fixture: ComponentFixture<AngularPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
