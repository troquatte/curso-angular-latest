import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state(
        'move-left',
        style({
          transform: 'scale(1) translateX(0) rotate(0deg)',
        })
      ),
      state(
        'move-right',
        style({
          transform: 'scale(0.7) translateX(500px) rotate(360deg)',
        })
      ),
      transition('move-left <=> move-right', animate('1s ease-in-out')),
      transition(':enter', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 0,
              transform: 'scale(1) translateX(0px) rotate(0deg)',
            }),
            style({
              opacity: 0.5,
              transform: 'scale(0.9) translateX(250px) rotate(180deg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(500px) rotate(360deg)',
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(500px) rotate(360deg)',
            }),
            style({
              opacity: 0.5,
              transform: 'scale(0.9) translateX(250px) rotate(180deg)',
            }),
            style({
              opacity: 0,
              transform: 'scale(1) translateX(0px) rotate(0deg)',
            }),
          ])
        ),
      ]),
      transition('* => move-right', animate('5s 1s ease-in-out')),
      transition('* => move-left', animate('1s')),
    ]),
    trigger('list-itens', [
      transition(':enter', [
        query('li', [
          style({
            background: 'yellow',
            transform: 'translateY(100px)',
          }),
          stagger('700ms', [animate('1s')]),
          // group([
          //   animate(
          //     '1s',
          //     style({
          //       background: 'red',
          //     })
          //   ),
          //   animate(
          //     '2s',
          //     style({
          //       background: 'blue',
          //     })
          //   ),
          //   animate(
          //     '7s',
          //     style({
          //       background: 'none',
          //       transform: 'translateY(0)',
          //     })
          //   ),
          //   animate(
          //     '1s',
          //     style({
          //       transform: 'translateY(100px)',
          //     })
          //   ),
          // ]),
          // sequence([
          //   animate(
          //     '1s',
          //     style({
          //       background: 'red',
          //     })
          //   ),
          //   animate(
          //     '2s',
          //     style({
          //       background: 'blue',
          //     })
          //   ),
          //   animate(
          //     '7s',
          //     style({
          //       background: 'none',
          //       transform: 'translateY(0)',
          //     })
          //   ),
          //   animate(
          //     '1s',
          //     style({
          //       transform: 'translateY(100px)',
          //     })
          //   ),
          // ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationsComponent {
  public moveIn = signal('');
}
