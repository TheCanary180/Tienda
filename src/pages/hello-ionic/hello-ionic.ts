import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { JeremyPage } from "../jeremy/jeremy";
import { CarlosPage } from "../carlos/carlos";
import { AnaPage } from "../ana/ana";
import { MariaPage } from "../maria/maria";
import { NorteComputerPage } from '../NorteComputer/nortecomputer';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl:NavController) {

  }
  jeremy() {
    this.navCtrl.push(JeremyPage);
  }
  carlos() {
    this.navCtrl.push(CarlosPage);
  }

  ana() {
    this.navCtrl.push(AnaPage);
  }

  maria() {
    this.navCtrl.push(MariaPage);
  }
  NorteComputer() {
    this.navCtrl.push(NorteComputerPage);
  }
}
