import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
// import { EditarPage } from "../editar/editar";

@Component({
  selector: 'page-componentes',
  templateUrl: 'componentes.html'
})
export class ComponentesPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder) {
      this.inicializar();
      this.guardarDatos();
    }
  
    inicializar() {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]],
        precio: ['', [Validators.required]], 
        existencias: ['', [Validators.required]], 
        pedido: ['', [Validators.required]], 
        descuentos: ['', [Validators.required]],              
      });
    }
  
    grabarDatos() {
      this.presentAlert();
    }
  
    presentAlert() {
      const alert = this.alertCtrl.create({
        title: 'Low battery',
        subTitle: '10% of battery remaining',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    guardarDatos() {
      alert(JSON.stringify(this.myForm.value));
    }
  

}
