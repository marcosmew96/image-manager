import { Component} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId : module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html',
})
export class ListagemComponent {

  fotos : Object[] = [];

  constructor(private http : Http){

    this.http.get('v1/fotos')
      .map(res => res.json())
      .subscribe(foto => {
          this.fotos = foto;
          console.log(this.fotos);
    }, erro => console.error(erro));
  }
}
