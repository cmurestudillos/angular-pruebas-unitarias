import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent implements OnInit {
  @ViewChild('resultado') result: any;

  constructor() { }

  ngOnInit(): void {
  }

//==================================================================//
  //                          OPERACIONES                             //
  //==================================================================//
  // Suma
  public suma(num1: number, num2: number ): number{
    return Number(num1) + Number(num2);
  }

  // Resta
  public resta(num1: number, num2: number ): number{
    return Number(num1) - Number(num2);
  }

  // division
  public division(num1: number, num2: number ): number{
    return Number(num1) / Number(num2);
  }

  // multiplicacion
  public multiplicacion(num1: number, num2: number ): number{
    return Number(num1) * Number(num2);
  }

  //==================================================================//
  //                RESULTADO DE LAS OPERACIONES                      //
  //==================================================================//
  // Mostramos el resultado de la suma
  public printSuma(num1: number, num2: number ): any{
    this.result.nativeElement.value = this.suma(num1, num2);
  }

  // Mostramos el resultado de la resta
  public printResta(num1: number, num2: number ): any{
    this.result.nativeElement.value = this.resta(num1, num2);
  }

  // Mostramos el resultado de la division
  public printDivision(num1: number, num2: number ): any{
    this.result.nativeElement.value = this.division(num1, num2);
  }

  // Mostramos el resultado de la multiplicacion
  public printMultiplicacion(num1: number, num2: number ): any{
    this.result.nativeElement.value = this.multiplicacion(num1, num2);
  }

}
