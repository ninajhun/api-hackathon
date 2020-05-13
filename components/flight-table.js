class FlightTable {
  constructor(table) {
    this.table = table;
  }


  onStartCityChosen(FlightInfo){
    this.FlightInfo = FlightInfo;
    console.log(this.FlightInfo)
  }
}
