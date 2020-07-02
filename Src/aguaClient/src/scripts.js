$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 56) {
            $(".navbar").addClass("bg-navbar");
        } else {
            $(".navbar").removeClass("bg-navbar");
        }
    });
});