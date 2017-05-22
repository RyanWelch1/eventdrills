// cat carousel

$("a.thumbnail").click(function(event){
var thumbnailsource = $(event.currentTarget).find("img").attr("src");
console.log(thumbnailsource);
  $("div.hero img").attr("src", thumbnailsource);
});


Return of FizzBuzz

$("form#number-chooser").on("click", function() {
  var content = $("input#submit").val();
if $("content:contains('fizz')").addClass("fizz");
  else $("content:contains('buzz')").addClass("buzz");
  else if $("content:contains('fizzbuzz')").addClass("fizzbuzz");
  
});

Lightbulb Toggle

$("div.lightbulb js-lightbulb").on("click", function() {
  $(this).toggleClass("bulb-on");
  
});