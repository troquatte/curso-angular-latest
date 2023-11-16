import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponent implements OnInit {
  // Primeira aula
  public name = 'New Component';

  // Avançado: Aulas de serviço
  #apiService = inject(ApiService);

  ngOnInit(): void {
    console.log(this.#apiService.name())

    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log("complete!"),
    });

    this.#apiService.name$.next('Dener Troquatte $$')

    this.#apiService.name.set('Dener Troquatte 2')
    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000)
  }
}
