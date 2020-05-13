class App {
  constructor(originAirport, randomAirport, flightURL, startingCity, randomAirportInfo) {
    this.originAirport = originAirport;
    this.randomAirport = randomAirport;
    this.flightURL = flightURL;
    this.startingCity = startingCity;
    this.randomAirportInfo = randomAirportInfo;
    this.handleFlightInfoSuccess = this.handleFlightInfoSuccess.bind(this);
    this.handleFlightInfoError = this.handleFlightInfoError.bind(this);
    this.startingCity.addEventListener("change", this.getFlightInfo);
    this.getStartingCity = this.getStartingCity.bind(this);
    this.getRandomCity = this.getRandomCity.bind(this);
    this.getFlightInfo = this.getFlightInfo.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  start() {
    // this.getFlightInfo.onSubmit(this.getFlightInfo);
    this.startingCity.addEventListener("change", this.getFlightInfo);


  }

  getStartingCity() {
    document.querySelector(".start-modal").classList.add("hidden");

    if (this.startingCity.value === "los-angeles") {
      this.originAirport = "LAX-sky";
    } else if (this.startingCity.value === "orange-county") {
      this.originAirport = "SNA-sky"
    } else if (this.startingCity.value === "new-york") {
      this.originAirport = "JFK-sky"
    }
    return this.originAirport;
  }


  getRandomCity(array) {
    var updatedArray = [];
    for (var index = 0; index < array.length; index++) {
      array[index].airportCode += "-sky"
      updatedArray.push(array[index]);
    }

    this.shuffle(updatedArray);
    this.randomAirport = updatedArray[0].airportCode;

    var header = document.querySelector("header");
    var headerText = document.querySelector(".random-city-text");
    headerText.textContent = "Pack your bags, you're going to " + updatedArray[0].city + "!"
    header.append(headerText);

    document.getElementById("map").classList.remove("hidden");
    initMap(updatedArray[0].city, updatedArray[0].coords)

    return this.randomAirport;
  }


  getFlightInfo() {
    this.getStartingCity();
    this.getRandomCity(this.randomAirportInfo);
    this.flightURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + this.originAirport + "/" + this.randomAirport + "/" + "2020-09-01?inboundpartialdate=2020-12-01"
    console.log(this.flightURL)

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

  handleFlightInfoSuccess(success) {
    console.log(success);
  }

  handleFlightInfoError(error) {
    console.log(error);
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
