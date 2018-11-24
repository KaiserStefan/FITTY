import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

@Component({
  selector: 'page-fitty',
  templateUrl: 'fitty.html'
})
export class FittyPage {

  private colorbrown = "#936037";

  private stage;
  private parentcontainer;

  private head;
  private leftear;
  private leftearouter;
  private rightear;
  private rightearouter;
  private  body;
  private schedel;
  private lefteye;
  private righteye;
  private leftpupil;
  private rightpupil;
  private nose;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad Prototyp1Page');
    }


    ionViewDidEnter() {
      this.stage = new createjs.Stage("demoCanvas");

      this.schedel = new createjs.Shape();
      this.schedel.graphics
        .beginFill(this.colorbrown).beginStroke("black")
        .setStrokeStyle(20)
        .drawEllipse(0, 0, 1500,1250)
        .endStroke();
      this.schedel.x =400;
      this.schedel.y =500;

      this.leftear = new createjs.Shape();
      this.leftear.graphics.beginStroke("black").beginFill("white")
        .setStrokeStyle(20).moveTo(720,640)
        .quadraticCurveTo(650,570,650,480)
        .quadraticCurveTo(650,350,800,410)
        .quadraticCurveTo(920,470,950,580)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;
      this.leftearouter = new createjs.Shape();
      this.leftearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(660,680)
        .quadraticCurveTo(535,570,555,435)
        .quadraticCurveTo(640,200 ,890,350)
        .quadraticCurveTo(1060,470,1020,580)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;
      this.rightear = new createjs.Shape();
      this.rightear.graphics.beginStroke("black").beginFill("white")
        .setStrokeStyle(20).moveTo(1520,640)
        .quadraticCurveTo(1440,570,1550,430)
        .quadraticCurveTo(1690,320,1760,500)
        .quadraticCurveTo(1780,600,1700,700)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;
      this.rightearouter = new createjs.Shape();
      this.rightearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(1450,640)
        .quadraticCurveTo(1300,500,1550,350)
        .quadraticCurveTo(1750,260,1800,480)
        .quadraticCurveTo(1840,620,1750,750)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;

      this.lefteye = new createjs.Shape();
      this.lefteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
        .drawEllipse(0,0,350 ,300);
      this.lefteye.x =625;
      this.lefteye.y = 800;
      this.righteye = new createjs.Shape();
      this.righteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
        .drawEllipse(0,0,350 ,300);
      this.righteye.x =1175;
      this.righteye.y = 800;

      this.leftpupil = new createjs.Shape();
      this.leftpupil.graphics.beginFill("black").drawEllipse(0,0,110,180);
      this.leftpupil.x = 710;
      this.leftpupil.y = 850;
      this.leftpupil.rotation = 18;

      this.rightpupil = new createjs.Shape();
      this.rightpupil.graphics.beginFill("black").drawEllipse(0,0,110,180);
      this.rightpupil.x = 1280;
      this.rightpupil.y = 850;
      this.rightpupil.rotation = 18;

      this.nose = new createjs.Shape();
      this.nose.graphics.beginFill("black").drawCircle(0,0,70);
      this.nose.x =1050;
      this.nose.y =1200;

      this.head = new createjs.Container();
      this.head.addChild(this.leftearouter, this.rightearouter, this.leftear, this.rightear, this.schedel, this.lefteye,
        this.righteye, this.leftpupil, this.rightpupil, this.nose);

      this.body = new createjs.Container();


      this.parentcontainer = new createjs.Container();
      this.parentcontainer.addChild(this.body, this.head);

      this.stage.addChild(this.parentcontainer);

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", this.stage);
    }
  }
