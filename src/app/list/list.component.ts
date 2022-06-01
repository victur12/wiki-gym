import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  term;
  constructor(
    private readonly dataService: DataService,
  ) { }
  exercises: any[]; 
  ngOnInit() {
    const data = this.dataService.getExercises();
    data.subscribe(e =>{
      console.log(e)
      this.exercises = e
    });
  }

}
