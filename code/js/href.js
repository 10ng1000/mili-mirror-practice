$(document).ready(function(){
    $('.indexsmall').mouseenter(function(){
        $(this).animate({
            backgroundColor: '#DBDBDB'
        },"fast")
        $(this).children().animate({color:'#111111'},"fast")
    })
        $('.indexsmall').mouseleave(function(){
        $(this).animate({backgroundColor:'transparent'},"fast");
        $(this).children().animate({color:'#DBDBDB'},"fast");
    })
})

$(document).ready(function(){
    $('.musiclink').mouseenter(function(){
        $(this).animate({
            backgroundColor: '#3F3F3F#'
        },"fast")
        $(this).children().animate({color:'#AAAAAA'},"fast")
    })
        $('.musiclink').mouseleave(function(){
        $(this).animate({backgroundColor:'#111111'},"fast");
        $(this).children().animate({color:'#F7F7F7'},"fast");
    })
})

var precolor;

$(document).ready(function(){
    $('nav > ul > li > a').mouseenter(function(){
        precolor = $(this).css("color");
        $(this).animate({
            color: '#4C4C4C'
        },"fast")
    })
    $('nav > ul > li > a').mouseleave(function(){
        $(this).animate({color:precolor},"fast")
    })
})
