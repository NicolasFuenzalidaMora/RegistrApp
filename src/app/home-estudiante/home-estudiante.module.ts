// home-estudiante.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { HomeEstudiantePage } from './home-estudiante.page';
import { HomeEstudiantePageRoutingModule } from './home-estudiante-routing.module';
=======
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeEstudiantePageRoutingModule } from './home-estudiante-routing.module';
import { HomeEstudiantePage } from './home-estudiante.page';
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    IonicModule,
    ZXingScannerModule,
    HomeEstudiantePageRoutingModule
  ],
  declarations: [HomeEstudiantePage],
})
export class HomeEstudiantePageModule {}

=======
    FormsModule,
    IonicModule,
    HomeEstudiantePageRoutingModule
  ],
  declarations: [HomeEstudiantePage]
})
export class HomeEstudiantePageModule {}
>>>>>>> 379f2fbcd253a2fca49aaeaac4ed5ec9e0227e11
