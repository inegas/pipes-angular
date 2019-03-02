import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipes-angular';

  nombre:string = 'Angel';
  nombrePipe:string = 'ángel banegas garcía';

  nums:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  pcentaje = 0.234;

  objeto = {
    nombre: "HULIO",
    level: 99,
    fuerza: "SE LAS SABE TODAS",
    ulti:{
      R: "NO HA TOCADO UNA RAQUETA EN SU VIDA"
    }
  };

  Promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Me llamabas?'),1500);
  })

  date = new Date();

}
