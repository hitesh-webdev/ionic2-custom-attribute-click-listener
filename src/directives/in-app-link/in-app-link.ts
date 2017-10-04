import { Directive, HostListener } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Directive({
  selector: '[in-app-link]' // Attribute selector
})
export class InAppLinkDirective {

  options: InAppBrowserOptions = {
    location: 'yes',
    zoom: 'yes',
    hidden: 'no'
  };

  constructor(private inappbrowser: InAppBrowser) { }

  @HostListener('click', ['$event'])
  onClick(event) {

    console.log("Clicked");
    event.preventDefault();
    console.log(event.target);

    console.log(event.target.tagName.toLowerCase());
    console.log(event.target.hasAttribute('href'));

    if(event.target.tagName.toLowerCase() === 'a' && event.target.hasAttribute('href')) {

      this.inappbrowser.create(event.target.href, "_blank", this.options);

    }

  }

}
