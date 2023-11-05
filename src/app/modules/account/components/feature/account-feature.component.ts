import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/app/models/user.model';
import { UserService } from 'src/app/modules/app/shared/user-service';

@Component({
  selector: 'app-account-feature',
  templateUrl: './account-feature.component.html'
})
export class AccountFeaturesComponent implements OnInit {

  users : User[] = [];
  user! : User;
  constructor(public userService : UserService){

    }

    ngOnInit(): void {

      this.userService.getUsers().subscribe((users: User[]) => {
        this.users = users;
        this.getUser();
  }
);

  }


  getUser(): User{
    console.log(this.users[0])
    return this.user = this.users[0];
  }

}
