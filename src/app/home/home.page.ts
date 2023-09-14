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
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      const usuario = JSON.parse(usuarioString);
      this.nombreUsuario = usuario.nombre;
    }
  }
}
