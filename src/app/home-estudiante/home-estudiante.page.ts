// home-estudiante.page.ts
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { trigger, style, animate, transition } from '@angular/animations';
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.page.html',
  styleUrls: ['./home-estudiante.page.scss'],
<<<<<<< HEAD
})
export class HomeEstudiantePage implements OnInit {
  nombreUsuario: string = '';
  scannerEnabled: boolean = false;
=======
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
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
<<<<<<< HEAD
    // Lógica para inicializar detalles del perfil del estudiante, si es necesario
    this.inicializarNombreUsuario();
  }

  
  inicializarNombreUsuario() {
=======
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
    // Recupera el nombre del usuario del almacenamiento local
    const nombreUsuarioGuardado = localStorage.getItem('nombreUsuario');

    if (nombreUsuarioGuardado) {
      this.nombreUsuario = nombreUsuarioGuardado;
    }
  }

<<<<<<< HEAD
  toggleScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }

  handleQrCodeResult(resultString: string) {
    // Manejar el resultado del escaneo del código QR
    console.log('Código QR escaneado:', resultString);

    // Puedes agregar lógica adicional según tus necesidades, como redirigir a una página específica
    // o realizar alguna acción basada en el resultado del escaneo.
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    console.log('Sesión del estudiante cerrada');

    // Limpia la información del usuario
=======
  comenzarActividad() {
    console.log('Actividad del estudiante comenzada');
  }

  cerrarSesion() {
    console.log('Sesión del estudiante cerrada');

    // Limpiar la información del usuario y redirigir a la página de inicio de sesión
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
    localStorage.removeItem('ingresado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('tipoUsuario');

<<<<<<< HEAD
    // Redirige a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login');
  }
=======
    // Redirige a la página de inicio de sesión (ajusta la ruta según tu aplicación)
    this.navCtrl.navigateRoot('/login');
  }

  volver() {
    // Redirige a la página anterior (en este caso, la página de inicio de sesión)
    this.navCtrl.back();
  }
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
}
