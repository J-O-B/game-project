//Menu script
$('.back').click(function(){
    $(".instructions").hide();
    $(".settings").hide();
    $(".content").hide();
    $(".contact").hide();
    $(".social").hide();
    $(".credits").hide();
    $('#game-over').hide();
    gameMode();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById('down').pause();
        document.getElementById("back").play();
    }
})

$("#instructions").click(function(){
    document.getElementById("click").play();
    document.getElementById("click").volume = 0.5;
    $(".instructions").show();
    $('.menu').toggle();
});
$("#settings").click(function(){
    $(".settings").show();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});
$("#play").click(function(){
    $("#start-game").show();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});
$("#start-game").click(function(){
    $("#start-game").hide();
    $(".content").show();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});
$("#contact").click(function(){
    $(".contact").show();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});
$("#social").click(function(){
    $(".social").show();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});
$("#credits").click(function(){
    $(".credits").show();
    $('.menu').toggle();
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
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
