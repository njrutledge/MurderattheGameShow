import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-good',
  template: `
    <p>
      good-spin works!
    </p>
    <app-spin [outcomes]= "Outcomes"></app-spin>
  `,
  styleUrls: ['./spin-good.component.css']
})
export class GoodSpinComponent {
  Outcomes: string[] = []
  constructor(){
    this.Outcomes = ["good1", "good2", "good3", "good4", "good5", "good6", "good7", "good8", "good9", "go to the shadowerer realm", "good11", "good12", "good13", "good14", "good15", "good16", "good17", "good18", "good19", "good20"];
  }
}
