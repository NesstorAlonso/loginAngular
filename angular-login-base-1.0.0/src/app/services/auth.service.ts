import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { EmailModel } from '../models/email.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: 'https://35.223.337.178:8080/';

  constructor( private http: HttpClient) { }

  logout() { }

  login( usuario: UsuarioModel) { 

    const authData ={
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}api/auth/signin`,
      authData
    );
  }

  nuevoEmail( email: EmailModel) { 

    const authData ={
      ...email,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}enviarmail`,
      authData
    );

  }

}
