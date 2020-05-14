class NewRandomCity {
  constructor(newCityButton){
    this.newCityButton = newCityButton;
    this.onNewCityClick = this.onNewCityClick.bind(this);
    this.getNewRandomCity = this.getNewRandomCity.bind(this);
    this.newCityButton.addEventListener("click", this.getNewRandomCity);
  }

   onNewCityClick(getFlightInfo) {
     this.getFlightInfo = getFlightInfo;
  }

  getNewRandomCity() {
    this.getFlightInfo();
  }

}
