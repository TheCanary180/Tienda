import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
/*import { EditarPage } from "../editar/editar";*/

@Component({
  selector: 'page-textos',
  templateUrl: 'textos.html'
})
export class TextosPage {


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  Texto() {
    this.navCtrl.push(TextosPage);
  }
}
