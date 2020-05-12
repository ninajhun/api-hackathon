
//get starting city value from form

var startingCity = document.getElementById("starting-city")

startingCity.addEventListener("change", getStartingCity);

function getStartingCity() {
  document.querySelector(".start-modal").classList.add("hidden");
  console.log("clicked!")
  console.log("starting city", startingCity.value);
}




var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-09-01?inboundpartialdate=2020-12-01",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": skyKey
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
