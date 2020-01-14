$(document).ready(function(){
    $("#myBtn").click(function(){
        $(".add").prepend("<span>Xos gelmisiniz</span>")
    })
})

$(function(){
    $("#number").keypress(function(e){
        if (e.which != 8 && (e.which <48 || e.which >57)) {
            $("p").html("Duzgun daxil edin").stop().show().fadeOut(1000);
        }
    })
})

$(document).ready(function(){
    setInterval(function(){
        moveRight();
    },5000);

    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var slideULWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: slideULWidth,
        marginLeft: - slideWidth
    });

    $('#slider ul li:last-child').prependTo("#slider ul")

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function(){
            $('#slider ul li:last-child').prependTo('#slider ul')
            $('#slider ul').css('left','')
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function(){
            $('#slider ul li:first-child').appendTo('#slider ul')
            $('#slider ul').css('left','')
        });
    };


    $(".previous").click(function(){
        moveLeft();
    });

    $(".next").click(function(){
        moveRight();
    });







})