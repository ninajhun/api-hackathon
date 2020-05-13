
var originAirport;
var randomAirport;
var flightURL;

var startingCity = document.getElementById("starting-city")   //get starting city value from form
startingCity.addEventListener("change", getFlightInfo);


randomAirportInfo = [
  {
    airportCode: "CDG",
    city: "Paris",
    coords: { lat: 48.8566, lng: 2.3522}
  },
  {
    airportCode: "PEK",
    city: "Beijing",
    coords: { lat: 39.9042, lng: 116.4074}
  },
  {
    airportCode: "LHR",
    city: "London",
    coords: { lat: 51.5074, lng: 0.1278}

  },
  {
    airportCode: "HND",
    city: "Tokyo",
    coords: { lat: 35.6762, lng: 139.6503 }
  },

]


function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var randomPosition = Math.floor(Math.random() * array.length);
    var placeHolder = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = placeHolder;
  }
}

function getStartingCity() {
  document.querySelector(".start-modal").classList.add("hidden");

  if (startingCity.value === "los-angeles") {
    originAirport = "LAX-sky";
  } else if (startingCity.value === "orange-county") {
    originAirport = "SNA-sky"
  } else if (startingCity.value === "new-york") {
    originAirport = "JFK-sky"
  }
  return originAirport;
}


function getRandomCity(array) {
  var updatedArray = [];
  for (var index = 0; index < array.length; index++) {
    array[index].airportCode += "-sky"
    updatedArray.push(array[index]);
  }

  shuffle(updatedArray);
  randomAirport = updatedArray[0].airportCode;

  var header = document.querySelector("header");
  var headerText = document.querySelector("h1");
  headerText.textContent = "Pack your bags, you're going to " + updatedArray[0].city + "!"
  header.append(headerText);

  document.getElementById("map").classList.remove("hidden");
  initMap(updatedArray[0].city, updatedArray[0].coords)

  return randomAirport;
}


function initMap(pos, cityCoords) {  // Initialize and add the map
  var pos = cityCoords    // The location of city
  var map = new google.maps.Map(     // The map, centered at city
    document.getElementById('map'), { zoom: 4, center: pos });
  var marker = new google.maps.Marker({ position: pos, map: map });  // The marker, positioned at city
}


function getFlightInfo(){

  getStartingCity();
  getRandomCity(randomAirportInfo);

  // var current-date = new Date()

  flightURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + originAirport + "/" + randomAirport + "/" +"2020-09-01?inboundpartialdate=2020-12-01"

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": flightURL,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": skyKey
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}
