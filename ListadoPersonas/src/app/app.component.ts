import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Aplicacion de Personas';

 personas: Persona[]=[
    new Persona('Esteban', 'Ramirez', 16),
    new Persona('Norman', 'Ramirez', 27),
    new Persona('Julian', 'Alcantara', 15),
    new Persona('Mauricio', 'Barrera', 35),
    new Persona('Jhon', 'Roa', 24),
    new Persona('Camilo', 'Torrez', 36)];


      nombreInput:string='';
      apellidoInput:string='';
      edadInput: number=0;

  
AgregarPersona(){
  let persona1= new Persona(this.nombreInput, this.apellidoInput, this.edadInput);
  this.personas.push(persona1);

}

}
