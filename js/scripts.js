$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];


    // forEach loop

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    //
    // });
    // var userInput = $("input#" + blank).val();


    // for Loop

    for (i=0; i <= blanks.length; i++){
      var userInput = $("input#" + blanks[i]).val();
      $("." + blanks[i]).text(userInput);
    }


    // var userInput = $("input#" + blank).val();
    // for (index = 0; index < blanks.length; index++) {
    //   $("." + blank).text(blanks[userInput]);
    // }

    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();


  });
});
