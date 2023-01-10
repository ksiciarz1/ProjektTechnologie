document.addEventListener("DOMContentLoaded", function() {

    var numerslideu = 0;
    slider();

    function slider() {
        var i;
        var slide = document.getElementsByClassName("slide");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";

        }
        numerslideu++;
        if (numerslideu > slide.length) { numerslideu = 1 }
        slide[numerslideu - 1].style.display = "block";
        setTimeout(slider, 4000);
    }
});