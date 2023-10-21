import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloqueoRutaPageRoutingModule } from './bloqueo-ruta-routing.module';

import { BloqueoRutaPage } from './bloqueo-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloqueoRutaPageRoutingModule
  ],
  declarations: [BloqueoRutaPage]
})
export class BloqueoRutaPageModule {}
