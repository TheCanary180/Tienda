import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ClientePage } from '../pages/Clientes/clientes';
import { JeremyPage } from '../pages/jeremy/jeremy';
import { EditarPage } from '../pages/editar/editar';
import { CarlosPage } from '../pages/carlos/carlos';
import { AnaPage } from '../pages/ana/ana';
import { MariaPage } from '../pages/maria/maria';
import { EmpleadoPage } from '../pages/Empleado/empleado';
import { TextosPage } from '../pages/textos/textos';
import { NorteComputerPage } from '../pages/NorteComputer/nortecomputer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ClientePage,
    JeremyPage,
    EditarPage,
    CarlosPage,
    AnaPage,
    MariaPage,
    EmpleadoPage,
    TextosPage,
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
    ItemDetailsPage,
    ClientePage,
    JeremyPage,
    EditarPage,
    CarlosPage,
    AnaPage,
    MariaPage,
    EmpleadoPage,
    TextosPage,
    NorteComputerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
