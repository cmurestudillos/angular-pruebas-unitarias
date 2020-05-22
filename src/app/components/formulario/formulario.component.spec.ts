import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';

describe('Componente: FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });
  
  it('El el formulario debe de ser valido al inicio', () => {
    expect(component.form).toBeTruthy();
  });

});

