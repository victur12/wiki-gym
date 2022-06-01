import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [ CommonModule, Ng2SearchPipeModule,FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListComponentModule {}
