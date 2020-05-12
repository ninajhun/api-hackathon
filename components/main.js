

var startingCity = document.getElementById("starting-city")

startingCity.addEventListener("change", function(){
  document.querySelector(".start-modal").classList.add("hidden");
  console.log("clicked!")
})
