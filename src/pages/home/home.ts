import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  htmlContent: string = 'In App Browser implementation. <a href="https://www.google.com">Open Google</a>';

  constructor(public navCtrl: NavController) { }

}
