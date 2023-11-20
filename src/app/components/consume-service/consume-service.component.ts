import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

// Service
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

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

  public getTaskList = this.#apiService.getTaskList;
  public getTaskId = this.#apiService.getTaskId;

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$('xmmppv1sO2yZBdMYqNcn').subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }
}
