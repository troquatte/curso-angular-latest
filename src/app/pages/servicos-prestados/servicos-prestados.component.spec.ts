import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosPrestadosComponent } from './servicos-prestados.component';

describe('ServicosPrestadosComponent', () => {
  let component: ServicosPrestadosComponent;
  let fixture: ComponentFixture<ServicosPrestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosPrestadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
