/*jshint esversion: 6 */

//Above comment to stop errors showing in jshint.com

//Menu script
$('.back').click(function(){
    $(".instructions").hide();
    $(".settings").hide();
    $(".content").hide();
    $(".contact").hide();
    $(".social").hide();
    $(".credits").hide();
    $('#game-over').hide();
    $('.menu').toggle();
});

//menu buttons and hide/show logic
//Instructions Button
$("#instructions").click(function(){
    $(".instructions").show();
    $(".back").show();
    $('.menu').toggle();
});
//Settings Button
$("#settings").click(function(){
    $(".settings").show();
    $(".back").show();
    $('.menu').toggle();
});
//Play Button
$("#play").click(function(){
    $("#start-game").show();
    $(".back").show();
    $('.menu').toggle();
});
//Start Game Button
$("#start-game").click(function(){
    $("#start-game").hide();
    $(".back").show();
    $(".content").show();
});
//Contact Button
$("#contact").click(function(){
    $(".contact").show();
    $(".back").show();
    $('.menu').toggle();
});
//Social Button
$("#social").click(function(){
    $(".social").show();
    $(".back").show();
    $('.menu').toggle();
    animateOrNot();
});
//Credits Button
$("#credits").click(function(){
    $(".credits").show();
    $(".back").show();
    $('.menu').toggle();
});
//Email Button (on social page)
$(".mail").click(function(){
    //try force hide other sections
    $(".settings").hide();
    $(".contact").show();
    $(".social").hide();
    $(".emailMe").show();
});

// Email Form:
// Required code for API
function sendMail(contactForm) {
    emailjs.send("gmail", "john", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            $('#submit-text').text("SUCCESS", response);
        },
        function(error) {
            $('#submit-text').text("FAILED", error);
        }
    );
    return false;  // To block form loading a new page
}


 //Social Card (Dev Ed YouTube Card Tutorial)
function animateOrNot(){
    if ($(window).width() >= 769) {
//Movement Animation to happen
        const card = document.querySelector(".social-card");
        const container = document.querySelector(".social-container");
        //Items
        const title = document.querySelector(".title");
        const pic = document.querySelector(".pic img");
        const contactMe = document.querySelector(".contact-me");
        const description = document.querySelector(".info p");
        const links = document.querySelector(".links");
        const circle = document.querySelector(".circle");

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
            links.style.transform = "translateZ(150px)";
            contactMe.style.transform = "translateZ(200px)";
            circle.style.transform = "translateZ(50px)";
        });
//Animate Out
        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            //Popback
            title.style.transform = "translateZ(0px)";
            pic.style.transform = "translateZ(0px) rotateZ(0deg)";
            description.style.transform = "translateZ(0px)";
            links.style.transform = "translateZ(0px)";
            contactMe.style.transform = "translateZ(0px)";
            circle.style.transform = "translateZ(0px)";
        });
    }
}
//If click email load the contact form.
$("#mail").click(function(){
    $(".social").fadeOut(500);
    $(".settings").fadeIn(500);
});

