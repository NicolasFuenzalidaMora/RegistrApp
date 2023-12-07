import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(private router: Router) {}

<<<<<<< HEAD
  
=======
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean | UrlTree> | UrlTree {
    if (localStorage.getItem('ingresado')) {
      // Si el usuario ha ingresado, permite el acceso a la ruta
      return true;
    } else {
      // Si el usuario no ha ingresado, redirígelo a la ruta 'login' (ajusta la ruta según tu aplicación)
      return this.router.createUrlTree(['/bloqueo-ruta']);
    }
  }
}
