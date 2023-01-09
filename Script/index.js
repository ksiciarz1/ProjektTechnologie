document.addEventListener("DOMContentLoaded", function() {

    var numerslajdu = 0;
    slider();

    function slider() {
        var i;
        var slajd = document.getElementsByClassName("slajd");
        for (i = 0; i < slajd.length; i++) {
            slajd[i].style.display = "none";

        }
        numerslajdu++;
        if (numerslajdu > slajd.length) { numerslajdu = 1 }
        slajd[numerslajdu - 1].style.display = "block";
        setTimeout(slider, 4000);
    }
});