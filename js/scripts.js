
// Business
var animalChoice = function(test) {
  $("#turtle, #hippo, #panda, #chupa").hide();
  if (test === "Turtles") {
    $("#turtle").show();
  } else if (test === "Hippos"){
    $("#hippo").show();
  } else if (test === "Pandas") {
    $("#panda").show();
  } else {
    $("#chupa").show();
  }
};


$(document).ready(function(){
    $("#main form").submit(function(event){
      var animalInput = $("#animals").val();
      animalChoice(animalInput);

    event.preventDefault();
  });
});
