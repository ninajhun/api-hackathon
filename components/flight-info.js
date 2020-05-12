
var originAirport;
// var randomAirport;
var flightURL;

var startingCity = document.getElementById("starting-city")   //get starting city value from form
startingCity.addEventListener("change", getStartingCity);

function getStartingCity() {
  document.querySelector(".start-modal").classList.add("hidden");

  if (startingCity.value === "los-angeles") {
    originAirport = "LAX-sky";
  } else if (startingCity.value === "orange-county") {
    originAirport = "SNA-sky"
  } else if (startingCity.value === "new-york"){
    originAirport = "JFK-sky"
  }

  flightURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + originAirport + "/LAX-sky/2020-09-01?inboundpartialdate=2020-12-01"

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
