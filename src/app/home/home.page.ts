import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('titleAnimation', [
      transition('* => start', [
        style({ transform: 'translateX(-50%)' }),
        animate('4s ease-in-out', style({ transform: 'translateX(50%)' })),
        animate('4s ease-in-out', style({ transform: 'translateX(-50%)' })),
        animate('4s ease-in-out', style({ transform: 'translateX(0,5%)' })),
      ]),
    ]),
  ],
})
export class HomePage implements OnInit {
  nombreUsuario: string = '';
  animationState = 'start';

  constructor() {}

  ngOnInit() {
    // Recupera el nombre del usuario del almacenamiento local
    const nombreUsuarioGuardado = localStorage.getItem('nombreUsuario');
  
    if (nombreUsuarioGuardado) {
      this.nombreUsuario = nombreUsuarioGuardado; // Establece el nombre del usuario en la variable
    }
  }
  
}
