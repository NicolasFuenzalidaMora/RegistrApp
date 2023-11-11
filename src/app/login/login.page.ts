import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController, private router: Router) {
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
    const f = this.formulariologin.value;

    if (!f.nombre || !f.contraseña) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Se debe llenar todos los campos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.formulariologin.reset(); // Limpiar los campos si hay un error
      return;
    }

    if (f.contraseña.length < 4 || f.contraseña.length > 8) {
      const alert = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña debe tener entre 4 y 8 caracteres.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.formulariologin.reset(); // Limpiar los campos si hay un error
      return;
    }

    const nombreUsuario = f.nombre; // Agrega la extensión de correo electrónico

    const usuariosString = localStorage.getItem('usuarios');

    if (usuariosString !== null) {
      const usuarios = JSON.parse(usuariosString);

      // Comprueba si hay un usuario con el nombre de usuario y la contraseña ingresados
      const usuario = usuarios.find((u: Usuario) => u.nombre === nombreUsuario && u.contraseña === f.contraseña);

      if (usuario) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        localStorage.setItem('nombreUsuario', nombreUsuario); // Almacena el nombre del usuario si el inicio de sesión fue exitoso
        this.navCtrl.navigateRoot('/home');
      } else {
        const alert = await this.alertController.create({
          header: 'Usuario inválido',
          message: 'El nombre de usuario y/o contraseña son incorrectos',
          buttons: ['Aceptar'],
        });
        await alert.present();
        this.formulariologin.reset(); // Limpia los campos si hay un error
      }
      
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario inválido',
        message: 'El nombre de usuario y/o contraseña son incorrectos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.formulariologin.reset(); // Limpiar los campos si hay un error
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

interface Usuario {
  nombre: string;
  contraseña: string;
}
