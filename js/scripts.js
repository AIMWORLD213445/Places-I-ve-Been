//Business Logic
function Places(location, landmarks, year, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
  this.season = season;
}

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event){


    event.preventDefault();
  });
});
