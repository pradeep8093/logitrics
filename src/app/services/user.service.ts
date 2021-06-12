import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() {}

  getEmail() {
    return window.localStorage.getItem('$email') ? window.localStorage.getItem('$email') : 'Anonymous';
  }

  identifyUser(payload) {
    window.localStorage.setItem('$user', JSON.stringify(payload));
    window.localStorage.setItem('$email', payload && payload.email);
  }
}
