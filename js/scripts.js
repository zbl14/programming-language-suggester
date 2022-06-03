$(document).ready(function() {
  $("#clearResult").click(function() {
    $("#suggestionForUnderFive, #suggestion, #rubyInfo, #cSharpInfo, #javaScriptInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
  });

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

    if (ageInput > 5) {
      $("#suggestionForUnderFive").hide();
      if (ageInput < 20 && totalScore < 10) {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("Ruby");
        $(".clickable").click(function() {
          $("#rubyInfo").show();
          $("#cSharpInfo, #javaScriptInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
        });
      } else if (ageInput < 20 && totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("C#");
        $(".clickable").click(function() {
          $("#cSharpInfo").show();
          $("#rubyInfo, #javaScriptInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
        });
      } else if (ageInput < 20 && totalScore >= 15) {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("JavaScript");
        $(".clickable").click(function() {
          $("#javaScriptInfo").show();
          $("#rubyInfo, #cSharpInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
        });
      } else if (ageInput >= 20 && totalScore < 10) {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("Ruby");
        $(".clickable").click(function() {
          $("#rubyInfo").show();
          $("#cSharpInfo, #javaScriptInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
        });
      } else if (ageInput >= 20 && totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("Rust");
        $(".clickable").click(function() {
          $("#rubyInfo").show();
          $("#cSharpInfo, #javaScriptInfo, #rustInfo, #phythonInfo, #swiftInfo").hide();
        });
      } else if (ageInput >= 20 && totalScore >= 15 && genderInput === "male") {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("Python");
        $(".clickable").click(function() {
          $("#phythonInfo").show();
          $("#rubyInfo, #cSharpInfo, #javaScriptInfo, #rustInfo, #swiftInfo").hide();
        });
      } else if (ageInput >= 20 && totalScore >= 15 && genderInput === "female") {
        $("#suggestion").show();
        $(".nameInput").text(nameInput);
        $("#suggestedLang").text("Swift");
        $(".clickable").click(function() {
          $("#swiftInfo").show();
          $("#rubyInfo, #cSharpInfo, #javaScriptInfo, #rustInfo, #phythonInfo").hide();
        });
      }
    } else if (ageInput > 0 && ageInput <= 5){
      $("#suggestion").hide();
      $("#suggestionForUnderFive").show();
      $(".nameInput").text(nameInput);
    }   
  });
});