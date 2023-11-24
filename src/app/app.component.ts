import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AlertaComponent } from './alerta/alerta.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TarjetaComponent, AlertaComponent, CardComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'Hola Mundo de Angular';
  public contador: number = 10;
  public textoPersonalizado: String = "Texto personalizado"


  Incrementar(value: number): void {
    // this.contador += value;
    this.contador = this.contador >= 10 ? this.contador : 10;

    // if (this.contador < 10) {
    //   this.contador = 10;
    //   alert("El contador siempre debe ser igual o mayor a 10")
    // }

  }
}
