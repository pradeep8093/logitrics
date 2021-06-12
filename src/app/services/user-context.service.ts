import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserContextService {

  constructor() {}

  getUserContext() {
    let userContextProperties = {}
    userContextProperties['title'] = window.document.title;
    userContextProperties['host'] = window.location.hostname;
    userContextProperties['url'] = window.location.href;
    userContextProperties['location'] = window.location;
    return userContextProperties;
  }
}
