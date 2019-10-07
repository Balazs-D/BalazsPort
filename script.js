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

        $("nav").animate({});
        $(".a-cont").hide();
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
        
        $(".button-skills").animate({width: "8vw"});
        $(".button-about").animate({width: "8vw"});
        $(".button-work").animate({width: "8vw"});

        $(".cont-work").animate({right: "10%"});
        $(".cont-about").animate({left: "18%"});
        $(".cont-skills").animate({left: "20%"});
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
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-fat-joe"});
        $(".button-about").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-work").css({"background":"#FF8500", "font-family":"john-reg-joe"});

        $(".button-skills").attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

        $(".button-skills").animate({width: "13vw"});
        $(".button-about").animate({width: "8vw"});
        $(".button-work").animate({width: "8vw"});

        $(".cont-work").animate({right: "10%"});
        $(".cont-about").animate({left: "18%"});
        $(".cont-skills").animate({left: "0%"});


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
        $('.button-about').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

        $(".button-about").css({"font-family":"john-fat-joe"});
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-work").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $("#circle-frame").animate({left: '15%'});
        $("#nav").animate({left: '29%'});
        $(".button-skills").animate({width: "8vw"});
        $(".button-about").animate({width: "13vw"});
        $(".button-work").animate({width: "8vw"});

        $(".cont-work").animate({right: "10%"});
        $(".cont-about").animate({left: "-14%"});
        $(".cont-skills").animate({left: "20%"});
        

    });

    $(".button-work").click(function(){
        $("#about").hide();
        $("#skills").hide();
        $("#work").show();
        $("#yellow").animate({right: '70%'});
        $("#pink").animate({left: '20%'});
        $('.button-work').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

        $(".button-work").css({"font-family":"john-fat-joe"});
        $(".button-about").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $(".button-skills").css({"background":"#FF8500", "font-family":"john-reg-joe"});
        $("#circle-frame").animate({left: '15%'});      
        $("#nav").animate({left: '5%'});

        $(".button-skills").animate({width: "8vw"});
        $(".button-about").animate({width: "8w"});
        $(".button-work").animate({width: "13vw"});
        $(".cont-work").animate({right: "-20%"});
        $(".cont-about").animate({left: "18%"});
        $(".cont-skills").animate({left: "20%"});

    });

    // $(".button-contact").click(function(){
    //     $(".cont-popup").animate({bottom: "-60%"});
    //     $(".a-cont").show();
    //     $(".button-contact").css({"background":"white", "font-family":"john-fat-joe"});
    // });

    $(".button-skills").mouseenter(function(){
        $(".cont-popup").animate({bottom: "-160%"});
        $(".a-cont").hide();


       
    });

    $(".cont-contact").mouseenter(function(){
        $(".a-cont").show();
        $(".con-i").show();

        $(".cont-popup").animate({bottom: "-60%"});       
       


    });

    $("#nav").mouseleave(function(){
        $(".cont-popup").animate({bottom: "-160%"});
        $(".con-i").delay().hide();
            
        
            
    });

    $(".cont-popup").mouseenter(function(){
        $(".cont-popup").css({bottom: "-60%"});
        $(".a-cont").show();
        $(".con-i").show();

        $(".cont-popup").show();
      
    
    });

    $(".cont-popup").mouseleave(function(){
       $(".cont-popup").animate({bottom: "-160%"}, "slow");
        $(".a-cont").delay().hide();
       
     
    
    });

    $(".con-i").mouseenter(function(){
        $(".cont-popup").css({bottom: "-60%"});
        $(".a-cont").show();
      
        $(".cont-popup").show();
        
    });

    $(".con-i").mouseenter(function(){
       $(".a-cont").show();
        
    });

    




  });