//search term
//number of records
//year start search
//year end search
// button search
// button clear results

//top articles area

function io(argument) {
  var x = 5;
  var y = 5;
  var xy = x + y;
  console.log(xy);
}

io()


$( "#submitbutton" ).click(function() {
   event.preventDefault();

  var searchTerm = $("#search").val();
var records = $("#number").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "3c51104db6cf495bbb68cdb8c3c04889",
  'q': searchTerm ,
  'fq': records
  // 'begin_date': startYear,
  // 'end_date': endYear
});




$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  alert("worked");
});

});

 