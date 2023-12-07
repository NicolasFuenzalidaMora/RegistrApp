import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [NoIngresadoGuard] },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'bloqueo-ruta', loadChildren: () => import('./bloqueo-ruta/bloqueo-ruta.module').then(m => m.BloqueoRutaPageModule) },
  { path: 'error404', loadChildren: () => import('./error404/error404.module').then(m => m.Error404PageModule) },
  { path: 'home-estudiante', loadChildren: () => import('./home-estudiante/home-estudiante.module').then(m => m.HomeEstudiantePageModule), canActivate: [IngresadoGuard] },
  { path: 'home-profesor', loadChildren: () => import('./home-profesor/home-profesor.module').then(m => m.HomeProfesorPageModule), canActivate: [IngresadoGuard] },
  { path: '**', redirectTo: 'error404' },
];


<<<<<<< HEAD

=======
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

