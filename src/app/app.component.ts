import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.services';
import { Usuario } from './shared/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrabalhoWeII';

  constructor(private router:Router, private loginService:AuthService){}

  get usuarioLogado(): Usuario | null{
    return this.loginService.usuarioLogado;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }


}
