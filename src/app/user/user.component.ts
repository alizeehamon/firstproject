import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user?: User;

  userForm = this.fb.group({
  username: new FormControl('', Validators.required),
  credentials:this.fb.group({
  email: new FormControl('', Validators.email),
  password: new FormControl('', Validators.required),
  }),
  address:this.fb.group({
    street: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.userForm.value);
    this.user = new User(this.userForm.value.username?? '', this.userForm.value.credentials?.email?? '', this.userForm.value.credentials?.password?? '', this.userForm.value.address?.street?? '', this.userForm.value.address?.postCode?? '', this.userForm.value.address?.street?? '');
  }
}
