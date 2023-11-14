import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostElementsComponent } from './host-elements.component';

describe('HostElementsComponent', () => {
  let component: HostElementsComponent;
  let fixture: ComponentFixture<HostElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
