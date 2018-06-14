
//search term
//number of records
//year start search
//year end search
// button search
// button clear results

//top articles area


 // This .on("click") function will trigger the AJAX Call
      $("#searchbutton").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box

        var searchTerm = $("#searchTerm").val()
;        var records = $("#records").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();

        // Here we construct our URL

        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json%E2%80%9C;"

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#movie-view").text(JSON.stringify(response));
        });

        

        // -----------------------------------------------------------------------

      });

