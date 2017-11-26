import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ClientePage } from '../pages/Clientes/clientes';
import { ComponentesPage } from '../pages/Componentes/componentes';


import { PedidosPage } from '../pages/Pedidos/pedidos';
import { ProveedorPage } from '../pages/Proveedor/proveedor';
import { CategoriasPage } from '../pages/Categorias/categorias';

// import { MariaPage } from '../pages/maria/maria';
import { EmpleadoPage } from '../pages/Empleado/empleado';


import { NorteComputerPage } from '../pages/NorteComputer/nortecomputer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ClientePage,
    PedidosPage,
    ProveedorPage,
    CategoriasPage,
    ComponentesPage,
    EmpleadoPage,
    NorteComputerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ClientePage,
    PedidosPage,
    ProveedorPage,
    CategoriasPage,
    ComponentesPage,
    EmpleadoPage,
    NorteComputerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
