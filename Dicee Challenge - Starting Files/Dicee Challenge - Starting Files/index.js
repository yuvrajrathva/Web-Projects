var randomDicenumber1 = Math.floor(Math.random() * 6) + 1;
var randomDicenumber2 = Math.floor(Math.random() * 6) + 1;
var locationofDiceimage1 = "images/dice" + randomDicenumber1 + ".png";
var locationofDiceimage2 = "images/dice" + randomDicenumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", locationofDiceimage1);
document.querySelectorAll("img")[1].setAttribute("src", locationofDiceimage2);
