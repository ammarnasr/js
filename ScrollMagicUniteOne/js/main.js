$(document).ready(function(){

    //intit scroll magic
    var controller = new ScrollMagic.Controller();

    //build a scene to play the animation in
    // loop through each element with class .project
    $('.project').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement : this.children[0] ,
            triggerHook : 0.9
        })
        .setClassToggle (this , 'fade-in')
        .addIndicators({
            name : this,
            colorTrigger : 'black',
            colorStart : ' yellow',
            colorEnd : 'pink'
        })
        .addTo(controller)
    });



});


















