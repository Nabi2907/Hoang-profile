function countTime() {
    var number = "30";
    document.getElementById("myText").innerHTML = number;
    tommorow.setUTCDate(tommorow.getUTCDate() + 1);
}
window.onload = function() {
    countTime();
};