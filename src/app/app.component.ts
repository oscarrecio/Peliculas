import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  peliculasEnCartelera: any;
  peliculasProximosEstrenos: any;

  ngOnInit(){
    
    setTimeout(()=>{
      this.peliculasEnCartelera = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date(),
        precio: 3710.99
      }];

      this.peliculasProximosEstrenos = [{
        titulo: 'Avengers EndGame',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'El Origen',
        fechaLanzamiento: new Date(),
        precio: 3710.99
      },
      {
        titulo: 'Blanca Nieves',
        fechaLanzamiento: new Date(),
        precio: 3710.99
      }];
    }, 800);
  }

  

}
