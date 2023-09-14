import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioregistro: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController : AlertController) { 
    this.formularioregistro = this.fb.group({
      "nombre": new FormControl ("",Validators.required),
      "contraseña": new FormControl ("",[Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      "confirmarcontraseña": new FormControl ("",[Validators.required, Validators.minLength(4), Validators.maxLength(8)])

    })
  }

  ngOnInit() {
  }
  async guardar() {
    const f = this.formularioregistro.value;
    const contraseña = f.contraseña;
    const confirmarcontraseña = f.confirmarcontraseña;

    if (this.formularioregistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Se debe llenar todos los campos',
        buttons: ['Ok'],
      });

      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      contraseña: f.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario))
    const successAlert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: '¡El registro ha sido exitoso!',
      buttons: ['Ok'],
    });

    await successAlert.present();
  }
  }
    
  
