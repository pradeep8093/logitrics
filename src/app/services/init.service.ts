import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InitService {

  constructor() {}

  isInitialized() {
    return window.localStorage.getItem('$isInitialized') === 'true';
  }

  initialize(payload) {
    if (!this.isInitialized()) {
      window.localStorage.setItem('$isInitialized', 'true');
      window.localStorage.setItem('$siteId', payload && payload.siteId);
    }
  }
}
