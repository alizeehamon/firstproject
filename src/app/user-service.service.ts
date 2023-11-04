import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private role: string = "USER";

  constructor() { }

  getRole(): string {
    return this.role;
  }
}
