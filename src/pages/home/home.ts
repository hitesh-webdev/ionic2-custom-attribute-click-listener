import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  htmlContent: string = '';

  constructor(public navCtrl: NavController) { 

    setTimeout(() => {

      this.htmlContent = 'In App Browser implementation. <a href="https://www.google.com">Open Google</a>';

    }, 10000);

  }

}
