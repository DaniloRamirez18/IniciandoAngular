import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sumador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sumador.component.html',
  styleUrl: './sumador.component.css'
})
export class SumadorComponent {
  title='Hola llego a la calculadora'
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  
sumar(): void{
this.resultado=this.operandoA + this.operandoB
}

}