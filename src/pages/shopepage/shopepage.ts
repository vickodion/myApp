import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SlidePage }  from '../slide/slide';

@IonicPage()
@Component({
  selector: 'page-shopepage',
  templateUrl: 'shopepage.html',
})
export class ShopepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopepagePage');
  }
  goSlide() {
    this.navCtrl.push(SlidePage);
  }

}
