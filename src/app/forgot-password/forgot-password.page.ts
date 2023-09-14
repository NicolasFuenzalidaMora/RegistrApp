import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formRecuperarContrasena: FormGroup;
  formNuevaContrasena: FormGroup;
  usuarioEncontrado = false;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private modalController: ModalController,
    private router: Router
  ) {
    this.formRecuperarContrasena = this.fb.group({
      nombreUsuario: ['', Validators.required],
    });

    this.formNuevaContrasena = this.fb.group({
      nuevaContrasena: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }

  ngOnInit() {}

  async recuperarContrasena() {
    const nombreUsuario = this.formRecuperarContrasena.get('nombreUsuario')!.value;
  
    // Verificar si el nombre de usuario existe (puedes usar localStorage o tu lógica de datos)
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      const usuario = JSON.parse(usuarioString);
      if (usuario.nombre === nombreUsuario) {
        this.usuarioEncontrado = true;
  
        // Mostrar un cuadro de diálogo para ingresar la nueva contraseña
        const alert = await this.alertController.create({
          header: 'Nueva Contraseña',
          message: 'Ingrese su nueva contraseña:',
          inputs: [
            {
              name: 'nuevaContrasena',
              type: 'password',
              placeholder: 'Nueva Contraseña',
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Cancelar');
              },
            },
            {
              text: 'Guardar',
              handler: async (data) => {
                const nuevaContrasena = data.nuevaContrasena;
                
                // Aquí puedes guardar la nueva contraseña en el local storage o en tu lógica de datos
                // También puedes agregar la lógica para redirigir al usuario a la página de inicio o de inicio de sesión
                // dependiendo de tu flujo de la aplicación.
  
                // Guardar la nueva contraseña en el local storage (ejemplo)
                localStorage.setItem('contrasena', nuevaContrasena);
  
                // Cerrar el cuadro de diálogo
                this.usuarioEncontrado = false;
                await alert.dismiss();
  
                // Redirigir al usuario a donde desees (por ejemplo, login)
                this.router.navigate(['/login']);
              },
            },
          ],
        });
  
        await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Usuario no encontrado',
          message: 'El nombre de usuario no existe.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'El nombre de usuario no existe.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
  
  async cancelar() {
    // Redirige a la página de inicio de sesión (login)
    this.router.navigate(['/login']);
  }
  
} 