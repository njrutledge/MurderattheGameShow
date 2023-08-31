import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-bad',
  template: `
     <app-spin [outcomes]= "Outcomes"></app-spin>
  `,
  styleUrls: ['./spin-bad.component.css']
})
export class BadSpinComponent {
  Outcomes: string[] = []
  
  constructor(){
    this.Outcomes = ["bad1", "bad2", "bad3", "bad4", "bad5", "bad6", "bad7", "bad8", "bad9", "go to the good wheel", "bad11", "bad12", "bad13", "bad14", "bad15", "bad16", "bad17", "bad18", "bad19", "bad20"];
  }

}
