import { Injectable } from '@angular/core';
// Servicio
import { UsuariosService } from './usuarios.service';
// Operadores
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Modelo-Interface de datos
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor(private _service: UsuariosService) { }

  getUsuarios():Observable<any>{
    return this._service.getUsuarios().pipe(map(
      (response:any) => {
        let listaUsuarios: Usuario[] = [];

        for (let index = 0; index < response.body.length; index++) {
          const usuario: Usuario = {
            login: response.body[index].login,
            avatar: response.body[index].avatar_url,
            url: response.body[index].url
          };
          // push de los datos mediante spread
          listaUsuarios = [...listaUsuarios, usuario];
        }
        return listaUsuarios;
      }
    ));
  }
}
