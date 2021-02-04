import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient, HttpResponse } from '@angular/common/http';
// Operadores
import { Observable } from "rxjs";
import { of } from 'rxjs';
// Datos
import { LISTA_USUARIOS_FAKE } from '../data/usuarios.fake.spec';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string = 'https://api.github.com/users';

  constructor(private _http: HttpClient) { }

  getUsuarios():Observable<any>{
    const responseOptions = new HttpResponse({
      body: LISTA_USUARIOS_FAKE
    });

    const response = new HttpResponse(responseOptions);
    return of(response);

    // return this._http.get(this.url);
  }
}
