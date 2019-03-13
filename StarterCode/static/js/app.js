// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    //Clear table if one exists
    var tbody=d3.select("tbody");
    tbody.html("")

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });    
});    