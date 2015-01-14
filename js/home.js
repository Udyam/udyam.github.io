function resizeTop() {
    var e, t;
    e = window.innerHeight ? window.innerHeight : $(window).height();
    t = window.innerWidth ? window.innerWidth : $(window).width();
    t = t - 62;
    $(".halfL,.halfR,.ics,.halfText").css("height", e);
    $("#intro,#home,footer,#sponsors").css("width", t);
    return false
}

var timer;
window.onload = function() {
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
