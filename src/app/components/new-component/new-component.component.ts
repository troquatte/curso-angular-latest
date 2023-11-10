import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponent {
  public name = 'New Component';
}
