import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BrowserService {

  constructor() {}

  detectBrowserName(userAgentString) {

    // Detect Chrome
    if (userAgentString.indexOf('Chrome') > -1) {
      return 'Chrome';
    } else if (userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1) {
      return 'Internet Explorer';
    } else if (userAgentString.indexOf('Firefox') > -1) {
      return 'Firefox';
    } else if (userAgentString.indexOf('Safari') > -1) {
      return 'Safari';
    } else {
      return 'Others';
    }
  }

  getBrowserDetails() {
    let browserProperties = {};
    let userAgentString = navigator.userAgent;

    browserProperties['userAgent'] = userAgentString;
    browserProperties['browserName'] = this.detectBrowserName(userAgentString);
    return browserProperties;
  }
}
