d3.csv("/data/sacklerNames.csv", function(data){
    console.log(data)
});

d3.select(".names")
    .append("svg")
    .attr("width", 100)
    .attr("height", 50)
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("fill", "white");