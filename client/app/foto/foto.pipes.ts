import { Pipe } from '@angular/core';

@Pipe({
  name : 'filtro'
})
export class Filtro {

  transforma(fotos, digitado){

    console.log(fotos);
    console.log(digitado);
  }
}
