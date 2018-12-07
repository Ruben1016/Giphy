// week-3-day-4-acitivity-13

$("button").on("click", function() {

var person = $(this).attr("data-person");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "r") {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
              gifDiv.append(personImage);
              $("#gifs-appear-here").prepend(gifDiv);
        }
    }
  });
});
// week-3-day-4-activity-10
$("#add-person").on("click", function(event) {
    event.preventDefault();

    var person = $("#person-input").val();

    person.push(person);

    renderButtons();
  });
// week-3-day-5-activity-15
  $(document).on("click", ".person-btn");

  renderButtons();

  $(".person").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("person", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("person", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });