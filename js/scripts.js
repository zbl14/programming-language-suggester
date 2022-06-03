$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const personInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const survey = $("input:radio[name=survey]:checked").val();

    $(".surveyAnswer").text(survey);
  });
});