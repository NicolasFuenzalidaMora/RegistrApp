// home-estudiante.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { HomeEstudiantePage } from './home-estudiante.page';
import { HomeEstudiantePageRoutingModule } from './home-estudiante-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ZXingScannerModule,
    HomeEstudiantePageRoutingModule
  ],
  declarations: [HomeEstudiantePage],
})
export class HomeEstudiantePageModule {}
