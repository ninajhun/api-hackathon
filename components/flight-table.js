class FlightTable {
  constructor(table) {
    this.table = table;
  }

  onStartCityChosen(flightData) {
    this.flightData = flightData;

    var tbody = this.table.querySelector("tbody");
    tbody.textContent = " ";

    // for (var i = 0; i < flightData.length; i++){
      tbody.append(this.renderFlightRow(flightData)); //[i];
    // }
    //renderFlightRow(flightData)
  }

  renderFlightRow(data){
    var row = document.createElement("tr");
    var airline = document.createElement("td");
    var depart = document.createElement("td");
    var arrive = document.createElement("td");
    var price = document.createElement("td");

    airline.textContent = flightTable.flightData.Carriers[0].Name
    depart.textContent = flightTable.flightData.Places[1].IataCode
    arrive.textContent = flightTable.flightData.Places[0].IataCode
    price.textContent = "$" + flightTable.flightData.Quotes[0].MinPrice

    row.append(airline, depart, arrive, price);

    return row;
  }

}
