import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableViewsComponent } from './template-deferrable-views.component';

describe('TemplateDeferrableViewsComponent', () => {
  let component: TemplateDeferrableViewsComponent;
  let fixture: ComponentFixture<TemplateDeferrableViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDeferrableViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
