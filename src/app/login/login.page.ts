import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formulariologin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    // Restablecer los campos del formulario al entrar en la página
    this.formulariologin.reset();
  }

  async ingresar() {
    var f = this.formulariologin.value;

    if (!f.nombre || !f.contraseña) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Se debe llenar todos los campos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

    if (f.contraseña.length < 4 || f.contraseña.length > 8) {
      const alert = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña debe tener entre 4 y 8 caracteres.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);

      if (usuario.nombre === f.nombre && usuario.contraseña === f.contraseña) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create({
          header: 'Usuario inválido',
          message: 'El nombre de usuario y/o contraseña son incorrectos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    }
  }

  async recuperarContrasena() {
    const alert = await this.alertController.create({
      header: 'Recuperación de Contraseña',
      message: 'Ingrese su correo electrónico para recuperar su contraseña.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo Electrónico',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Recuperación de contraseña cancelada');
          },
        },
        {
          text: 'Enviar',
          handler: async (data) => {
            const email = data.email;

            // Aquí puedes agregar la lógica para enviar un correo de recuperación o realizar otras acciones necesarias
            // Puedes acceder al valor de 'email' y tomar medidas en consecuencia.

            const confirmationAlert = await this.alertController.create({
              header: 'Recuperación de Contraseña Enviada',
              message: `Hemos enviado instrucciones de recuperación a ${email}.`,
              buttons: ['Aceptar'],
            });
            await confirmationAlert.present();
          },
        },
      ],
    });
    await alert.present();
  }
}
