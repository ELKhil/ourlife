import { Component, OnInit } from '@angular/core';
import { UserForm } from '../Models/UserForm';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  users : UserForm [] =[];

  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {

      /* this._userService.get().subscribe(
        data=> this.users = data ); */
  }

}
