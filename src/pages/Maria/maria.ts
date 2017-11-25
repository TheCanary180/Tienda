import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { EditarPage } from "../editar/editar";

@Component({
  selector: 'page-maria',
  templateUrl: 'maria.html'
})
export class MariaPage {
  [x: string]: any;
  DAM: boolean;
  DAW: boolean;
  ASIR: boolean;
  sexo: string;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.DAW = true;
    this.DAM = true;
    this.ASIR = true;
    this.sexo = "Mujer";
  }

  actualizaDAW() {
    this.AlertDaw();
  }
  AlertDaw() {
    let alert = this.alertCtrl.create({
      title: 'DAW',
      subTitle: 'Has estudiado DAW '+ this.DAW,
      buttons: ['OK']
    });
    alert.present();
  }
  
  actualizaDAM() {
    this.AlertDam();
  }
  AlertDam() {
    let alert = this.alertCtrl.create({
      title: 'DAM',
      subTitle: 'Has estudiado DAM ' + this.DAM,
      buttons: ['OK']
    });
    alert.present();
  }

  actualizaASIR() {
    this.AlertAsir();
  }
  AlertAsir() {
    let alert = this.alertCtrl.create({
      title: 'Asir',
      subTitle: 'Has estudiado Asir ' + this.ASIR,
      buttons: ['OK']
    });
    alert.present();
  }

  actualizarSexo(): void {
    this.AlertSexo();
  }
  AlertSexo() {
    let alert = this.alertCtrl.create({
      title: 'Sexo',
      subTitle: 'Eres ' + this.sexo,
      buttons: ['OK']
    });
    alert.present();
  }
  /*-----------------------------------------------------------------------------------------------------------------------*/
  editar() {
    this.navCtrl.push(EditarPage);
  }
}
