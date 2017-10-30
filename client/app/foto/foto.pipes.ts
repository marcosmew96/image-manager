import { Pipe , PipeTransform } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Pipe({
  name : 'filtro'
})

export class Filtro implements PipeTransform {

  transform(fotos : FotoComponent[], digitado : string) : FotoComponent[]{

    digitado = digitado.toLowerCase();
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
  }
}
