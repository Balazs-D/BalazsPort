jQuery(document).ready(function () {

    window.onload = checkMedia;
    window.onresize = checkMedia;
    
function checkMedia(){

        // =================================================== MOBILE
    if (window.matchMedia("(max-width: 480px)").matches) {

        $("#logo").click(function () {

            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#blue").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});

            $("#circle-frame").animate({width: "60vw",
            height: "60vw", left: "0%", top: "10%" });
            $(".titel").show();

            $(".a-cont").show();
            $(".con-i").show();
            
            $(".cont-popup").show();
            $(".cont-popup").animate({bottom: "-400%"});
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-skills").click(function () {
      
            $("#yellow").show();
            $("#yellow").animate({right: "0%", bottom: "10%"});
            $("#blue").animate({right: "100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "-100%"});

            $("#skills").show();
            $("#skills").animate({})
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "-11%", top: "-2%" });
            $(".titel").hide();
            $(".cont-popup").animate({bottom: "-400%"});

            $('.button-skills').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-about").click(function () {
            $("#blue").show();

            $("#blue").animate({right: "0%", bottom: "10%"});
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});

            $("#pink").hide();
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "51%", top: "-2%" });
            $(".titel").hide();
            $(".cont-popup").animate({bottom: "-400%"});

            $('.button-about').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-work").click(function () {
      
            $("#pink").show();
            $("#skills").hide();
            $(".titel").hide();

            $("#pink").animate({top: "5%", left: "0%"});
            $("#blue").animate({right: "100%", bottom: "10%"});
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $(".cont-popup").animate({bottom: "-400%"});
           
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "-11%", top: "-2%" });
            $('.button-work').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

            

        });

        $(".button-contact").click(function () {

            $(".cont-popup").show();
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});
                $("#blue").animate({right: "-100%", bottom: "10%"});
            // $("#pink").hide();
            // $("#blue").hide();
            // $("#yellow").hide();
            $(".cont-popup").animate({bottom: "350%"});
            $("#circle-frame").animate({width: "60vw",
            height: "60vw", left: "0%", top: "10%" });
            $(".titel").show();

            $('.button-contact').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');

            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({right: "-100%", bottom: "10%"});
            $("#blue").animate({right: "-100%", bottom: "10%"});

        });
       
    } 

    
    
    // =================================================== DESKTOP
    else if (window.matchMedia("(min-width: 1225px)").matches){
        
        
// ===================================== Click on Logo

        $("#logo").click(function () {
            $("#yellow").animate({
                right: '0%'
            });
            $("#pink").animate({
                left: '120%'
            });
            $("#circle-frame").animate({
                left: '40%'
            });
            $("#nav").animate({
                left: '44.5%'
            });
            $("#about").hide();
            $("#work").hide();
            $("#skills").hide();
            $(".button-skills").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $(".button-about").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $(".button-work").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });

            $(".button-skills").animate({
                width: "8vw"
            });
            $(".button-about").animate({
                width: "8vw"
            });
            $(".button-work").animate({
                width: "8vw"
            });

            $(".cont-work").animate({
                right: "10%"
            });
            $(".cont-about").animate({
                left: "18%"
            });
            $(".cont-skills").animate({
                left: "20%"
            });
        });
// ===================================== Click on Skills
        $(".button-skills").click(function () {
            $(".tech-box").animate({
                opacity: '1'
            }, "20000");
            $(".text-box").animate({
                opacity: '0'
            }, "20000");
            $("#about").hide();
            $("#work").hide();
            $("#skills").show();
            $("#yellow").animate({
                right: '30%'
            });
            $("#pink").animate({
                left: '120%'
            });
            $("#skills").css({
                display: "flex"
            });
            $(".button-skills").css({
                "background": "#FF8500",
                "font-family": "john-fat-joe"
            });
            $(".button-about").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $(".button-work").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });

            $(".button-skills").attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

            $(".button-skills").animate({
                width: "13vw"
            });
            $(".button-about").animate({
                width: "8vw"
            });
            $(".button-work").animate({
                width: "8vw"
            });

            $(".cont-work").animate({
                right: "10%"
            });
            $(".cont-about").animate({
                left: "18%"
            });
            $(".cont-skills").animate({
                left: "0%"
            });


            $("#circle-frame").animate({
                left: '53%'
            });
            $("#nav").animate({
                left: '69%'
            });

        });
// ===================================== Click on About

        $(".button-about").click(function () {
            $(".text-box").animate({
                opacity: '1'
            }, "20000");
            $(".tech-box").animate({
                opacity: '0'
            }, "20000");
            $("#skills").hide();
            $("#work").hide();
            $("#about").show();
            $("#yellow").animate({
                right: '70%'
            });
            $("#pink").animate({
                left: '100%'
            });
            $('.button-about').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

            $(".button-about").css({
                "font-family": "john-fat-joe"
            });
            $(".button-skills").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $(".button-work").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $("#circle-frame").animate({
                left: '15%'
            });
            $("#nav").animate({
                left: '29%'
            });
            $(".button-skills").animate({
                width: "8vw"
            });
            $(".button-about").animate({
                width: "13vw"
            });
            $(".button-work").animate({
                width: "8vw"
            });

            $(".cont-work").animate({
                right: "10%"
            });
            $(".cont-about").animate({
                left: "-14%"
            });
            $(".cont-skills").animate({
                left: "20%"
            });


        });
