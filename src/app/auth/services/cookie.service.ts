import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public setUserLoggedIn(user: Usuario): void {
    this.setCookie('auth_token', JSON.stringify(user), 7);
  }

  public getUserLoggedIn(): Usuario {
    const userCookie = this.getCookie('auth_token');
    return userCookie ? JSON.parse(userCookie) : null;
  }

  public clearUserLoggedIn(): void {
    this.deleteCookie('auth_token');
  }

  public setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  public getCookie(name: string){
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  public deleteCookie(name: string): void {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
