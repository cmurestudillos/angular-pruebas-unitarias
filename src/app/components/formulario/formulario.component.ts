import { Component, OnInit, Input } from '@angular/core';
// Formularios
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  constructor() { }

  @Input()formConfig = []
  form: FormGroup;
  userGroup = {};

  ngOnInit(): void {
    for(let config of this.formConfig){
      this.userGroup[config.firstname] = new FormControl(config.value || '')
    }
    this.form = new FormGroup(this.userGroup);
  }

  onSubmit(formulario) {
    console.log(formulario.value);
  }
}
