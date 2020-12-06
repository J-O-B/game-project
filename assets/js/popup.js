/*jshint esversion: 6 */

//Above comment to stop errors showing in jshint.com

//Page Load Popup - (www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-For-Opening-A-Popup-Window-On-Page-load.html)
$(document).ready(function() {

    $(".content").hide(); //Screen With Game
    $(".credits").hide(); //Screen With Credits
    $('.contact').hide(); //Screen With Credits
    $('.social').hide(); //Screen With Credits
    $('.settings').hide(); //Screen With Credits
    $('#game-over').hide(); //Screen With Credits
    $("#start-game").hide(); //Screen With Credits
    $('#mute').hide(); //Screen With Credits
    $('.instructions').hide(); //Screen With Credits
    $('#sound').show(); //Screen With Credits
    
    var id ='#dialog';
    
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    
    //Set heigth and width to mask to fill up the whole screen
    if (maskWidth >=1200){
       $('#mask').css({'width':maskWidth,'height':maskHeight}); 
    } else {
        $('#mask').css({'width':maskWidth,'height':"1250px"}); 
    }
    
    
    //transition effect
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow",0.9); 
    
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();          
    
    //Set the popup window to center
    if (winW >= 1200){
        $(id).css('top',  winH/2-$(id).height()/1.5);
        $(id).css('left', winW/2-$(id).width()/2);
    }else {
        $(id).css('left', winW/2-$(id).width()/2);
    }
    
    
    //transition effect
    $(id).fadeIn(2000);  
    
    //if close button is clicked
    $('.window .popup-button').click(function (e) {
        $('#introVid').each(function(){
            this.pause(); 
        }); 
        $('#background').each(function(){
                this.play(); 
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
            this.pause();
        });
        $('#background').each(function(){
                this.play(); 
            });
    
        $(this).hide();
        $('.window').hide();
    });
});
//End Of Popup Window;