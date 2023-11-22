import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEstudiantePage } from './home-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEstudiantePageRoutingModule {}
