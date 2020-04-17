$(document).ready(function(){

    //intit scroll magic
    var controller = new ScrollMagic.Controller();

    //pin intro scene
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement : '#intro',
        triggerHook : 0,
        duration : '30%'
    })
    .setPin('#intro' , {pushFollowers : false})
    .addTo(controller)
    
    //pin again
    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement : '#project01',
        triggerHook : 0.4
    })
    .setPin('#intro' , {pushFollowers : false})
    .addTo(controller)
    

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


















