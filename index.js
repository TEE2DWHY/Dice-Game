var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", diceImage);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImages2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", diceImages2);

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw😑"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins💜"
}
else {
    document.querySelector("h1").innerHTML = "Player2 wins❤"
}