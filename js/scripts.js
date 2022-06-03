$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = parseInt($("input#age").val());
    const genderInput =$("input#genderInput").val();
    const surveyOne = $("input:radio[name=survey]:checked").val();
    const surveyTwo = $("input:radio[name=survey]:checked").val();
    const surveyThree = $("input:radio[name=survey]:checked").val();
    const surveyFour = $("input:radio[name=survey]:checked").val();
    const surveyFive = $("input:radio[name=survey]:checked").val();
    const totalScore = surveyOne + surveyTwo + surveyThree + surveyFour +surveyFive

    if (genderInput === 'male' || genderInput === 'female' && ageInput < 20 && ageInput >= 5) {
      if (totalScore < 10) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("Ruby")
        $(".surveyAnswer").text(totalScore);
      } else if (totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("C#")
        $("#surveyAnswer").text(totalScore);
      } else if (totalScore >= 15) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("Python")
        $("#surveyAnswer").text(totalScore);
      }
    } else if (genderInput === 'male' || genderInput === 'female' && ageInput >= 20) {
      if (totalScore < 10) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("Ruby")
        $(".surveyAnswer").text(totalScore);
      } else if (totalScore >= 10 && totalScore < 15) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("C#")
        $("#surveyAnswer").text(totalScore);
      } else if (totalScore >= 15) {
        $("#suggestion").show()
        $("#resultName").text(nameInput);
        $("suggestedLang").text("Python")
        $("#surveyAnswer").text(totalScore);
      }
    }

    
   
  });
});