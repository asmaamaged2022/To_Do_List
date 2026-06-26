import { Component, inject, input, signal } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { UserModel } from '../../models/user.model';
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  // public tasks = signal<TaskModel[]>([]);
  public currentUser = input.required<UserModel>();
  private tasksServices = inject(TasksService);
  public Popup: Boolean = false;
  // ngOnInit(): void {
  //   this.tasks.set(this.tasksServices.getTasks(this.currentUser().id));
  // }
  public get getTasks() {
    return this.tasksServices.getTasks(this.currentUser().id);
  }
  public showPopup() {
    this.Popup = !this.Popup;
  }
}
