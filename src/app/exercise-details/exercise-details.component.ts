import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss'],
})
export class ExerciseDetailsComponent implements OnInit {

  @Input() ejercicio;
  
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  console.log(this.ejercicio);

  }

  exit(){
    this.modalCtrl.dismiss();
    console.log(this.ejercicio);

  }

}
