import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/app/models/user.model';
import { UserService } from 'src/app/modules/app/shared/user-service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin-feature.component.html'
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
