import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
