//flight-info//
var table = document.querySelector("table");
var flightTable = new FlightTable(table);

//new-random-city//
var newCityButton = document.getElementById("random-button")
var newRandomCity = new NewRandomCity(newCityButton);

//app//
var originAirport;
var randomAirport;
var flightURL;
var startingCity = document.getElementById("starting-city")   //get starting city value from form

function initMap(latitude_deg, longitude_deg) {  // Initialize and add the map
  console.log(typeof(latitude_deg), typeof(longitude_deg))
  var pos = { lat: latitude_deg, lng: longitude_deg } // The location of city
  var map = new google.maps.Map(     // The map, centered at city
    document.getElementById('map'), { zoom: 6, center: pos });
  var marker = new google.maps.Marker({ position: pos, map: map });  // The marker, positioned at city
  console.log("hi")
}

var app = new App(originAirport, randomAirport, flightURL, startingCity, airports, flightTable, newRandomCity, initMap); // initMap


app.start();
