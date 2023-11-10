import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

function toUpperCase(value: string){
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Input: sem valor")

  @Input({
    // alias: "abacaxi",
    required: true,
    transform: toUpperCase
  }) set inputName(value: string){
    this.name.set(value);
  }
}
