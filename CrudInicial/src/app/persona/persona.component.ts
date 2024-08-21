import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
nombre: string='Juan';
apellido: string='Perez';
edad: number=28;


/*
// los metodos se ponen de esta forma
//para llamarlos en el html, no olvidad los parentesis
getEdad(): number{
return this.edad;
}*/



}
