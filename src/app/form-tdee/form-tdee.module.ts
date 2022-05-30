import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTDEEComponent } from './form-tdee.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ],
  declarations: [FormTDEEComponent],
  exports: [FormTDEEComponent]
})
export class FormTDEEComponentModule {}