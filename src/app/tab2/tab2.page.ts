import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseDetailsComponent } from '../exercise-details/exercise-details.component';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  term;
  constructor(
    private readonly dataService: DataService,
    private modalCrtl: ModalController
  ) { }

  exercises: any[]; 
  ngOnInit() {
    const data = this.dataService.getExercises();
    data.subscribe(e =>{
      this.exercises = e
    });
  }

  async openModal(excercise: any){
   const modal = await this.modalCrtl.create({
      component: ExerciseDetailsComponent,
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        ejercicio: excercise
      }
    });

    await modal.present();
  }
}
