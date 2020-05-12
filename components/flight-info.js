
var originAirport;
var randomAirport;
var flightURL;

var startingCity = document.getElementById("starting-city")   //get starting city value from form
startingCity.addEventListener("change", getFlightInfo);


randomAirportInfo = [
  {
    airportCode: "ATL",
    city: "Atlanta"
  },
  {
    airportCode: "PEK",
    city: "Beijing"
  },
  {
    airportCode: "LAX",
    city: "Los Angeles"
  },
  {
    airportCode: "HND",
    city: "Tokyo"
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

  return randomAirport;
}



function getFlightInfo(){

  getStartingCity();
  getRandomCity(randomAirportInfo);

  flightURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + originAirport + "/" + randomAirport + "/2020-09-01?inboundpartialdate=2020-12-01"

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
