import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersService } from './services/users.service';
import { UserModel } from './models/user.model';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('To_Do_List');

public users = signal<UserModel[]>([]);

  private usersService = inject(UsersService);

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users.set(data);
      console.log(data)
    });
  }
    public selectedUser: UserModel | null = null;

  public updateSelectedUser(user: UserModel) {
    this.selectedUser = user;
  }
}
