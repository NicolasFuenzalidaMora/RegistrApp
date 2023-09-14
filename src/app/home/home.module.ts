import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module'; // Importa el módulo de enrutamiento si lo tienes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, // Agrega aquí el módulo de enrutamiento
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
