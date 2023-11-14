import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-pai-ou-mae',
  standalone: true,
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.scss',
})
export class PaiOuMaeComponent {
  public name = signal('Dener Troquatte');
  public outputName = signal('Output: sem valor');
}
