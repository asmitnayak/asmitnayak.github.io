/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let times = 1;

function myFunction(x) {
    x.classList.toggle("change");
    if (times % 2 === 1){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("overlay").style.backgroundColor= "rgba(0,0,0,0.4)";
        // let bars = document.getElementsByClassName("ham-bar")[0];
        document.getElementsByClassName("bar1")[0].style.backgroundColor = "white";
        document.getElementsByClassName("bar2")[0].style.backgroundColor = "white";
        document.getElementsByClassName("bar3")[0].style.backgroundColor = "white";
        document.getElementById("down_arrow").style.zIndex = "49";
    } else {
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("overlay").style.backgroundColor= "transparent";
        document.getElementsByClassName("bar1")[0].style.backgroundColor = "black";
        document.getElementsByClassName("bar2")[0].style.backgroundColor = "black";
        document.getElementsByClassName("bar3")[0].style.backgroundColor = "black";
        document.getElementById("down_arrow").style.zIndex = "51";
    }
    times += 1;
}