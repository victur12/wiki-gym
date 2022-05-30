import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormImcComponent } from './form-imc.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ],
  declarations: [FormImcComponent],
  exports: [FormImcComponent]
})
export class FormImcComponentModule {}
