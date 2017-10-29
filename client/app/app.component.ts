import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({

  selector : 'app',
  templateUrl : './app/app.component.html'
})

export class AppComponent {

  private fotos : Object[] = [];

  constructor(private http : Http){

    this.http.get('v1/fotos').subscribe(res => {

        this.fotos = res.json();
        console.log(this.fotos);
    });
  }
}
