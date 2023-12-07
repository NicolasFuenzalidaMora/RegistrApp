// login.page.ts

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
  tipoUsuario: string = '';

  // Modificar para tener usuarios directamente en el componente
  usuariosPrueba: Usuario[] = [
    { correo: 'pepegrillo@alumnoduocuc.com', contraseña: 'alumno123', tipo: 'estudiante' },
    { correo: 'demetrio@profesorduocuc.com', contraseña: 'profesor123', tipo: 'profesor' }
  ];

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.formulariologin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
    });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.formulariologin.reset();
  }

  async ingresar() {
    const f = this.formulariologin.value;
    const correoUsuario = f.correo.toLowerCase(); // Convertir a minúsculas para comparación

    console.log('Correo ingresado:', correoUsuario);
    console.log('Usuarios almacenados:', this.usuariosPrueba);

    // Comprobar si hay un usuario con el correo y la contraseña ingresados
    const usuario = this.usuariosPrueba.find(
      (u: Usuario) =>
        u.correo.toLowerCase() === correoUsuario && u.contraseña === f.contraseña
    );

    if (usuario) {
      console.log('Usuario encontrado:', usuario);
      console.log('Ingresado como', usuario.tipo);
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('nombreUsuario', correoUsuario);
      localStorage.setItem('tipoUsuario', usuario.tipo);

      // Redirigir al usuario a la página correspondiente según su tipo
      if (usuario.tipo === 'estudiante') {
        this.router.navigate(['/home-estudiante']);
      } else if (usuario.tipo === 'profesor') {
        this.router.navigate(['/home-profesor']);
      }
    } else {
      console.log('Usuario no encontrado');
      this.mostrarAlerta(
        'Usuario inválido',
        'El correo y/o contraseña son incorrectos'
      );
    }
  }

  async recuperarContrasena() {
    // Implementar la lógica de recuperación de contraseña si es necesario
  }

  private mostrarAlerta(header: string, message: string) {
    this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    }).then(alert => alert.present());
  }
}

interface Usuario {
  correo: string;
  contraseña: string;
  tipo: 'estudiante' | 'profesor';
}
