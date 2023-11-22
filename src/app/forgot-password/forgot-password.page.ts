import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formRecuperarContrasena: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) {
    this.formRecuperarContrasena = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  async recuperarContrasena() {
    if (this.formRecuperarContrasena.valid) {
      const email = this.formRecuperarContrasena.get('email')!.value;

      // Agregar la lógica para enviar un correo de recuperación a la dirección de correo electrónico proporcionada

      // Mostrar un mensaje de confirmación
      const alert = await this.alertController.create({
        header: 'Recuperación de Contraseña Enviada',
        message: `Hemos enviado instrucciones de recuperación a ${email}.`,
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              // Redirigir al usuario a la página de inicio de sesión (login)
              this.router.navigate(['/login']);
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo electrónico válido.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

  // Método para cancelar la recuperación de contraseña
  cancelar() {
    this.router.navigate(['/login']);
  }
}
