

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-09-01?inboundpartialdate=2020-12-01",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "f640a99fbbmsh905cff26b882c6fp1aef9fjsn97743e5f66fb"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
