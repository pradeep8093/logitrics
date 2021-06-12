import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { BrowserService } from 'src/app/services/browser.service'
import { UserContextService } from 'src/app/services/user-context.service'
import { InitService } from 'src/app/services/init.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'logitrics';
  eventProperties = {};

  constructor (
    private browserService: BrowserService,
    private userService: UserService,
    private userContextService: UserContextService,
    private initService: InitService
  ) {
    window['logitrics'] = this;
  }

  setEventTimeStamp() {
    this.eventProperties['$timestamp'] = new Date();
  }

  trackEvent(name, customEventProperties) {
    this.setEventTimeStamp();
    this.eventProperties['$email'] = this.userService.getEmail();
    this.eventProperties['$browser'] = this.browserService.getBrowserDetails();
    this.eventProperties['$name'] = name;
    this.eventProperties['$customEventProperties'] = customEventProperties;
    this.eventProperties['$context'] = this.userContextService.getUserContext();
    console.log(this.eventProperties);
  }

  initialize(payload) {
    this.initService.initialize(payload);
  }

  identifyUser(payload) {
    if (this.initService.isInitialized()) {
      this.userService.identifyUser(payload);
    } else {
      console.log("Logitrics is not initialized yet.")
    }
  }
}