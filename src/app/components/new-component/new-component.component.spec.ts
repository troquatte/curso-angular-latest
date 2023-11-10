import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentComponent } from './new-component.component';

describe('NewComponentComponent', () => {
  let component: NewComponentComponent;
  let fixture: ComponentFixture<NewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
