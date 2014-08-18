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

function displayMenu() {
  var elDropdown = document.getElementById('dropdown-menu');
  elDropdown.style.display = 'block';
}

function hideMenu() {
  var elDropdown = document.getElementById('dropdown-menu');
  elDropdown.style.display = 'none';
}

function displayForm() {
  var elForm = document.getElementById('form');
  elForm.style.display = 'block';
  var elCities = document.getElementsByClassName('city-trigger--mouseover');
  for (i = 0; i < elCities.length; i++) {
    elCities[i].style.zIndex = '-100';
  }
}

function hideForm() {
  var elForm = document.getElementById('form');
  elForm.style.display = 'none';
}


/* event listeners */

var elCities = document.getElementsByClassName('city-trigger--mouseover');
for (i = 0; i < elCities.length; i++) {
  elCities[i].addEventListener('mouseover', popUpCity, false);
}

var elCities = document.getElementsByClassName('city-bubbles__city');
for (i = 0; i < elCities.length; i++) {
  elCities[i].addEventListener('mouseout', popOffCity, false);
}

var elem = document.getElementById('places');
elem.addEventListener('mouseover', displayMenu, false);

var elDropdown = document.getElementById('dropdown-menu');
elDropdown.addEventListener('mouseover', displayMenu, false);
elDropdown.addEventListener('mouseout', hideMenu, false);

var elLogin = document.getElementById('login');
elLogin.addEventListener('mouseover', displayForm, false);

var elSignInButton = document.getElementById('sign-in');
elSignInButton.addEventListener('click', hideForm, false);






