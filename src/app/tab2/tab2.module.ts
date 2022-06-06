import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ListComponentModule } from '../list/list.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExerciseDetailsComponentModule } from '../exercise-details/exercise-details.module';
import { ExerciseDetailsComponent } from '../exercise-details/exercise-details.component';


@NgModule({
  entryComponents:[
    ExerciseDetailsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ListComponentModule,
    Ng2SearchPipeModule,
    ExerciseDetailsComponentModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
