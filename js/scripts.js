$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const personInput = $("input#name").val();
    const ageInput = parseInt($("input#age").val());
    const genderInput =$("input#genderInput").val();
    const surveyOne = $("input:radio[name=survey]:checked").val();
    const surveyTwo = $("input:radio[name=survey]:checked").val();
    const surveyThree = $("input:radio[name=survey]:checked").val();
    const surveyFour = $("input:radio[name=survey]:checked").val();
    const surveyFive = $("input:radio[name=survey]:checked").val();

    $(".surveyAnswer").text(surveyOne);
  });
});