import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (localStorage.getItem('ingresado')) {
      // Verificar el tipo de usuario y redirigir a la página correspondiente
      const tipoUsuario = localStorage.getItem('tipoUsuario'); // Asume que guardas el tipo de usuario en el localStorage

      if (tipoUsuario === 'estudiante') {
        await this.navCtrl.navigateRoot(['home-estudiante']);
      } else if (tipoUsuario === 'profesor') {
        await this.navCtrl.navigateRoot(['home-profesor']);
      }
      // Después de la redirección, puedes devolver false o un UrlTree si es necesario.
      // En este ejemplo, simplemente devolvemos false.
      return false;
    } else {
      // Si el usuario no ha ingresado, permite el acceso a la ruta
      return true;
    }
  }
}
