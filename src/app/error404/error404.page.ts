import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
})
export class Error404Page implements OnInit {

  constructor(private router: Router) {
    // Redirige a la página de inicio de sesión (login) después de 5 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000); // 5000 milisegundos (5 segundos)
  }

  ngOnInit() {
  }
}
