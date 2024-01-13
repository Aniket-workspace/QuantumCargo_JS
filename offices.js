var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
 function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

function openNav() {
    document.getElementById("office-left").style.width = "250px";
    // document.getElementById("office-right").style.marginLeft = "250px";
    document.getElementById("open-btn").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("office-left").style.width = "0";
    document.getElementById("office-right").style.marginLeft= "0";
    document.getElementById("open-btn").style.visibility = "visible";
    document.getElementById("office-right").style.width= "100%";
}