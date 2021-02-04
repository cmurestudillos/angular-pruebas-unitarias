import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
