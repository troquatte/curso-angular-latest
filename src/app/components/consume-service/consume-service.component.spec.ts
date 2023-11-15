import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeServiceComponent } from './consume-service.component';

describe('ConsumeServiceComponent', () => {
  let component: ConsumeServiceComponent;
  let fixture: ComponentFixture<ConsumeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
