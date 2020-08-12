/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let times = 1;

function myFunction() {
    let x = document.getElementsByClassName("ham-bar")[0];
    x.classList.toggle("change");
    if (times % 2 === 1) {   // entry
        document.getElementById("overlay").style.zIndex = "50";
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementsByClassName("bar1")[0].style.backgroundColor = "white";
        document.getElementsByClassName("bar2")[0].style.backgroundColor = "white";
        document.getElementsByClassName("bar3")[0].style.backgroundColor = "white";
        document.getElementById("down_arrow").style.zIndex = "49";
        document.getElementsByClassName("carousel_buttons")[0].style.zIndex = "49";
        document.getElementsByClassName("carousel_buttons")[1].style.zIndex = "49";
        document.getElementsByClassName("carousel_buttons")[2].style.zIndex = "49";
    } else {    // exiting
        document.getElementById("overlay").style.zIndex = "3";
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("overlay").style.backgroundColor = "transparent";
        document.getElementsByClassName("bar1")[0].style.backgroundColor = "black";
        document.getElementsByClassName("bar2")[0].style.backgroundColor = "black";
        document.getElementsByClassName("bar3")[0].style.backgroundColor = "black";
        document.getElementById("down_arrow").style.zIndex = "52";
        document.getElementsByClassName("carousel_buttons")[0].style.zIndex = "52";
        document.getElementsByClassName("carousel_buttons")[1].style.zIndex = "52";
        document.getElementsByClassName("carousel_buttons")[2].style.zIndex = "52";
    }
    times += 1;
}