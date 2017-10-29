import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({

  imports : [
    BrowserModule,
    FotoModule,
    HttpModule
  ],
  declarations : [
    AppComponent
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppModule {}
