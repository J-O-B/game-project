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
    $(".social").hide();
})

$('#contact').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').show();
    $(".content").hide();
    $(".credits").hide();
    $(".social").hide();
})

$('#credits').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').hide();
    $(".content").hide();
    $(".credits").show();
    $(".social").hide();
    if (audio.playing == 1){
    $("#gameOverScreen").click(function(){
        this.play();
        })
    }
})
$('#social').click(function(){
    $("#carouselExampleCaptions").hide();
    $('.contact').hide();
    $(".content").hide();
    $(".credits").hide();
    $(".social").show();
})

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
