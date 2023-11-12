import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'X-salada',
      preco: 'R$ 10',
    },
    {
      comida: 'X-bacon',
      preco: 'R$ 11',
    },
    {
      comida: 'Coxinha',
      preco: 'R$ 6',
    },
  ]);

  public submitForm(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      console.log(form.value);
    }
  }
}
