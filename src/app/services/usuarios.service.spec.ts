import { TestBed, async } from '@angular/core/testing';
// Peticiones Http
import { HttpClientModule } from '@angular/common/http';
// Servicio
import { UsuariosService } from './usuarios.service';

describe('Servicio: UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [UsuariosService]
    });
    service = TestBed.inject(UsuariosService);
  });

  it('Servicios creado', () => {
    expect(service).toBeTruthy();
  });

  it('Metodo: getUsuarios', async( ()=> {
    service = TestBed.get(UsuariosService);
    service.getUsuarios().subscribe(response => {
      expect(response).not.toBeNull(),
        error => fail(error)
      }
    );
  }));

});
