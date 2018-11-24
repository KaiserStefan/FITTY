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

  private bauch;

  private mouth;
  private lip;

  private pawleft;
  private pawright;
  private footleft;
  private footright;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad Prototyp1Page');
    }


    ionViewDidEnter() {
      this.stage = new createjs.Stage("demoCanvas");
      this.parentcontainer = new createjs.Container();
      this.body = new createjs.Container();
      this.head = new createjs.Container();

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
        .quadraticCurveTo(1440,570,1560,430)
        .quadraticCurveTo(1690,330,1735,500)
        .quadraticCurveTo(1750,600,1680,700)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;
      /*
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
      */

      this.rightearouter = new createjs.Shape();
      this.rightearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(1400,640)
        .bezierCurveTo(1420,180,2050,220,1750,750)
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
      this.rightpupil.x = 1290;
      this.rightpupil.y = 850;
      this.rightpupil.rotation = 18;

      this.nose = new createjs.Shape();
      this.nose.graphics.beginFill("black").drawCircle(0,0,70);
      this.nose.x =1050;
      this.nose.y =1200;

      this.mouth = new createjs.Shape();
      this.lip = new createjs.Shape();

      this.mouth.graphics.beginStroke("black")
        .setStrokeStyle(20)
        .beginFill("#701228")
        .moveTo(980,1320)
        .bezierCurveTo(1000,1390,1120,1410,1150,1350)
        .bezierCurveTo(1200,1580,870,1560,980,1320)
        .endFill()
        .endStroke()
      ;
      this.lip.graphics.beginStroke("black").beginFill("#DD4368")
        .setStrokeStyle(20).moveTo(960,1430)
        .bezierCurveTo(1010,1420,1050,1425,1138,1460)
        .bezierCurveTo(1090,1540,990,1530,960,1430)
        .endStroke()
      ;

      this.bauch = new createjs.Shape();
      this.bauch.graphics
        .beginStroke("black").setStrokeStyle(20).beginFill(this.colorbrown)
          .drawRoundRectComplex(720,1400,850,900,0,0,20,20)
        /*
        .lineTo(780,2300)
        .arcTo(770,2310,790,2300,10)
        */;
      this.bauch.rotation = 2;

      this.pawleft = new createjs.Shape();
      this.pawright = new createjs.Shape();
      this.footleft = new createjs.Shape();
      this.footright = new createjs.Shape();
      this.pawleft.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(550,1450)
        .bezierCurveTo(250,1800,600,2000,800,1500)
        .endStroke()
      ;
      this.pawright.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(1400,1450)
        .bezierCurveTo(1150,2000,1750,2200,1550,1500)
        .endStroke()
      ;
      this.footleft.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(650,2200)
        .bezierCurveTo(400,2400,700,2600,800,2300)
        .endStroke()
      ;
      this.footright.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(1300,2200)
        .bezierCurveTo(1250,2600,1750,2600,1490,2250)
        .endStroke()
      ;



      this.body.addChild(this.bauch);
      this.head.addChild(this.leftearouter, this.rightearouter, this.leftear, this.rightear, this.schedel, this.lefteye,
        this.righteye, this.leftpupil, this.rightpupil, this.nose, this.mouth, this.lip);


      this.parentcontainer.addChild(this.footleft, this.footright, this.body, this.pawleft, this.pawright, this.head);

      this.stage.addChild(this.parentcontainer);

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", this.stage);
    }
  }
