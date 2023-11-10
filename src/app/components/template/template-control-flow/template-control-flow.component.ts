import { Component } from '@angular/core';
import {
  CommonModule,
  AsyncPipe,
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue = true;
  public switchCondition = 'B';

  public itens: Array<{ name: string }> = [
    { name: 'Dener Troquatte' },
    { name: 'Maria' },
  ];

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFnV17(index: number, item?: { name: string }) {
    return index;
  }

  public trackByFn(index: number ) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
