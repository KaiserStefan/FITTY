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
  private body;
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

  private test1;
  private test2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad Prototyp1Page');
    }

  drawTamagotchi(uberx, ubery) {
    this.parentcontainer = new createjs.Container();

    this.body = new createjs.Container();
    this.head = new createjs.Container();

    this.schedel = new createjs.Shape();

    function drawSchedel(schedel, colorbrown, x, y) {
      schedel.x = x;
      schedel.y = y;
      schedel.graphics
        .beginFill(colorbrown).beginStroke("black")
        .setStrokeStyle(20)
        .drawEllipse(0, 0, 1500, 1250)
        .endStroke();
    }

    drawSchedel(this.schedel, this.colorbrown, 400, 500);

    this.leftear = new createjs.Shape();
    this.leftearouter = new createjs.Shape();

    function drawleftear(leftear, leftouterear, xa, ya, xb, yb, colorbrown) {
      leftear.graphics.beginStroke("black").beginFill("white")
        .setStrokeStyle(20).moveTo(xa, ya)/*720,640*/
        .quadraticCurveTo(xa - 70, ya - 70, xa - 70, ya - 180)
        .quadraticCurveTo(xa - 70, ya - 290, xa + 80, ya - 230)
        .quadraticCurveTo(xa + 200, ya - 170, xa + 230, ya - 60)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke()
      ;
      leftouterear.graphics.beginStroke("black").beginFill(colorbrown)
        .setStrokeStyle(20).moveTo(xb, yb)/*660,680*/
        .quadraticCurveTo(xb - 120, yb - 110, xb - 105, yb - 245)
        .quadraticCurveTo(xb - 20, yb - 480, xb + 230, yb - 330)
        .quadraticCurveTo(xb + 400, yb - 210, xb + 360, yb - 100)
        //.bezierCurveTo(100,100,200,200,500,500)
        //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
        .endStroke();
    }

    drawleftear(this.leftear, this.leftearouter, 720, 640, 660, 680, this.colorbrown);

    this.rightear = new createjs.Shape();
    this.rightear.graphics.beginStroke("black").beginFill("white")
      .setStrokeStyle(20).moveTo(1520, 640)
      .quadraticCurveTo(1440, 570, 1560, 430)
      .quadraticCurveTo(1690, 330, 1735, 500)
      .quadraticCurveTo(1750, 600, 1680, 700)
      //.bezierCurveTo(100,100,200,200,500,500)
      //.arc(0, 0,70,0, ((Math.PI*2)/360)*170, 1);
      .endStroke()
    ;

    this.rightearouter = new createjs.Shape();
    this.rightearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(1400, 640)
      .bezierCurveTo(1420, 180, 2050, 220, 1750, 750)
      .endStroke()
    ;

    this.lefteye = new createjs.Shape();
    this.lefteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
      .drawEllipse(0, 0, 350, 300);
    this.lefteye.x = 625;
    this.lefteye.y = 800;
    this.righteye = new createjs.Shape();
    this.righteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
      .drawEllipse(0, 0, 350, 300);
    this.righteye.x = 1175;
    this.righteye.y = 800;

    this.leftpupil = new createjs.Shape();
    this.leftpupil.graphics.beginFill("black").drawEllipse(0, 0, 110, 180);
    this.leftpupil.x = 710;
    this.leftpupil.y = 850;
    this.leftpupil.rotation = 18;

    this.rightpupil = new createjs.Shape();
    this.rightpupil.graphics.beginFill("black").drawEllipse(0, 0, 110, 180);
    this.rightpupil.x = 1290;
    this.rightpupil.y = 850;
    this.rightpupil.rotation = 18;

    this.nose = new createjs.Shape();
    this.nose.graphics.beginFill("black").drawCircle(0, 0, 70);
    this.nose.x = 1050;
    this.nose.y = 1200;

    this.mouth = new createjs.Shape();
    this.lip = new createjs.Shape();

    this.mouth.graphics.beginStroke("black")
      .setStrokeStyle(20)
      .beginFill("#701228")
      .moveTo(980, 1320)
      .bezierCurveTo(1000, 1390, 1120, 1410, 1150, 1350)
      .bezierCurveTo(1200, 1580, 870, 1560, 980, 1320)
      .closePath().endFill()
      .endStroke()
    ;
    this.lip.graphics.beginStroke("black").beginFill("#DD4368")
      .setStrokeStyle(20).moveTo(960, 1430)
      .bezierCurveTo(1010, 1420, 1050, 1425, 1138, 1460)
      .bezierCurveTo(1090, 1540, 990, 1530, 960, 1430)
      .endStroke()
    ;

    this.bauch = new createjs.Shape();
    this.bauch.graphics
      .beginStroke("black").setStrokeStyle(20).beginFill(this.colorbrown)
      .drawRoundRectComplex(720, 1400, 850, 900, 0, 0, 20, 20)
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
      .setStrokeStyle(20).moveTo(550, 1450)
      .bezierCurveTo(250, 1800, 600, 2000, 800, 1500)
      .setStrokeStyle(15)
      .moveTo(450, 1770)
      .lineTo(490, 1700)
      .moveTo(470, 1780)
      .lineTo(510, 1710)
      .moveTo(490, 1790)
      .lineTo(530, 1720)
      .endStroke()
    ;
    this.pawright.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(1400, 1450)
      .bezierCurveTo(1150, 2000, 1750, 2200, 1550, 1500)
      .setStrokeStyle(15)
      .moveTo(1450, 1945)
      .lineTo(1440, 1860)
      .moveTo(1480, 1955)
      .lineTo(1470, 1850)
      .moveTo(1510, 1955)
      .lineTo(1500, 1845)
      .endStroke()
    ;
    this.footleft.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(650, 2200)
      .bezierCurveTo(400, 2400, 700, 2600, 800, 2300)
      .setStrokeStyle(15)
      .moveTo(560, 2400)
      .lineTo(605, 2345)
      .moveTo(580, 2420)
      .lineTo(630, 2365)
      .moveTo(605, 2440)
      .lineTo(655, 2380)
      .endStroke()
    ;
    this.footright.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(1300, 2200)
      .bezierCurveTo(1250, 2600, 1750, 2600, 1490, 2250)
      .setStrokeStyle(15)
      .moveTo(1500, 2500)
      .lineTo(1460, 2450)
      .moveTo(1530, 2500)
      .lineTo(1480, 2435)
      .moveTo(1550, 2480)
      .lineTo(1505, 2420)
      .endStroke()
    ;


    this.body.addChild(this.bauch);
    this.head.addChild(this.leftearouter, this.rightearouter, this.leftear, this.rightear, this.schedel, this.lefteye,
      this.righteye, this.leftpupil, this.rightpupil, this.nose, this.mouth, this.lip);

    this.parentcontainer.addChild(this.footleft, this.footright, this.body, this.pawleft, this.pawright, this.head);
    this.parentcontainer.x = uberx-390;
    this.parentcontainer.y = ubery-282;
    this.stage.addChild(this.parentcontainer);
  }

    ionViewDidEnter() {
      this.stage = new createjs.Stage("demoCanvasfitty");

      this.drawTamagotchi(0,0);
      /*
      this.test2 = new createjs.Container();
      this.test1 = new createjs.Shape();
      this.test1.graphics.moveTo(500,500).setStrokeStyle(20)
        .beginStroke("black").lineTo(1000,1000).endStroke();
      this.test2.addChild(this.test1);
      this.stage.addChild(this.test2);*/

      console.log("fuck");
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", this.stage);
    }
  }
