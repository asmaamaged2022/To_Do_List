import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  public userId = input.required<string>();
  public cancel = output<boolean>();
  public taskServices = inject(TasksService);
  public cancelPopup() {
    this.cancel.emit(true);
  }
  public addTask(ele: NgForm) {
    if (ele.invalid) return;
    this.taskServices.addTask(ele.value, this.userId());
    this.cancelPopup();
  }
}
