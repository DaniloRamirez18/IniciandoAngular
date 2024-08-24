import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor ],
   templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona('Juan' , 'Patiño',35 ), 
    new Persona('Camilo' , 'Vargas', 58), 
    new Persona('Jairo' , 'Estupiñan', 75), 
    new Persona('Luis' , 'Salvatierra', 15)];

}
