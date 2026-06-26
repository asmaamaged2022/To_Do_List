import { Component, inject, input } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  public task = input.required<TaskModel>();
  private tasksServices = inject(TasksService);
  public complete(id: string) {
    this.tasksServices.completeTask(id);
  }
}
