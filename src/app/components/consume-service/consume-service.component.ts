import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { TasksService } from 'app/services/tasks.service';

// Component
import { NewComponent } from '@components/new-component/new-component.component';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  constructor(private _tasksService: TasksService) {}

  ngOnInit(): void {
    console.log(this._tasksService.name());
    this._tasksService.nameB$.subscribe({
      next: (next) => console.log(next),
    });
  }
}
