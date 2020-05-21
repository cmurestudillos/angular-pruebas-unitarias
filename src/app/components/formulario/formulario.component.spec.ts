import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';

fdescribe('Componente: FormularioComponent', () => {
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
});
