$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = parseInt($("input#age").val());
    const genderInput = $("select#gender").val();
    const surveyOne = parseInt($("input:radio[name=surveyOne]:checked").val());
    const surveyTwo = parseInt($("input:radio[name=surveyTwo]:checked").val());
    const surveyThree = parseInt($("input:radio[name=surveyThree]:checked").val());
    const surveyFour = parseInt($("input:radio[name=surveyFour]:checked").val());
    const surveyFive = parseInt($("input:radio[name=surveyFive]:checked").val());
    const totalScore = surveyOne + surveyTwo + surveyThree + surveyFour + surveyFive;

    if (ageInput >= 5) {
      if (ageInput < 20 && totalScore < 10) {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("Ruby");
      } else if (ageInput < 20 && totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("C#");
      } else if (ageInput < 20 && totalScore >= 15) {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("JavaScript");
      } else if (ageInput >= 20 && totalScore < 10) {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("Ruby");
      } else if (ageInput >= 20 && totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("Rust");
      } else if (ageInput >= 20 && totalScore >= 15 && genderInput === "male") {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("Python");
      } else if (ageInput >= 20 && totalScore >= 15 && genderInput === "female") {
        $("#suggestion").show();
        $(".resultName").text(nameInput);
        $("#suggestedLang").text("Swift");
      }
    } else {
      $("#suggestionForUnderFive").show();
      $(".resultName").text(nameInput);
    }   
  });
});