//Business Logic
function Places(location, landmarks, year, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
  this.season = season;

}

// Places.prototype.fullInfo = function() {
//   return this.location + " " + this.landmarks + " " + this.year + " " + this.season;
// }

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedYear = $("input#year").val();
    var inputtedSeason = $("input#season").val();

    var newPlaces = new Places(inputtedLocation, inputtedLandmarks, inputtedYear, inputtedSeason);

  $("#newPlaces").append("<p><span class='places'>" + newPlaces.location + "</span></p>");

    $(".places").last().click(function() {
    $("#show-places").show();
    $("#show-places h2").text(newPlaces.location);

    $(".landmarks").text(newPlaces.landmarks);
    $(".year").text(newPlaces.year);
    $(".season").text(newPlaces.season);

   });
  });
});
