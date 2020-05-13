class NewRandomCity {
  constructor(newCityButton){
    this.newCityButton = newCityButton;
    this.newCity = this.newCity.bind(this);
    this.newCityButton.addEventListener("click", this.newCity);
  }

   newCity() {
    console.log("hi");
  }

}
