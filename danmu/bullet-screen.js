$(function($) {
    var screen_width = parseInt($(document).width());
    var screen_height = parseInt($(document).height());
    $("#send").bind("click", addbullet);
    $("#clear").click(function() {
        $("#screen").empty();
    });
    document.onkeydown = function(e) {
        if (e.keyCode == 13) addbullet();
    }
    function addbullet() {
        var div_height = parseInt(Math.random() * 400);
        var result = $("#text").val();
        var color = getRandomColor();
        screen_width = screen_width;

        jQuery("#screen").append("<div class='bullet' style=top:" + div_height + "><span style=color:" + color + ">" + result + "</span></div>");
        jQuery("#text").val('');
        move();
    }
    function move() {
        jQuery(".bullet").stop().animate({
            "right": screen_width + 300
        },
        15000, "linear",
        function() {

});
    }
    function getRandomColor() {
        return '#' + (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color: arguments.callee(color);
        })('');
    }
});