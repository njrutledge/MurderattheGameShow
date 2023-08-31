import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Data } from '../data'

@Component({
  selector: 'app-spin',
  template: `
    <div class="chart-container">
      <figure  id="pie" ></figure>
      <button id="spinButton" (click)="Spin()">Spin</button>
    </div>
  `,
  styleUrls: ['./spin.component.css']
})

export class SpinComponent implements OnInit {
  @Input() outcomes: string[] = [];
 
  
  private data: Data[] = [];
  private svg: any;
  private margin = 50;
  private width = 800;
  private height = 800;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;
  readyData: d3.PieArcDatum<any>[] = [];
  private spinner: any;
  private picker: any;

  private generateData(): void {
    let rotation = -90;
    let rotationAdd = 360 / (this.outcomes.length*2)
    for (let i = 0; i < this.outcomes.length; i++){
      rotation += rotationAdd;
      this.data.push({"Outcome": this.outcomes[i], "Value": 1, "Rotate": rotation})
      rotation += rotationAdd;
    }
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    this.spinner = this.svg
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
    this.picker = this.svg
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.Value.toString()))
    .range(d3.schemeCategory10);
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Value));
    this.readyData = pie(this.data)
    var piechart = this.spinner
      .selectAll('pieces')
      .data(this.readyData)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

      //labels
      const labelLocation = d3.arc()
        .innerRadius(25)
        .outerRadius(this.radius);

      var pieLabels = this.spinner
        .selectAll('pieces')
        .data(this.readyData)
        .enter()
        .append('text')
        .text((d: any)=> d.data.Outcome)
        .attr("x", (d:any) => labelLocation.centroid(d)[0])
        .attr("y", (d:any) => labelLocation.centroid(d)[1])
        .attr("transform", (d: any) => "rotate(" + d.data.Rotate + ", " + labelLocation.centroid(d)[0] +"," + labelLocation.centroid(d)[1] + ")translate(0,3)")
        //.attr("savedTransform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
        .style("text-anchor", "middle")
        .style("font-size", 20);
      
      var triangle = d3.symbol().type(d3.symbolTriangle).size(1000)
      var pickerTriangle = this.picker.append("path")
        .attr("d", triangle)
        .attr("stroke", "black")
        .attr("fill", "green")
        .attr("transform", "translate(355,0)rotate(30)")
        .style("stroke-width", "2px")
        
  }
  public Spin(): void {
    let x = Math.random()*360;
    console.log(x);
    this.animate(this.spinner, x);
    //this.animate2(this.pieLabels, x);
  }

  private animate(component:any, x:number): void {
    var animation = component.transition();
    //console.log(component.attr("x"), component.attr("y"))
  
    // animation = animation.transition()
    //     .ease(d3.easeLinear)
    //     .duration(2000)
    //     .attr("transform", "translate(400,400)rotate(90)")
    let quarterRotLeft = 0
    if (x <= 45) {
      quarterRotLeft = 4 
    } else if (x <= 90) {
      quarterRotLeft = 0
    } else if (x <= 180) {
      quarterRotLeft = 1
    } else if (x <= 270) {
      quarterRotLeft = 2
    } else {
      quarterRotLeft = 3
    }
    for (let i = 1; i <= 3; i ++){
      for (let j = 1; j <= 4; j++){
      animation = animation.transition()
        .ease(d3.easeLinear)
        .duration(i*100 + (j-1)*25)
        .attr("transform", (d:any) => "translate(400,400)rotate(" + 90*j + ")")
      }
    }
    // animation = animation.transition()
    //     .ease(d3.easeLinear)
    //     .duration(0)
    //     .attr("transform", "rotate(" + 0 + ", 0, 400 )")
    for (let k = 1; k <= quarterRotLeft; k++){
      animation = animation.transition()
        .ease(d3.easeLinear)
        .duration(400 + k*50)
        .attr("transform", "translate(400,400)rotate(" + 90*k + ")")
    }
    animation = animation.transition()
      .ease(d3.easeLinear)
      //.delay(2000)
      .duration(400 + quarterRotLeft*50)
      .attr("transform", "translate(400,400)rotate(" + x + ")")
  
  }

  ngOnInit(): void {
    this.generateData();
    this.createSvg();
    this.createColors();
    this.drawChart();
  }
}
