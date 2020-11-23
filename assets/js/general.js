//Menu script
$(function() {
  $('.jqueryOptions').hide();

  $('#choose').change(function () {
    $('.jqueryOptions').slideUp();
    $('.jqueryOptions').removeClass('current-opt');
    $("." + $(this).val()).slideDown();
    $("." + $(this).val()).addClass('current-opt');
  });
})

$("option[value='opt4']").click(function(){
    console.log("Hey");
})