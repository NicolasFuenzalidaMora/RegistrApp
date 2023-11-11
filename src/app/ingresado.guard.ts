import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (localStorage.getItem('ingresado')) {
      // Si el usuario ha ingresado, permite el acceso a la ruta
      return true;
    } else {
      // Si el usuario no ha ingresado, redirígelo a la ruta 'login' (ajusta la ruta según tu aplicación)
      this.navCtrl.navigateRoot('bloqueo-ruta');
      return false;
    }
  }
}
