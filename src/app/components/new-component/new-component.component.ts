import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, delay, of } from 'rxjs';
import { TasksService } from 'app/services/tasks.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponent implements OnInit {
  public name = 'New Component';
  constructor(private _tasksService: TasksService) {}

  ngOnInit(): void {
    console.log(this._tasksService.name());

    this._tasksService.nameB$.subscribe({
      next: (next) => console.log(next),
    });
  }
}
