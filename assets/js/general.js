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


 //Social Card (Dev Ed YouTube Card Tutorial)
 function animateOrNot(){
 if ($(window).width() >= 769) {
//Movement Animation to happen
const card = document.querySelector(".social-card");
const container = document.querySelector(".social-container");
//Items
const title = document.querySelector(".title");
const pic = document.querySelector(".pic img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info p");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  pic.style.transform = "translateZ(200px) rotateZ(-5deg)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(150px)";
  purchase.style.transform = "translateZ(200px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  pic.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
 }
};
$("#mail").click(function(){
    $(".social").fadeOut(500);
    $(".settings").fadeIn(500);
    if(audio.playing == 1){
        document.getElementById("click").play();
    }
});