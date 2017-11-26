import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// import { ItemDetailsPage } from '../item-details/item-details';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-empleados',
  templateUrl: 'empleado.html'
})
export class EmpleadoPage {
  myForm: FormGroup;
  
  
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder) {
      this.inicializar();
      this.guardarDatos();
    }
  
    inicializar() {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        edad: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        provincia: ['', [Validators.required]],
        pais: ['', [Validators.required]],
        email: ['', [Validators.required]],
        codigopostal: ['', [Validators.required]],
        telefono: ['', [Validators.required]],  
        turno: ['', [Validators.required]],
        puesto: ['', [Validators.required]],
        contratacion: ['', [Validators.required]],        
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
