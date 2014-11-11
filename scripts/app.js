/**
 * Created by shureedkabir on 10/13/14.
 */


$(document).ready(function(){


//body_box animation, with given body page


   function banimate3(a) {
       var h = $(a).height();
       var w = $(a).width();

       var ph = $('#body_box').height();

       $('#body_box').delay(150).animate({
               height: h
           },
           {
               easing:'easeOutExpo',
               duration:300
           }
       );

       $('#body_box').delay(30).animate({
               width: w
           },
           {
               easing:'easeOutExpo',
               duration:300

           }
       );
   }


//prepare on load up:

    //body elements should be gone
    $('.body_section').hide();
    $('#menu').hide();
    $('.menu_items').hide();
    $('#univ').hide();
    $('#body_box').hide();


//startup

    //slide header down
    $('#menu').delay(400).slideDown('slow');

    //fade in header items
    $('.menu_items').delay(1000).fadeIn();
    $('#univ').delay(1000).fadeIn();

    //fade in welcome
    $('#name').addClass('menu_active');
    $('#welcome_page').fadeIn();

    //fade in body box
    $('#body_box').delay(1500).fadeIn();







    //button clicks and behavior
     $("#about").click(function() {
        $('.menu_items').removeClass('menu_active');
        $(this).addClass('menu_active');
        $('.body_section').fadeOut('fast');
        banimate3('.aboutme_size');
        $('#aboutme_page').delay(800).fadeIn();
    });

    $("#experience").click(function() {
        $('.menu_items').removeClass('menu_active');
        $(this).addClass('menu_active');
        $('.body_section').fadeOut('fast');
        banimate3('#experience_page');
        $('#experience_page').delay(800).fadeIn();
    });

    $("#languages").click(function() {
        $('.menu_items').removeClass('menu_active');
        $(this).addClass('menu_active');
        $('.body_section').fadeOut('fast');
        banimate3('#languages_page');
        $('#languages_page').delay(800).fadeIn();
    });

    $("#links").click(function() {
        $('.menu_items').removeClass('menu_active');
        $(this).addClass('menu_active');
        $('.body_section').fadeOut('fast');
        banimate3('#links_page');
        $('#links_page').delay(800).fadeIn();
    });

    $("#name").click(function() {
        $('.menu_items').removeClass('menu_active');
        $(this).addClass('menu_active');
        $('.body_section').fadeOut('fast');
        banimate3('#welcome_page');
        $('#welcome_page').delay(800).fadeIn();
    });



    //nav button clicks

    $('.nav').hover(
        function() {
            $(this).addClass('navActive');
            $('.ard', this).css('border-top-color', 'black');
        }, function(){
            $(this).removeClass('navActive');
            $('.ard', this).css('border-top-color', 'red');
        }
    );





    //nav button function
    $('.nav').click(function(){

        $n = $(this).parent().next();

        $('#aboutme_page').scrollTo($n, {easing:'easeOutExpo', duration:800});


    });



    /**
    $('.nav')
        .mouseup(function(){
            $(this).css('transition', 'border-color 0s');
            $(this).css('border-color', 'red');

        })
        .mousedown(function(){

            $(this).css('transition', 'border-color .5s');
            $(this).css('border-color', 'white');
        });

    **/





});




