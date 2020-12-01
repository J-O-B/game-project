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

//menu buttons and hide/show logic
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


$("#email").on("submit", function(){
   $('#submit-text').text("Thank You For Your Feedback, I Will Try To Get Back To You As Soon As Possible.")
   return false;
 });


 //Social Card
 const card = document.querySelector('.social-card');
 const container = document.querySelector('.social-container');

const title = document.querySelector('.title');
const pic = document.querySelector('.pic img');
const size = document.querySelector('.sizes button');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info p');

 container.addEventListener('mousemove', (e) => {
     console.log("hey");
     let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
 });

//animate in
 container.addEventListener("mouseleave", (e) =>{
 //pop
    title.style.transform = 'translateX(150px);'
  });

 //animate in
 container.addEventListener("mouseleave", (e) =>{
     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
     title.style.transform = 'translateX(0px);'
 });