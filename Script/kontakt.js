document.addEventListener("DOMContentLoaded", function() {


    zapisz = document.getElementById("zapisz");
    zapisz.addEventListener("click", regex);

    function regex() {
        var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        var email = document.getElementById("email").value;
        console.log(email);
        if (reg.test(email)) {
            location.reload()
        } else {
            alert("Niepoprawny adres Email");
        }
    }
});