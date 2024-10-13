$(function(){
    $("#hamburger_menu").on("click",function(){
        $("#drop_down_menu").slideToggle();
        $("#middle_bar").toggleClass("middle_bar_move");
        $("#high_bar").toggleClass("high_bar_move");
        $("#low_bar").toggleClass("low_bar_move");
    })
});