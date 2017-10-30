import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Filtro } from './foto.pipes';

@NgModule({

  declarations : [ FotoComponent , Filtro],
  exports : [ FotoComponent , Filtro ]

})

export class FotoModule {

}
