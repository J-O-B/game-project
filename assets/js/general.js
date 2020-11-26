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
$('.carousel').carousel({
  interval: false,
});

$('#play').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').hide();
    $(".content").show();
    $(".credits").hide();
})

$('#home').click(function(){
    $("#carouselExampleCaptions").show();
    $('.contact').hide();
    $(".content").hide();
    $(".credits").hide();
})

$('#contact').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').show();
    $(".content").hide();
    $(".credits").hide();
})

$('#credits').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').hide();
    $(".content").hide();
    $(".credits").show();
})