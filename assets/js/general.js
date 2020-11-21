// Website audio toggle
$('#audio-butt-on').click(function() {
    $('#site-audio').each(function(){
        this.play(); // Stop playing
    })
});
$('#audio-butt-off').click(function() {
    $('#site-audio').each(function(){
        this.pause(); // Stop playing
    })
});

// SFX audio toggle
$('#sfx-butt-on').click(function() {
    $('.sfx').each(function(){
        this.play(); // Stop playing
    })
});
$('#sfx-butt-off').click(function() {
    $('.sfx').each(function(){
        this.pause(); // Stop playing
    })
});

//Menu script
$(function() {
  $('.jqueryOptions').hide();

  $('#choose').change(function () {
    $('.jqueryOptions').slideUp();
    $('.jqueryOptions').removeClass('current-opt');
    $("." + $(this).val()).slideDown();
    $("." + $(this).val()).addClass('current-opt');
  });
});