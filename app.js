/**
 * Created by shureedkabir on 10/13/14.
 */


$(document).ready(function(){


//body_box animation, with given body page
    var banimate = function(){

        var h = $('#welcome_page').height();
        var w = $('#welcome_page').width();
        $(this).animate({
                height: h
            },
            'slow',
            'swing'
        );

        $(this).delay(100).animate({
                width: w
            },
            'slow',
            'swing'
        );
    };


    var banimate2 = function(){

        var h = $(this).height();
        var w = $(this).width();

        var ph = $('#body_box').height();
        var pw = $('#body_box').width();

        $('#body_box').animate({
                height: h
            },
            'slow',
            'swing'
        );

        $('#body_box').delay(100).animate({
                width: w
            },
            'slow',
            'swing'
        );
    };

   function banimate3(a) {
       var h = $(a).height();
       var w = $(a).width();

       var ph = $('#body_box').height();

       $('#body_box').delay(150).animate({
               height: h
           },
           {
               easing:'swing',
               duration:300
           }
       );

       $('#body_box').delay(30).animate({
               width: w
           },
           {
               easing:'swing',
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
        banimate3('#aboutme_page');
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



    //sc





});




