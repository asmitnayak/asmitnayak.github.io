$(function () {
    $(".icm").each(function () {
        let randLeft = Math.floor(Math.random() * 90) + 1;
        let randfontSize = Math.floor(Math.random() * 3) + 8;
        let randRotation = Math.floor(Math.random() * 360) + 1;
        let randDelay = Math.floor(Math.random() * 5) + 1;
        let randDuration = Math.floor(Math.random() * 10) + 5;
        $(this).attr("style", "left:" + randLeft + "vw; font-size:" + randfontSize + "vw; transform: rotate(" + randRotation + "deg); animation-delay: " + randDelay + "s; animation-duration: " + randDuration + "s;)");
    });
});