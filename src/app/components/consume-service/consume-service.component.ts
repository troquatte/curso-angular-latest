import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public isLoading = signal(true);
  public getListTasksError = this.#apiService.getListTasksError;
  public getListTasks$ = this.#apiService.getListTasks$();

  public getTaskError = this.#apiService.getTaskError;
  public getTask$ = this.#apiService.getTask$('2PHbavJdUWIEGV0gdzrD');

  public createTaskError = this.#apiService.createTaskError;
  public updateTaskError = this.#apiService.updateTaskError;

  ngOnInit(): void {
    this.getListTasks$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  public createTask(title: string) {
    this.isLoading.set(false);
    this.#apiService
      .createTask$(title)
      .pipe(
        concatMap((res) => {
          this.getListTasks$ = this.#apiService.getListTasks$();
          this.getTask$ = this.#apiService.getTask$(res.id);
          return of(null);
        })
      )
      .subscribe({
        next: (next) => this.isLoading.set(true),
        error: (error) => this.isLoading.set(true),
      });
  }

  public updateTask(id: string, title: string) {
    this.isLoading.set(false);
    this.#apiService
      .updateTask$(id, title)
      .pipe(
        concatMap((res) => {
          this.getListTasks$ = this.#apiService.getListTasks$();
          this.getTask$ = this.#apiService.getTask$(res.id);
          return of(null);
        })
      )
      .subscribe({
        next: (next) => this.isLoading.set(true),
        error: (error) => this.isLoading.set(true),
      });
  }
}
