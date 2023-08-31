import * as d3 from "d3"

export class spinpie {
    name: string = "";
    rotation: number = 0;
    
    // create(pickOptions: string[]) {
    //     const width = 800;
    //     const height = 800;
    //     const outerRadius = Math.min(width, height) / 2;
    //     const labelRadius = outerRadius*.8;
    //     var color = d3.scaleOrdinal()
    //         .domain(pickOptions)
    //         .range(d3.schemeSet1);
    //     var data = [9, 20, 8, 12]
                       
    //     var svg = d3.select("#chart")
    //         .append("svg")
    //             .attr("width", width)
    //             .attr("height", height)
    //         .append("g")
    //             .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //     var pie = d3.pie();
    //     var data_ready = pie(d3.entries(data));
    //     var arcGenerator = d3.arc().innerRadius(0).outerRadius(outerRadius);
    //     svg.selectAll('slices')
    //         .data(data_ready)
    //         .enter()
    //         .append('path')
    //             .attr('d', arcGenerator)
    //             .attr('fill', function(d){ return(color(d.data.key)) })
    //             .attr("stroke", "black")
    //             .style("stroke-width", "2px")
    //             .style("opacity", 0.7)
    // }
}