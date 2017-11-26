import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ClientePage } from '../pages/Clientes/clientes';
import { EmpleadoPage } from '../pages/Empleado/empleado';
import { PedidosPage } from '../pages/Pedidos/pedidos';
import { ProveedorPage } from '../pages/Proveedor/proveedor';
import { ComponentesPage } from '../pages/Componentes/componentes';
import { CategoriasPage } from '../pages/Categorias/categorias';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Inicio', component: HelloIonicPage },
      { title: 'Cliente', component: ClientePage },      
      { title: 'Empleados', component: EmpleadoPage },
      { title: 'Componentes', component: ComponentesPage },
      { title: 'Categoria', component: CategoriasPage },
      { title: 'Proveedor', component: ProveedorPage },
      { title: 'Pedidos', component: PedidosPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
