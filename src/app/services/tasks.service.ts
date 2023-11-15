import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public name = signal('Dener Troquatte');
  public nameB$ = new BehaviorSubject('Dener Troquatte = Subject');

  constructor() {}
}
