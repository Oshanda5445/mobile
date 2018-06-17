import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditpswPage } from '../editpsw/editpsw';
import { RatePage } from '../rate/rate'

@Component({
  selector: 'page-editprof',
  templateUrl: 'editprof.html'
})
export class EditprofPage {

  constructor(
  public navCtrl: NavController,
  ) { }

  goToSecondPage(){
  	console.log("second page")
  	this.navCtrl.push(EditpswPage)
  }
  openrate(){
  	console.log("rate page")
  	this.navCtrl.push(RatePage)
  }
}
