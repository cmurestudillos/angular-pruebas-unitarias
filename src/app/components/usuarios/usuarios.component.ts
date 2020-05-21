import { Component, OnInit, OnDestroy } from '@angular/core';
// Servicios
import { ListaUsuariosService } from '../../services/listausuarios.service';
// Modelo-interface de datos
import { Usuario } from 'src/app/models/usuario';
// Operador
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit, OnDestroy {

  usuarios: Usuario[];
  subs: Subscription;

  constructor(private _serviceList: ListaUsuariosService) { }

  ngOnInit(): void {
    this.subs = this._serviceList.getUsuarios().subscribe(
      data => {
        this.usuarios = data;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
