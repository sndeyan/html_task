function placeImage(x)
{
    var div = document.getElementById("slik");
    div.innerHTML = "";
    for (counter=1; counter<=x; counter++) {
        var img = document.createElement("div");
        img.className = "images";
        img.setAttribute("style", "background-image: url(images/"+counter+".png);background-repeat: no-repeat;background-size: 50px 45px")
        div.appendChild(img);
    }
}
window.onload = function() {
    placeImage(20);
};
