
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

//Main Menu Buttons
$('#start').click(function() {
    $("main-menu").addClass("hide");
    $('#site-audio').each(function(){
        this.pause();
    })
    $("#play").show;
    $('#background').each(function(){
        this.play(); // Start playing
        });
})
