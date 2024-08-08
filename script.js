






var reflecter = document.getElementById("reflecter");
var btn2 = document.getElementById("btn2");
var btn = document.getElementById("btn");
var bulb = document.getElementById("bulb");


function doDay() {

reflecter.style.backgroundColor = "#eee313";
bulb.style.filter = "blur(0px)";
btn2.style.display = "block";
btn.style.display = "none";
btn2.style.border = "5px solid green";
reflecter.style.boxShadow = "0 20px 30px yellow";

}
function doNight() {

    btn.style.border = "5px solid red";
    bulb.style.filter = "blur(20px)";
    reflecter.style.backgroundColor = "white";
    btn.style.display = "block";
    btn2.style.display = "none";
    reflecter.style.boxShadow = "none";


}
