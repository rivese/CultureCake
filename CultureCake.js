function popUpCity() {
  var elBubbles = document.getElementsByClassName('city-bubbles__city');
  for (i = 0; i < elBubbles.length; i++) {
    if (this.id === elBubbles[i].id) {
      elBubbles[i].style.display = 'block';
      elBubbles[i].style.padding = '40px';
      this.style.zIndex = '-200';
    }
  }
}

function popOffCity() {
  var elBubbles = document.getElementsByClassName('city-bubbles__city');
  for (i = 0; i < elBubbles.length; i++) {
    if (this.id === elBubbles[i].id) {
      elBubbles[i].style.display = 'none';
    }
  }
}

function switchImage() {

}

function displayMenu() {
  var elDropdown = document.getElementById('dropdown-menu');
  elDropdown.style.display = 'block';
}

function hideMenu() {
  var elDropdown = document.getElementById('dropdown-menu');
  elDropdown.style.display = 'none';
}

var elCities = document.getElementsByClassName('city-icon--mouseover');
for (i = 0; i < elCities.length; i++) {
  elCities[i].addEventListener('mouseover', popUpCity, false);
  elCities[i].addEventListener('mouseout', popOffCity, false);
}

var elem = document.getElementById('places');
elem.addEventListener('mouseover', displayMenu, false);
elem.addEventListener('mouseout', hideMenu, false);




