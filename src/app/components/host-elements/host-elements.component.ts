import { Component, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  // host: {
  //   role: 'button',
  //   '[attr.class]': 'class',
  //   '(document:keypress)': 'updateHostListener($event)',
  //   '(click)': 'updateClick()',
  // },
})
export class HostElementsComponent {
  @HostBinding('attr.class') public class = 'vidafullstack';

  @HostListener('document:keypress', ['$event'])
  public updateHostListener(envet: KeyboardEvent) {
    console.log(envet);
  }

  @HostListener('click', ['$event'])
  public updateClick() {
    alert('Dener Troquatte');
  }
}
