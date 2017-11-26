import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { PedidosPage } from "../Pedidos/pedidos";
import { CategoriasPage } from "../Categorias/categorias";
import { ComponentesPage } from "../Componentes/componentes";
import { ProveedorPage } from '../Proveedor/proveedor';
import { NorteComputerPage } from '../NorteComputer/nortecomputer';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl:NavController) {

  }
  Pedidos() {
    this.navCtrl.push(PedidosPage);
  }
  Categorias() {
    this.navCtrl.push(CategoriasPage);
  }

  Componentes() {
    this.navCtrl.push(ComponentesPage);
  }

  Proveedor() {
    this.navCtrl.push(ProveedorPage);
  }
  NorteComputer() {
    this.navCtrl.push(NorteComputerPage);
  }
}
