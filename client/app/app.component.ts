import { Component , Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({

  selector : 'app',
  templateUrl : './app/app.component.html'
})

export class AppComponent {

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
