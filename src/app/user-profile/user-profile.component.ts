import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = new User();
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name : 'Doe',
      firstName : 'John',
      age : 25,
      quote : '',
      photo : 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png'
    };
  }

  hideAge(){
    this.show = !this.show;
  }

}
