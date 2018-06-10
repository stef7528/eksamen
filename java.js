var slideIndex = 0;
if ($(".autoslide").length > 0) {
    carousel();
}


function carousel() {
    var i;
    var x = document.getElementsByClassName("autoslide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}



$(document).ready(moveIn);

var antalPoser = 0;
$("#slutning").hide();


function moveIn() {

    console.log("moveIn");
    $("#skyer").show();
    $("#lilly_container").addClass("lilly_move_in");
    $("#lilly_sprite").addClass("lilly_flyver");
    $("#ella_container").addClass("ella_move_in");


    $("#ella_sprite").addClass("ella_flyver");

}
