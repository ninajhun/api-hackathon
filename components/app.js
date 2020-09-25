class App {
  constructor(originAirport, randomAirport, flightURL, startingCity, randomAirportInfo, flightTable, newRandomCity) {
    this.originAirport = null;
    this.randomAirport = null;
    this.flightURL = null;
    this.startingCity = startingCity;
    this.randomAirportInfo = randomAirportInfo;  //change to airports later
    this.flightTable = flightTable;
    this.newRandomCity = newRandomCity;
    this.handleFlightInfoSuccess = this.handleFlightInfoSuccess.bind(this);
    this.handleFlightInfoError = this.handleFlightInfoError.bind(this);
    this.getStartingCity = this.getStartingCity.bind(this);
    this.getRandomCity = this.getRandomCity.bind(this);
    this.getFlightInfo = this.getFlightInfo.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  start() {
    this.startingCity.addEventListener("change", this.getFlightInfo);
    this.newRandomCity.onNewCityClick(this.getFlightInfo);

    // console.log(this.randomAirportInfo)
  }

  getFlightInfo() {
    this.getStartingCity();
    this.getRandomCity(this.randomAirportInfo);
    this.flightURL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${this.originAirport}-sky/${this.randomAirport}-sky/2020-12-01?inboundpartialdate=2020-12-01`
    //need to change outbound date to use Date()
    // console.log(this.flightURL)

    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": this.flightURL,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": skyKey
      },
      success: this.handleFlightInfoSuccess,
      error: this.handleFlightInfoError
    });
  }

  getStartingCity() {
    document.querySelector(".start-modal").classList.add("hidden");

    if (this.startingCity.value === "los-angeles") {
      this.originAirport = "LAX";
    } else if (this.startingCity.value === "orange-county") {
      this.originAirport = "SNA"
    } else if (this.startingCity.value === "new-york") {
      this.originAirport = "JFK"
    }
    return this.originAirport;
  }

  getRandomCity(array) {
    var updatedArray = [];
    for (var index = 0; index < array.length; index++) {
      updatedArray.push(array[index]);
    }   //is this necessary?

    this.shuffle(updatedArray);
    // this.randomAirport = updatedArray[0].airportCode;
    this.randomAirport = updatedArray[0].iata_code;

    // var header = document.querySelector("header");
    // var headerText = document.querySelector(".random-city-text");
    // headerText.textContent = "Pack your bags, you're going to " + updatedArray[0].city + "!"
    // header.append(headerText);

    document.getElementById("map").classList.remove("hidden");
    this.initMap(updatedArray[0].city, updatedArray[0].coords)

    return this.randomAirport;
  }



  handleFlightInfoSuccess(flightInfo) {
    this.flightTable.onStartCityChosen(flightInfo)
  }

  handleFlightInfoError(error) {
    console.error(error);
  }

  shuffle(array) {
    for (var i = 0; i < array.length; i++) {
      var randomPosition = Math.floor(Math.random() * array.length);
      var placeHolder = array[i];
      array[i] = array[randomPosition];
      array[randomPosition] = placeHolder;
    }
  }

  initMap(pos, cityCoords) {  // Initialize and add the map
    var pos = cityCoords    // The location of city
    var map = new google.maps.Map(     // The map, centered at city
      document.getElementById('map'), { zoom: 4, center: pos });
    var marker = new google.maps.Marker({ position: pos, map: map });  // The marker, positioned at city
  }


}
