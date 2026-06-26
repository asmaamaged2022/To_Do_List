import { Injectable } from '@angular/core';
import { TaskInfoModel, TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks: TaskModel[] = [];

  constructor() {
    let storedData: string = localStorage.getItem('tasks') ?? JSON.stringify([]);
    this.tasks = JSON.parse(storedData);
  }
  public getTasks(userId: string): TaskModel[] {
    return this.tasks.filter((task) => task.userId == userId);
  }
  public addTask(task: TaskInfoModel, userId: string) {
    let newTask: TaskModel = {
      id: new Date().getTime().toString(),
      userId: userId,
      ...task,
    };
    this.tasks.push(newTask);
    this.updateLocalStorage();
  }
  public completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
    this.updateLocalStorage();
  }
  private updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
