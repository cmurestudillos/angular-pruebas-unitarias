import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Peticiones Http
import { HttpClientModule } from '@angular/common/http';
// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Componentes
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    UsuariosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
