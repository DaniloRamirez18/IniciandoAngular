import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumadorComponent } from './sumador/sumador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SumadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicacion de sumatoria';
}
