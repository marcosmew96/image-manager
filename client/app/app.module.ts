import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({

  imports : [
    BrowserModule,
    FotoModule,
    PainelModule,
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
