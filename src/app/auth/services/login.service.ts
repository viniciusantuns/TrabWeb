import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login';



const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario | null{
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(user: Usuario | null){
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }


  login(login: Login): Observable<Usuario | null>{
    let user = new Usuario(1, "Pato-Cliente", login.email, login.senha, "Cliente");

    
    if(login.email == 'admin@admin.com'){
      user = new Usuario(1, "Pato-Admin", login.email, login.senha, "Admin");
      
    }else if(login.email == 'func@func.com'){
      user = new Usuario(1, "Pato-Funcionario", login.email, login.senha, "Funcionario");

    }

    return of(user);
  }

  logout(){
    delete localStorage[LS_CHAVE];
  }

}
