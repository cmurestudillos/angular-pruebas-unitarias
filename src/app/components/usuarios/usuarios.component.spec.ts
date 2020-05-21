import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Componente
import { UsuariosComponent } from './usuarios.component';
// Servicios
import { ListaUsuariosService } from 'src/app/services/listausuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
// Modelo-Interface de datos
import { LISTA_USUARIOS_FAKE } from 'src/app/data/usuarios.fake.spec';

describe('Componente: UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ],
      providers: [
        ListaUsuariosService,
        {provide: UsuariosService, useClass: LISTA_USUARIOS_FAKE}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Metodo: setUsuarios', async( ()=>{
    expect(component.usuarios[0].login).toEqual('mojombo');
  }));

});
