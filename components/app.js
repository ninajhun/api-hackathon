class App {
  constructor(outboundDate, originAirport, randomAirport, flightURL, startingCity, airports, flightTable, newCityButton, flightDetailsButton, initMap) { //initMap
    this.outboundDate = outboundDate;
    this.originAirport = null;
    this.randomAirport = null;
    this.flightURL = null;
    this.startingCity = startingCity;
    this.airports = airports;
    this.flightTable = flightTable;
    this.newCityButton = newCityButton;
    this.flightDetailsButton = flightDetailsButton;
    this.initMap = initMap;
    this.handleFlightInfoSuccess = this.handleFlightInfoSuccess.bind(this);
    this.handleFlightInfoError = this.handleFlightInfoError.bind(this);
    this.getStartingCity = this.getStartingCity.bind(this);
    this.getRandomCity = this.getRandomCity.bind(this);
    this.getFlightInfo = this.getFlightInfo.bind(this);
    this.openSkyscanner = this.openSkyscanner.bind(this)

  }

  start() {
    this.startingCity.addEventListener("change", this.getFlightInfo);

    this.newCityButton.addEventListener("click", () => {
      document.querySelector("main").classList.add("hidden");
      document.querySelector("header").classList.add("hidden");
      document.querySelector("footer").classList.add("hidden");
      this.getFlightInfo()
    })

     this.flightDetailsButton.addEventListener("click", this.openSkyscanner) //move to get flight info?
  }

  openSkyscanner() {

    const skyscannerLink = `https://www.skyscanner.com/transport/flights/${this.originAirport}/${this.randomAirport}/${this.outboundDate}/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27537542&inboundaltsenabled=false&infants=0&originentityid=27547037&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=0`
    window.open(skyscannerLink);
  }

  getFlightInfo() {
    this.getStartingCity();
    this.getRandomCity(this.airports);
    this.flightURL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${this.originAirport}-sky/${this.randomAirport}-sky/${outboundDate}?inboundpartialdate=2020-12-01`

    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": this.flightURL,
      "method": "GET",
      "beforeSend": () => document.querySelector(".loading").classList.remove("hidden"),
      "complete": () => document.querySelector(".loading").classList.add("hidden"),
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
    this.shuffle(array);
    this.randomAirport = array[0].iata_code;

    var header = document.querySelector("header");
    var headerText = document.querySelector(".random-city-text");
    headerText.textContent = "Pack your bags, you're going to " + array[0].municipality + "!"
    header.append(headerText);

    document.getElementById("map").classList.remove("hidden");
    this.initMap(array[0].latitude_deg, array[0].longitude_deg)

    return this.randomAirport;
  }


  handleFlightInfoSuccess(flightInfo) {
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("header").classList.remove("hidden");
    document.querySelector("footer").classList.remove("hidden");
    this.flightTable.onStartCityChosen(flightInfo);
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


}
