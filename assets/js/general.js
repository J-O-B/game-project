//Page Load Popup - (www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-For-Opening-A-Popup-Window-On-Page-load.html)
$(document).ready(function() { 
    var id ='#dialog';
    
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    
    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow",0.9); 
    
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();          
    
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    
    //transition effect
    $(id).fadeIn(2000);  
    
    //if close button is clicked
    $('.window .retro-button').click(function (e) {
    $('#introVid').each(function(){
        this.pause(); // Stop playing
    }); 
    $('#site-audio').each(function(){
        this.play(); // Stop playing
    });
 
    
    //Closing the pop-up window
    //Cancel the link behavior
    e.preventDefault();
    $('#mask').hide();
    $('.window').hide();
    });
    //if mask is clicked
    $('#mask').click(function () {
    $('#introVid').each(function(){
        this.pause(); // Stop playing
    });
    $('#site-audio').each(function(){
        this.play(); // Stop playing
    });
    
    
    
    $(this).hide();
    $('.window').hide();
    });
});
//End Of Popup Window;

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