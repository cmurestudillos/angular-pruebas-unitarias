import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//Componente
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  // let numero:number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado.', () => {
    expect(component).toBeTruthy();
  });

  // Despues de cada ejecucion del expect en "Funcion Sumar",
  //  sumamos 1 a la variable para realizar la operacion
  // afterEach(async() => {
  //   numero++;
  // });

  it('Expect - toContain', async () => {
    const titulo = document.getElementById('titulo').innerHTML;
    // Se dispara directamente con parametros
    expect(titulo).toContain('Calculadora');
  });

  describe('Funcion Sumar', () => {
    it('La suma debe ser 4', async () => {
      // Se dispara mediante decoradores
      // (<HTMLInputElement>document.getElementById('numero1')).value= numero.toString();
      (<HTMLInputElement>document.getElementById('numero1')).value= '2';
      (<HTMLInputElement>document.getElementById('numero2')).value= '2';
      document.getElementById('sumar').click();
      expect((<HTMLInputElement>document.getElementById('resultado')).value).toBe('4');

      // Se dispara directamente con parametros
      // expect(component.suma(2, 2)).toEqual(4);
    });
  });

  describe('Funcion Resta', () => {
    it('La resta debe ser 1', async () => {
      // Se dispara directamente con parametros
      expect(component.resta(3, 2)).toEqual(1);
    });
  });

  describe('Funcion Division', () => {
    it('La division debe ser 0', async () => {
      // Se dispara directamente con parametros
      expect(component.division(0, 2)).toEqual(0);
    });
  });

  describe('Funcion Multiplicacion', () => {
    it('La multiplicacion debe ser 25', async () => {
      // Se dispara directamente con parametros
      expect(component.multiplicacion(5, 5)).toEqual(25);
    });
  });

});
