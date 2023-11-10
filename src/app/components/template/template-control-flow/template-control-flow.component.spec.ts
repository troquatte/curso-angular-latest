import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControlFlowComponent } from './template-control-flow.component';

describe('TemplateControlFlowComponent', () => {
  let component: TemplateControlFlowComponent;
  let fixture: ComponentFixture<TemplateControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
