import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | null = null;

  username = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  password = new FormControl('', Validators.required);
  street = new FormControl('', Validators.required);
  postCode = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.user = new User(
      this.username.value ?? '',
      this.email.value ?? '',
      this.password.value ?? '',
      this.street.value ?? '',
      this.postCode.value ?? '',
      this.city.value ?? '',
    );
  }
}
