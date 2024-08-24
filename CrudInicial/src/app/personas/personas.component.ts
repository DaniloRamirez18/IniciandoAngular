import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormsModule,NgFor, CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje='No se ha agregado ninguna persona';
  titulo='Prueba de testeo';
mostrar=false;


AgregarPersona(){
  this.mostrar= true;
this.mensaje='Persona Agregada';

}
/*
Esto debe ir en el html
			      ----      <input type="text" class="form-control" (input)="modificarTitulo($event)">
            
            ----      {{titulo}}
			


modificarTitulo(event: Event){
  console.log('Entrando a metodo modificar titulo');
  //se esta capturando el valor que se recibe del input como valor de html y se le hace cast para tomarlo como dato
this.titulo=(<HTMLInputElement>event.target).value;
}*/

}
