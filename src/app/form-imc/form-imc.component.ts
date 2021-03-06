import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  templateUrl: './form-imc.component.html',
  styleUrls: ['./form-imc.component.scss'],
})
export class FormImcComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder
  ) { }

  form: FormGroup;
  isSubmitted: boolean = false;
  listo = false;
  BMRP;
  IMC_var;

  get errorControl(){
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Peso: ['', [Validators.required, Validators.min(20), Validators.max(150), Validators.pattern('^[0-9]+$')]],
      Estatura: ['', [Validators.required, Validators.min(80), Validators.max(210), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  display = false;
  info_display(){
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

  calcular(){
    
    
    this.isSubmitted = true
    if (!this.form.valid) {
      console.log("por favor, rellenar los campos requeridos");
      return false;
    } else {

      this.IMC_var = (this.form.value.Peso) / ((this.form.value.Estatura / 100) * (this.form.value.Estatura / 100));
      this.listo = true;

      console.log("Tu IMC es de: " + this.IMC_var);

    }
  }
}
