import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiOuMaeComponent } from './pai-ou-mae.component';

describe('PaiOuMaeComponent', () => {
  let component: PaiOuMaeComponent;
  let fixture: ComponentFixture<PaiOuMaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiOuMaeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaiOuMaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
