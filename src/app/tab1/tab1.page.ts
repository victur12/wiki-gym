import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

resultado:string="";
peso:string="";
altura:string=""

  constructor() {}

  calcular(){
    this.resultado=(parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura))).toString();
  }

}
