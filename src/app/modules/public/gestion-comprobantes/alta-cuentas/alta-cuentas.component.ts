import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alta-cuentas',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './alta-cuentas.component.html',
  styleUrl: './alta-cuentas.component.scss'
})
export class AltaCuentasComponent {

}
