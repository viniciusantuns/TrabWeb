import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { CookieService } from './cookie.service';{}

import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private currentUser?: Usuario | null;

  BASE_URL="http://localhost:8080/login";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private cookieService: CookieService ) { }

  public get usuarioLogado(): Usuario | null{
    return (this.cookieService.getUserLoggedIn()? this.cookieService.getUserLoggedIn() : null);

  }

  public set usuarioLogado(user: Usuario | null){
    if(user){
      this.cookieService.setUserLoggedIn(user);
    }

  }


  login(login: Login): Observable<Usuario | null>{
    return this.httpClient.post<Usuario>(this.BASE_URL, login, this.httpOptions);
    
  }

  logout(){
    this.cookieService.clearUserLoggedIn();

  }

}
