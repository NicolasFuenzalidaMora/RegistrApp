// home-estudiante.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.page.html',
  styleUrls: ['./home-estudiante.page.scss'],
})
export class HomeEstudiantePage implements OnInit {
  nombreUsuario: string = '';
  scannerEnabled: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Lógica para inicializar detalles del perfil del estudiante, si es necesario
    this.inicializarNombreUsuario();
  }

  inicializarNombreUsuario() {
    // Recupera el nombre del usuario del almacenamiento local
    const nombreUsuarioGuardado = localStorage.getItem('nombreUsuario');

    if (nombreUsuarioGuardado) {
      this.nombreUsuario = nombreUsuarioGuardado;
    }
  }

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
    localStorage.removeItem('ingresado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('tipoUsuario');

    // Redirige a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login');
  }
}
