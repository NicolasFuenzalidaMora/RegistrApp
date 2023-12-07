import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bloqueo-ruta',
  templateUrl: './bloqueo-ruta.page.html',
  styleUrls: ['./bloqueo-ruta.page.scss'],
})
export class BloqueoRutaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  redirigirALogin() {
    // Utiliza navCtrl para redirigir al usuario a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login');
  }
}
