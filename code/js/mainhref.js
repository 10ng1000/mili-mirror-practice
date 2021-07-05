var precolor;

$(document).ready(function(){
    $('a').mouseenter(function(){
        precolor = $(this).css("color");
        $(this).animate({
            color: '#4C4C4C'
        },"fast")
    })
    $('a').mouseleave(function(){
        $(this).animate({color:precolor},"fast")
    })
})
