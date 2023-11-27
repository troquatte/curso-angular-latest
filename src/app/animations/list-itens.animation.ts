import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listItensAnimation = trigger('list-itens', [
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
  transition('* => *', [
    query(':leave', [
      style({
        background: 'red',
      }),
      animate('1s', style({ opacity: 0 })),
    ]),
  ]),
]);
