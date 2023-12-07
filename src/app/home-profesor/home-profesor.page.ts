// home-profesor.page.ts
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
import * as QRCode from 'qrcode';
=======
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
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
export class HomeProfesorPage implements OnInit {
  nombreUsuario: string = '';
  animationState = 'start';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Lógica para inicializar detalles del perfil del profesor, si es necesario
    this.inicializarNombreUsuario();
  }

  inicializarNombreUsuario() {
    // Recupera el nombre del usuario del almacenamiento local
    const nombreUsuarioGuardado = localStorage.getItem('nombreUsuario');

    if (nombreUsuarioGuardado) {
      this.nombreUsuario = nombreUsuarioGuardado;
    }
  }

  comenzarClase() {
    // Lógica para comenzar una clase
    console.log('Clase del profesor comenzada');
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    console.log('Sesión del profesor cerrada');

    // Limpia la información del usuario
    localStorage.removeItem('ingresado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('tipoUsuario');

    // Redirige a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login');
  }
<<<<<<< HEAD

  generarCodigoQR() {
    const contenidoQR = 'Informacion que quieres en el QR';
    const opcionesQR: QRCode.QRCodeRenderersOptions = {
      errorCorrectionLevel: 'H',
    };

    QRCode.toCanvas(
      document.getElementById('canvasQR') as HTMLCanvasElement,
      contenidoQR,
      opcionesQR,
      function (error: Error | null | undefined) {
        if (error) {
          console.error(error);
        }
        console.log('Código QR generado correctamente');
      }
    );
  }
=======
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
}
