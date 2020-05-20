import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ErrorComponent } from './components/shared/error/error.component';


const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
