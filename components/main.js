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

var app = new App(originAirport, randomAirport, flightURL, startingCity, airports, flightTable, newRandomCity);

app.start();
