class FlightTable {
  constructor(table) {
    this.table = table;
  }

  onStartCityChosen(flightInfo) {
    var tbody = this.table.querySelector("tbody");
    var flightTableBody = document.getElementById("flights-table")
    var noFlightsMessage = document.getElementById("no-flights-message")

    if (!flightInfo.Places.length) {
      flightTableBody.classList.add("hidden")
      noFlightsMessage.classList.remove("hidden")

    } else {
      flightTableBody.classList.remove("hidden")
      noFlightsMessage.classList.add("hidden")

      this.flightInfo = flightInfo;

      tbody.textContent = " ";
      tbody.append(this.renderFlightRow());
    }
  }

  renderFlightRow(){
    var row = document.createElement("tr");
    var airline = document.createElement("td");
    var depart = document.createElement("td");
    var arrive = document.createElement("td");
    var price = document.createElement("td");

    airline.textContent = this.flightInfo.Carriers[0].Name
    depart.textContent = this.flightInfo.Places[1].IataCode
    arrive.textContent = this.flightInfo.Places[0].IataCode
    price.textContent = "$" + this.flightInfo.Quotes[0].MinPrice

    row.append(airline, depart, arrive, price);

    return row;

  }

}
