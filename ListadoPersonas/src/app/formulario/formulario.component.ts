import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
@Output() personaCreada = 
new EventEmitter<Persona>();



  nombreInput:string='';
  apellidoInput:string='';
  edadInput: number=0;


AgregarPersona(){
let persona1= new Persona(this.nombreInput, this.apellidoInput, this.edadInput);
//his.personas.push(persona1);
this.personaCreada.emit(persona1);


}
}
