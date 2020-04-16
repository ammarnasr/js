$(document).ready(function(){

    //intit scroll magic
    var controller = new ScrollMagic.Controller();

    //build a scene to play the animation in
    var ourScene = new ScrollMagic.Scene({
        triggerElement : '#project01'
    })
    .setClassToggle('#project01' , 'fade-in')// add class .fade-in to element with id #project01
    .addIndicators({
        name : 'fade project01 scene',
        colorTrigger : 'black',
        indent : 200 , 
        colorStart : '#756C695'
    })// from the add indicator pligin
    .addTo(controller)

});


















