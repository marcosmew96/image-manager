import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { routing } from './app.routes';

@NgModule({

  imports : [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpModule,
    routing,
    FormsModule
  ],
  declarations : [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppModule {}