// ===================================== Click on Work

        $(".button-work").click(function () {
            $("#about").hide();
            $("#skills").hide();
            $("#work").show();
            $("#yellow").animate({
                right: '70%'
            });
            $("#pink").animate({
                left: '20%'
            });
            $('.button-work').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');

            $(".button-work").css({
                "font-family": "john-fat-joe"
            });
            $(".button-about").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $(".button-skills").css({
                "background": "#FF8500",
                "font-family": "john-reg-joe"
            });
            $("#circle-frame").animate({
                left: '15%'
            });
            $("#nav").animate({
                left: '5%'
            });

            $(".button-skills").animate({
                width: "8vw"
            });
            $(".button-about").animate({
                width: "8w"
            });
            $(".button-work").animate({
                width: "13vw"
            });
            $(".cont-work").animate({
                right: "-20%"
            });
            $(".cont-about").animate({
                left: "18%"
            });
            $(".cont-skills").animate({
                left: "20%"
            });

        });

// =====================================  Contact Pop-Up

        $(".button-skills").mouseenter(function () {
            $(".cont-popup").animate({
                bottom: "-400%"
            });
            $(".a-cont").hide();
            $('.button-contact').attr('style', 'background: #FF8500');



        });

        $(".cont-contact").mouseenter(function () {
            $(".a-cont").show();
            $(".con-i").show();

            $(".cont-popup").animate({
                bottom: "-112%"
            });
            $('.button-contact').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2NkQAKtn97/Z4TxQZxqPkFGsACMA2IzInNAAgD4nw9qAYR7cAAAAABJRU5ErkJggg==")');

            $(".cont-contact").mouseleave(function () {
                $('.button-contact').attr('style', 'background: #FF8500');

            })


        });

        $("#nav").mouseleave(function () {
            $(".cont-popup").animate({
                bottom: "-400%"
            });
            $(".con-i").delay().hide();
            $('.button-contact').attr('style', 'background: #FF8500');



        });

        $(".cont-popup").mouseenter(function () {
            $(".cont-popup").css({
                bottom: "-112%"
            });
            $(".a-cont").show();
            $(".con-i").show();

            $(".cont-popup").show();


        });

        $(".cont-popup").mouseleave(function () {
            $(".cont-popup").animate({
                bottom: "-400%"
            }, "slow");
            $(".a-cont").delay().hide();
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".con-i").mouseenter(function () {
            $(".cont-popup").css({
                bottom: "-112%"
            });
            $(".a-cont").show();

            $(".cont-popup").show();

        });

        $(".con-i").mouseenter(function () {
            $(".a-cont").show();

        });
        }
    
    
    // =================================================== PAD
    else {
        $("#logo").click(function () {

            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#blue").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});

            $("#circle-frame").animate({width: "60vw",
            height: "60vw", left: "20%", top: "10%" });
            $(".titel").show();

            $(".a-cont").show();
            $(".con-i").show();
            
            $(".cont-popup").show();
            $(".cont-popup").animate({bottom: "-400%"});
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-skills").click(function () {
      
            $("#yellow").show();
            $("#yellow").animate({right: "0%", bottom: "10%"});
            $("#blue").animate({right: "100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "-100%"});

            $("#skills").show();
            $("#skills").animate({})
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "11%", top: "-2%" });
            $(".titel").hide();
            $(".cont-popup").animate({bottom: "-400%"});

            $('.button-skills').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-about").click(function () {
            $("#blue").show();

            $("#blue").animate({right: "0%", bottom: "10%"});
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});

            $("#pink").hide();
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "71%", top: "-2%" });
            $(".titel").hide();
            $(".cont-popup").animate({bottom: "-400%"});

            $('.button-about').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-work').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

        });

        $(".button-work").click(function () {
      
            $("#pink").show();
            $("#skills").hide();
            $(".titel").hide();

            $("#pink").animate({top: "5%", left: "0%"});
            $("#blue").animate({right: "100%", bottom: "10%"});
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $(".cont-popup").animate({bottom: "-400%"});
           
            $("#circle-frame").animate({width: "24vw",
            height: "24vw", left: "11%", top: "-2%" });
            $('.button-work').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-contact').attr('style', 'background: #FF8500');

            

        });

        $(".button-contact").click(function () {

            $(".cont-popup").show();
            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({top: "5%", left: "100%"});
                $("#blue").animate({right: "-100%", bottom: "10%"});
            // $("#pink").hide();
            // $("#blue").hide();
            // $("#yellow").hide();
            $(".cont-popup").animate({bottom: "160%"});
            $("#circle-frame").animate({width: "60vw",
            height: "60vw", left: "20%", top: "10%" });
            $(".titel").show();

            $('.button-contact').attr('style', 'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2P8DwSMQMAABGA2iAHjgGi4DJgDAiBlMA6IBgAlUxP9eF61ZwAAAABJRU5ErkJggg==")');
            $('.button-about').attr('style', 'background: #FF8500');
            $('.button-skills').attr('style', 'background: #FF8500');
            $('.button-work').attr('style', 'background: #FF8500');

            $("#yellow").animate({right: "-100%", bottom: "10%"});
            $("#pink").animate({right: "-100%", bottom: "10%"});
            $("#blue").animate({right: "-100%", bottom: "10%"});

        });

    }
    }

}

);


