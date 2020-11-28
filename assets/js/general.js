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
})

$("#instructions").click(function(){
    $(".instructions").show();
    $('.menu').toggle();
});
$("#settings").click(function(){
    $(".settings").show();
    $('.menu').toggle();
});
$("#play").click(function(){
    $("#start-game").show();
    $('.menu').toggle();
});
$("#start-game").click(function(){
    $("#start-game").hide();
    $(".content").show();
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


//navigate with voice
const btn = document.querySelector('.talk');

//Replies
const menu = ["Settings Menu", "Instructions Guide", "Contact me", "Credits Screen"]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("voice is active");
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    readOutLoud(transcript);
    $('#btn').trigger('click', ()=>{
    recognition = new SpeechRecognition();
    })
};

btn.addEventListener('click', ()=>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    //navigation part
    if (message.includes("settings")){
       speech.text = "Settings Menu, For Another Command Press the record button"
        $(".content").hide(); 
        $(".credits").hide();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').show();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').hide();
        $('.menu').hide();
    } else if (message.includes("play")){
       speech.text = "Good Luck!"
        $(".content").hide(); 
        $(".credits").hide();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").show();
        $('.instructions').hide();
        $('.menu').hide();
    }else if (message.includes("instructions")){
       speech.text = "Instructions menu, would you like me to read this to you? click voice input and reply with either yes or no"
        $(".content").hide(); 
        $(".credits").hide();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').show();
        $('.menu').hide();
    }else if (message.includes("yes")){
                speech.text = "This game uses keyboard or voice inputs to maneuver a block on screen. The controls for this game are as follows, the 'a' key will move left, the 'd' key will move right, the 's' key will move down, finally the 'q' and 'e' keys can rotate the blocks. If you would like to play with mobile or tablet device, there are on screen buttons which also allow you to control the blocks using this input method. Finally you can choose 'voice mode in the settings, this will enable you to play the game and position the blocks using voice commands. The commands for voice control are: 'left' for left, 'right' for right, 'turn' for rotation,' down to move down."
    }else if (message.includes("back")){
       speech.text = "Main Menu. Please Select From The Following Options"
        $(".content").hide(); 
        $(".credits").hide();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').hide();
        $('.menu').show();
    }else if (message.includes("contact")){
       speech.text = "Should you wish to contact me you can do so using the form below.";
        $(".content").hide(); 
        $(".credits").hide();
        $('.contact').show();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').hide();
        $('.menu').hide();
    }else if (message.includes("credits")){
        $(".content").hide(); 
        $(".credits").show();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').hide();
        $('.menu').hide();
    }else if (message.includes("start")){
        $(".content").show(); 
        $(".credits").hide();
        $('.contact').hide();
        $('.social').hide();
        $('.settings').hide();
        $('#game-over').hide();
        $("#start-game").hide();
        $('.instructions').hide();
        $('.menu').hide();
        alive = true;
        board.forEach(row => row.fill(0));
        trackScore();
        blockReset();
        autoDraw();
        progression();
    }else if (message.includes("sound on")){
        document.getElementById('background').play();
        $('.audioFeedback').text("Audio Selected: ON");
        $('#sound').show();
        $('#mute').hide();
        audio.playing = 1;
    }else if (message.includes("sound off")){
        document.getElementById('background').pause();
        $('.audioFeedback').text("Audio Selected: OFF");
        $('#sound').hide();
        $('#mute').show();
        audio.playing = 1;
    }else if (message.includes("easy")){
        fallRate = 400;
        difficulty = 1;
        $('.difficulty').text("Difficulty: Easy Selected");
        speech.text = "Difficulty level set to easy";
    }else if (message.includes("medium")){
        fallRate = 300;
        difficulty = 2;
        $('.difficulty').text("Difficulty: Medium Selected");
        speech.text = "Difficulty level set to medium";
    }else if (message.includes("hard")){
        fallRate = 200;
        difficulty = 3;
        $('.difficulty').text("Difficulty: Hard Selected");
        speech.text = "Difficulty level set to hard, rest in peace!";
    }else if (message.includes("left")){
        blockMove(-1);  
    }else if (message.includes("left left")){
        blockMove(-2);
    }else if (message.includes("left left left")){
        blockMove(-3);
    }else if (message.includes("right")){
        blockMove(+1);
    }else if (message.includes("down")){
        dropBlock();
    }else if (message.includes("turn")){
        blockRotation(-1);
    }else if (message.includes("stop")){
        gameOver();
    } else {
        speech.text = "I'm sorry, I'm just a simple machine, with limited resources! I only understand the words that are contained within buttons, for example the word 'instructions' will bring you to the instructions screen";
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}