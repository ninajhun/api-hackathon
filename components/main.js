//flight-info//
var table = document.querySelector("table");
var flightTable = new FlightTable(table);

//new-random-city//
var newCityButton = document.getElementById("random-button")

//app//
var originAirport;
var randomAirport;
var flightURL;
var startingCity = document.getElementById("starting-city")

function initMap(latitude_deg, longitude_deg) {
  var pos = { lat: latitude_deg, lng: longitude_deg }
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 6, center: pos });
  var marker = new google.maps.Marker({ position: pos, map: map });
}

var app = new App(originAirport, randomAirport, flightURL, startingCity, airports, flightTable, newCityButton, initMap); // initMap


app.start();
