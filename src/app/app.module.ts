import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddItemPageModule } from './add-item/add-item.module';
import { ItemDetailPageModule } from './item-detail/item-detail.module';
import { DataService } from '../app/data.service';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
  IonicStorageModule.forRoot({
      name: 'todo',
        driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
  AppRoutingModule, AddItemPageModule, ItemDetailPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
