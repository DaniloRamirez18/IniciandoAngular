import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { NgFor } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor, NgFor, PersonaComponent, FormularioComponent, FormsModule],
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


personaAgregada(persona: Persona){
this.personas.push(persona);

}

}
