import React from 'react';
import * as d3 from 'd3'

class Linechart extends React.Component {
    //Below for data I think we need to import the data from the app component

    componentDidMount() {
        const data = []
        this.drawBarChart(data)        
    }

    drawBarChart(data) {
        const mountain = document.querySelector("#mountain");

        const margin = {top: 50, right: 50, bottom: 50, left: 50},
              width = mountain.clientWidth,
              height = mountain.clientHeight

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            //We can remove the border below during presentation I just added it so we can see where the graph is at
            .attr("style", "border:1px solid black")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    }

    render() { 

        return (
            <div ref="canvas"></div> 
        )
    }
}

export default Linechart;