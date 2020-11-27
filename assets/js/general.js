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

$('.back').click(function(){
    $(".instructions").hide();
    $(".settings").hide();
    $(".content").hide();
    $(".contact").hide();
    $(".social").hide();
    $(".credits").hide();
    $('.menu').toggle();
})

$("#instructions").click(function(){
    $(".instructions").show();
    $('.menu').toggle();
});
$("#set").click(function(){
    $(".settings").show();
    $('.menu').toggle();
});
$("#play").click(function(){
    $(".content").show();
    $('.menu').toggle();
});
$("#contact").click(function(){
    $(".contact").show();
    $('.menu').toggle();
});
$("#social").click(function(){
    $(".social").show();
    $('.menu').toggle();
});
$("#credits").click(function(){
    $(".credits").show();
    $('.menu').toggle();
});
//Email Form:
function sendMail(contactForm) {
    emailjs.send("gmail", "john", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
