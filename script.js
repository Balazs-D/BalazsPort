jQuery(document).ready(function(){

    $(window).on('load', function() {
        $("#yellow").css({right: '100%'}); 
        $("#pink").css({left: '120%'});

        $("#about").hide();
        $("#work").hide();
        $("#skills").hide();

        $("#circle-frame").css({left: '40%'});
        $("#nav").css({left: '44.5%'});
        $(".ul").css({background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQYV2NkwAIYYWK/OET+s/14A+aDCZAATBIkgVslurEAYWYMBpfCIVgAAAAASUVORK5CYII=")'});
        $("#circle-in").css({background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQYV2OMz/7wf+FUAUYGKADxUTgwSbAgTDWMxq4Sm5kA/zMdeIVJgBkAAAAASUVORK5CYII=")'});

        $("nav").animate({})
       });

        
    $("#logo").click(function(){
        $("#yellow").animate({right: '0%'}); 
        $("#pink").animate({left: '120%'});
        $("#circle-frame").animate({left: '40%'});
        $("#nav").animate({left: '44.5%'});
        $("#about").hide();
        $("#work").hide();
        $("#skills").hide();
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-about").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-work").css({"background":"#FF8500", "font-family":"john-reg-joe"});
    });

    $(".button-skills").click(function(){
        $(".tech-box").animate({opacity: '1'}, "20000");
        $(".text-box").animate({opacity: '0'}, "20000");
        $("#about").hide();
        $("#work").hide();
        $("#skills").show();
        $("#yellow").animate({right: '30%'});
        $("#pink").animate({left: '120%'});
        $("#skills").css({display: "flex"});
        $(".button-skills").css({"background":"white", "font-family":"john-fat-joe"});
        $(".button-about").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-work").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $("#circle-frame").animate({left: '53%'});
        $("#nav").animate({left: '69%'});

    });

    $(".button-about").click(function(){
        $(".text-box").animate({opacity: '1'}, "20000");
        $(".tech-box").animate({opacity: '0'}, "20000");
        $("#skills").hide();
        $("#work").hide();
        $("#about").show();
        $("#yellow").animate({right: '70%'});
        $("#pink").animate({left: '100%'});
        $(".button-about").css({"background":"white", "font-family":"john-fat-joe"});
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-work").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $("#circle-frame").animate({left: '15%'});
        $("#nav").animate({left: '29%'});
        

    });

    $(".button-work").click(function(){
        $("#about").hide();
        $("#skills").hide();
        $("#work").show();
        $("#yellow").animate({right: '70%'});
        $("#pink").animate({left: '20%'});
        $(".button-work").css({"background":"white", "font-family":"john-fat-joe"});
        $(".button-about").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $("#circle-frame").animate({left: '15%'});      
        $("#nav").animate({left: '5%'});

    });

    $(".cont-contact").mouseenter(function(){
        var but = $(".cont-contact");
        but.animate({width: "20vw"}, "fast");
        var con = $(".con-i"); 
        con.animate({opacity: "1"}, "slow");
        

        
        
    });

    $(".cont-contact").mouseleave(function(){
        var t = $(".con-i"); 
        t.animate({opacity: "0"}, "slow");
        
    });

    $(".con-i").mouseenter(function(){
        $(".button-contact").css({width: "20vw"});

    });

    $(".con-i").mouseleave(function(){
        $(".button-contact").css({width: "10vw"});

    });

    




  });