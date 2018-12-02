import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

/**
 * Generated class for the KraftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kraft',
  templateUrl: 'kraft.html',
})
export class KraftPage {

  private stage;
  private parentcontainer;
  private obj1;
  private obj2;
  private obj3;
  private obj4;
  private colorb ="#695972";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  drawkraftbackground() {
    this.parentcontainer = new createjs.Container();

    this.obj1 = new createjs.Shape();
    this.obj1.graphics.moveTo(10,10)
      .beginStroke("black")
      .setStrokeStyle(15)
      .lineTo(100,100);


    this.parentcontainer.addChild(this.obj1);
    this.stage.addChild(this.parentcontainer);
  }

  ionViewDidLoad() {
    }
  ionViewDidEnter() {
    this.stage = new createjs.Stage("demoCanvas");
    this.drawkraftbackground();
    console.log('ionViewDidLoad KraftPage');
  }

}
