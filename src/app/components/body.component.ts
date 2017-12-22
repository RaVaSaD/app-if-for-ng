import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar: Boolean = false;
  mostrarPersonajes: Boolean = false;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: String[] = ['Spiderman', 'Dr. Octopus', 'Misterio', 'Venom', 'Rhino' ];
}
