// home-estudiante.page.ts
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.page.html',
  styleUrls: ['./home-estudiante.page.scss'],
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-50%)' }),
        animate('4s ease-in-out', style({ transform: 'translateX(50%)' })),
        animate('4s ease-in-out', style({ transform: 'translateX(-50%)' })),
        animate('4s ease-in-out', style({ transform: 'translateX(0,5%)' })),
      ]),
    ]),
  ],
})
export class HomeEstudiantePage implements OnInit {
  nombreUsuario: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Recupera el nombre del usuario del almacenamiento local
    const nombreUsuarioGuardado = localStorage.getItem('nombreUsuario');

    if (nombreUsuarioGuardado) {
      this.nombreUsuario = nombreUsuarioGuardado;
    }
  }

  comenzarActividad() {
    console.log('Actividad del estudiante comenzada');
  }

  cerrarSesion() {
    console.log('Sesión del estudiante cerrada');

    // Limpiar la información del usuario y redirigir a la página de inicio de sesión
    localStorage.removeItem('ingresado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('tipoUsuario');

    // Redirige a la página de inicio de sesión (ajusta la ruta según tu aplicación)
    this.navCtrl.navigateRoot('/login');
  }

  volver() {
    // Redirige a la página anterior (en este caso, la página de inicio de sesión)
    this.navCtrl.back();
  }
}
