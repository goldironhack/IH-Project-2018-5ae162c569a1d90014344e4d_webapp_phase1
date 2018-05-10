
(function () {
    document.getElementById("btn").addEventListener("click", function () {
        drawDistr();
    });
    document.getElementById("hou1").addEventListener("click", function () {
        drawHousing(1);
    });
    document.getElementById("hou2").addEventListener("click", function () {
        drawHousing(2);
    });
    document.getElementById("hou3").addEventListener("click", function () {
        drawHousing(3);
    });
    document.getElementById("hou4").addEventListener("click", function () {
        drawHousing(4);
    });
    document.getElementById("hou5").addEventListener("click", function () {
        drawHousing(5);
    });
    document.getElementById("dist").addEventListener("click", function () {
        drawHousingDist(document.getElementById("formControlRange").value);
    });
})();