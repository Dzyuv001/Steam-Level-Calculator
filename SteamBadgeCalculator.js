var playerLevel;
var pricePerBadge;
var calc = flase;

function calcLevel() {
    setupTxt();
    var expNeed = 100;
    var totalExp = 0;
    if (playerLevel != NaN) {
        for (var i = 0; i < playerLevel.value; i++) {
            totalExp += expNeed
            if (((i + 1) % 10 == 0) && (i != 0)) {
                expNeed += 100;
            }

        }
    }
    document.getElementById("expNeeded").innerHTML = "Amout of exp that is need :" + totalExp;
    document.getElementById("badgesNeeded").innerHTML = "You will need: " + (totalExp / 100) + " badges";
    document.getElementById("totalPrice").innerHTML = "This will cost you: " + (pricePerBadge.value * (totalExp / 100).toFixed(2));
    document.getElementById("calResponse").style.display = "block";
}

function setupTxt() {
    playerLevel = document.getElementById("txtLvl");
    pricePerBadge = document.getElementById("txtPricePerBadge");
}

function pressEnter() {
    setupTxt();
    playerLevel.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            calcLevel();
        }
    });
    pricePerBadge.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            calcLevel();
        }
    });
    //alert("Tut tu ru");
}