import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';
  edadUno:string;
  edadDos:string;
  resultado:number = 0;
  promedioo:number = 0;

  HacerCambios()
  {
    this.title = "Cambiado";
  }
  suma()
  {
    this.resultado = parseInt(this.edadUno) + parseInt(this.edadDos);
  }
  promedio()
  {
    this.promedioo = (this.resultado / 2);
  }
  Realizar()
  {
    this.suma();
    this.promedio();
  }
}
