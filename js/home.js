function resizeTop() {
    var e, t;
    e = window.innerHeight ? window.innerHeight : $(window).height();
    t = window.innerWidth ? window.innerWidth : $(window).width();
    t = t - 62;
    $(".halfL,.halfR,.ics,.halfText").css("height", e);
    $("#intro,#home,footer,#sponsors").css("width", t);
    return false
}

var video, timer;
window.onload = function() {
    video = $("#video_background");
    $("#intro .udyam, #intro .iit, #intro .line, #intro p,#intro .buttonbox").css({
        opacity: "0"
    });
    setTimeout(function() {
        $("#loader").fadeOut("slow");
        $("#intro .udyam, #intro .iit, #intro .line, #intro p,#intro .buttonbox").addClass("animated goTop3")
    }, 500);
    resizeTop();
};
window.onresize = function() {
    resizeTop();
};

jQuery(document).ready(function() {
    resizeTop();
    $("#mission").children().css({
        opacity: "0"
    });
    $("#mission,#sponsors h2,#nuvTM,#sponsors .sponsors-block div span,#sponsors .sponsors-block div p,#sponsors .sponsors-block div img,#sponsors a").css({
        opacity: "0"
    });
    video = $("#video_background");
    $("#sponsors").waypoint(function(e) {
        if (e === "down") {
            $(this).find("h2,#nuvTM,.sponsors-block div img, a").addClass("animated goTop");
            $(this).find(".sponsors-block div span,.sponsors-block div p").addClass("animated goTop2")
        }
    });
})
