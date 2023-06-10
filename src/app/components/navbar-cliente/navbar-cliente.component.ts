import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent {

  constructor(private router: Router,private loginService: LoginService){
  }

  get GetusuarioLogado():Usuario | null{
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
