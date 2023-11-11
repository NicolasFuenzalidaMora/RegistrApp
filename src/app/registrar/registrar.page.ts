import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Asegúrate de importar el enrutador

interface Usuario {
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  formularioregistro: FormGroup;
  usuarios: Usuario[] = [];

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router // Agrega el enrutador a los parámetros del constructor
  ) {
    this.formularioregistro = this.fb.group({
      nombre: ['', Validators.required],
      contraseña: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      confirmarcontraseña: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });

    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    }
  }

  ngOnInit() {}

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            if (titulo === 'Registro Exitoso') {
              // Redirige al usuario a la página de inicio de sesión (login) después de un registro exitoso
              this.router.navigate(['/login']);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  usuarioYaExiste(nombreUsuario: string): boolean {
    return this.usuarios.some((usuario) => usuario.nombre === nombreUsuario);
  }

  async guardar() {
    if (this.formularioregistro.invalid) {
      this.mostrarAlerta('Datos incompletos', 'Se deben llenar todos los campos');
      return;
    }

    const f = this.formularioregistro.value;
    const nombreUsuario = f.nombre;

    // Verificar si el usuario ya existe
    if (this.usuarioYaExiste(nombreUsuario)) {
      this.mostrarAlerta('Error', 'El usuario ya existe');
      this.formularioregistro.reset(); // Limpiar todos los campos
      return;
    }

    const contraseña = f.contraseña;
    const confirmarcontraseña = f.confirmarcontraseña;

    if (contraseña !== confirmarcontraseña) {
      this.mostrarAlerta('Error en Contraseña', 'Las contraseñas no coinciden');
      this.formularioregistro.reset(); // Limpiar todos los campos
      return;
    }

    const usuario: Usuario = {
      nombre: nombreUsuario,
      contraseña: contraseña,
    };

    this.usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));

    this.mostrarAlerta('Registro Exitoso', '¡El registro ha sido exitoso!');
  }
}
