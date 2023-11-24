import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptImageComponent } from './opt-image.component';

describe('OptImageComponent', () => {
  let component: OptImageComponent;
  let fixture: ComponentFixture<OptImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
