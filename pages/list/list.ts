import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private stage;
  private parentcontainer;
  private rectangle;
  private rect1;
  private rect2;
  private ball1;
  private ball2;
  private balling1;
  private balling2;

  private tween1;
  private tween2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad Prototyp1Page');
    }

    test(){
    this.tween1 = createjs.Tween.get(this.balling1, {loop: true})
        .to({ x: 140}, 2000, createjs.Ease.quadOut)
        .to({ x: 0, y: 140}, 2000, createjs.Ease.quadOut)
        .to({ x: 140, y: 140}, 2000, createjs.Ease.quadOut)
        .to({ x: 0, y: 0}, 2000, createjs.Ease.quadOut);

      this.tween2 = createjs.Tween.get(this.balling2, {loop: true})
        .to({ y: 140}, 1000, createjs.Ease.quadOut)
        .to({ x: 140, y: 140}, 1000, createjs.Ease.quadOut)
        .to({ x: 0, y: 0}, 1000, createjs.Ease.quadOut)
        .to({ x: 140, y: 0}, 1000, createjs.Ease.quadOut)
        .to({ x: 0, y: 140}, 1000, createjs.Ease.quadOut)
        .to({ x: 0, y: 0}, 1000, createjs.Ease.quadOut);
    }

    stop(){
      if (this.tween1.paused) {
        this.tween1.paused = false;
        this.tween1.setPaused(false);
      } else {
        this.tween1.paused = true;
        this.tween1.setPaused(true);
      }
      if (this.tween2.paused) {
        this.tween2.paused = false;
        this.tween2.setPaused(false);
      } else {
        this.tween2.paused = true;
        this.tween2.setPaused(true);
      }
    }

    ionViewDidEnter() {
      this.stage = new createjs.Stage("demoCanvas");

      this.parentcontainer = new createjs.Container();
      this.ball1 = new createjs.Container();
      this.ball2 = new createjs.Container();

      this.balling1 = new createjs.Shape();
      this.balling1.graphics
        .setStrokeStyle(5)
        .beginStroke("aquamarine")
        .beginFill("aquamarine")
        .drawCircle(130,130,25)
        .endFill()
        .endStroke();

      this.ball1.addChild(this.balling1);

      this.balling2 = new createjs.Shape();
      this.balling2.graphics
        .setStrokeStyle(5)
        .beginStroke("aquamarine")
        .beginFill("aquamarine")
        .drawCircle(430,130,25)
        .endFill()
        .endStroke();

      this.ball2.addChild(this.balling2);

      this.parentcontainer.x = 0;
      this.parentcontainer.y = 0;

      this.rect1 = new createjs.Shape();
      this.rect1.graphics
        .beginStroke("black")
        .setStrokeStyle(5)
        .drawRect(100, 100, 200,200)
        .endFill();
      this.rect2 = new createjs.Shape();
      this.rect2.graphics
        .beginStroke("black")
        .setStrokeStyle(5)
        .drawRect(400, 100, 200,200)
        .endStroke();

      this.rectangle = new createjs.Container();
      this.rectangle.addChild(this.rect1, this.rect2, this.ball1, this.ball2);

      this.parentcontainer.addChild(this.rectangle);

      this.stage.addChild(this.parentcontainer);

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", this.stage);
    }
  }
