import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tdee',
  templateUrl: './form-tdee.component.html',
  styleUrls: ['./form-tdee.component.scss'],
  providers: [FormBuilder]
})
export class FormTDEEComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder
  ) { }

  form: FormGroup;
  isSubmitted: boolean = false;
  listo = false;
  BMRP;
  TDEE_var;

  get errorControl(){
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      SS: ['', [Validators.required]],
      SL: ['', [Validators.required]],
      Edad: ['', [Validators.required, Validators.min(13), Validators.max(99), Validators.pattern('^[0-9]+$')]],
      Peso: ['', [Validators.required, Validators.min(20), Validators.max(150), Validators.pattern('^[0-9]+$')]],
      Estatura: ['', [Validators.required, Validators.min(80), Validators.max(220), Validators.pattern('^[0-9]+$')]]
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
    

    console.log(this.form.value);
    this.BMRP = (this.form.value.Peso*10)+(6.25*this.form.value.Estatura)-(5*this.form.value.Edad);
    if (this.form.value.SS == 1) {
      this.BMRP+5;
    } else {
      this.BMRP-161;
    }
      switch (this.form.value.SL) {
        case 3:
          this.TDEE_var = this.BMRP * 2.2;
          break;
        case 2:
          this.TDEE_var = this.BMRP * 1.8;
          break;
        default:
          this.TDEE_var = this.BMRP * 1.5;
          break;
      }
      this.listo = true;
      console.log(" tu TDEE es de: " + this.TDEE_var);
      console.log(" tu BMR es de: " + this.BMRP);
    }
  }


}
