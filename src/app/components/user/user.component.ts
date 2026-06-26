import { Component, input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  public user = input.required<UserModel>();
  public isSelected=input.required<Boolean>() ;

}
