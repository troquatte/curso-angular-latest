import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-opt-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './opt-image.component.html',
  styleUrl: './opt-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptImageComponent {}
