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
// var randomAirportInfo = [
//   {
//     airportCode: "CDG",
//     city: "Paris",
//     coords: { lat: 48.8566, lng: 2.3522 }
//   },
//   {
//     airportCode: "PEK",
//     city: "Beijing",
//     coords: { lat: 39.9042, lng: 116.4074 }
//   },
//   {
//     airportCode: "LHR",
//     city: "London",
//     coords: { lat: 51.5074, lng: 0.1278 }

//   },
//   {
//     airportCode: "HND",
//     city: "Tokyo",
//     coords: { lat: 35.6762, lng: 139.6503 }
//   },
// ]
var app = new App(originAirport, randomAirport, flightURL, startingCity, airports, flightTable, newRandomCity);

app.start();
