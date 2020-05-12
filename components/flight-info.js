
var originAirport;
var randomAirport;
var flightURL;

var startingCity = document.getElementById("starting-city")   //get starting city value from form
startingCity.addEventListener("change", getFlightInfo);


randomAirportArray = ["ATL", "PEK", "LAX", "HND", "DXB", "ORD", "LHR", "PVG", "CDG", "DFW"]


function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var randomPosition = Math.floor(Math.random() * array.length);
    var placeHolder = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = placeHolder;
  }
}

function getRandomCity(array) {
  var updatedArray = [];
  for (var index = 0; index < array.length; index++){
  updatedArray.push(array[index] + "-sky");
  }

  shuffle(updatedArray);
  randomAirport = updatedArray[0];
  return randomAirport;
}

function getStartingCity(){
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



function getFlightInfo() {

  getStartingCity();
  getRandomCity(randomAirportArray);

  flightURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + originAirport + "/" + randomAirport +"/2020-09-01?inboundpartialdate=2020-12-01"

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
