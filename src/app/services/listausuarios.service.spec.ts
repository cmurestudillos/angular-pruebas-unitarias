import { TestBed, async } from '@angular/core/testing';
// Servicios
import { UsuariosService } from './usuarios.service';
import { ListaUsuariosService } from './listausuarios.service';
// Datos
import { LISTA_USUARIOS_FAKE } from '../data/usuarios.fake.spec';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Servicio: ListaUsuariosService', () => {
  let service: ListaUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListaUsuariosService,
        {provide: UsuariosService, useClass: LISTA_USUARIOS_FAKE}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(ListaUsuariosService);
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });

  it('Obtencion de datos de un usuario', async( () => {
    service = TestBed.get(ListaUsuariosService);
    service.getUsuarios().subscribe(response => {
        expect(response[0].login).toEqual('mojombo');
        expect(response[0].avatar).toBeDefined();
      }
    );
  }));

});
