import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';

// Rxjs
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Novo
  public name = signal('Dener Troquatte');

  // Antigo
  public name$ = new BehaviorSubject('Dener Troquatte $');

  // HTTP
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setTaskList = signal<ITask[] | null>(null);
  get getTaskList() {
    return this.#setTaskList.asReadonly();
  }
  public httpTaskList$(): Observable<ITask[]> {
    this.#setTaskList.set(null);
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setTaskList.set(res))
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskId.set(null);
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }

  public httpTaskCreate$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), { title }).pipe(shareReplay());
  }

  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    return this.#http
      .patch<ITask>(`${this.#url()}/${id}`, { title })
      .pipe(shareReplay());
  }

  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay());
  }
}
