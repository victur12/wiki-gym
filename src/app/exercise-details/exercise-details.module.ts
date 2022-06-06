import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExerciseDetailsComponent } from './exercise-details.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExerciseDetailsComponent],
  exports: [ExerciseDetailsComponent]
})

export class ExerciseDetailsComponentModule {}
