import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloqueoRutaPage } from './bloqueo-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: BloqueoRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloqueoRutaPageRoutingModule {}
