

var randomNumber1;
randomNumber1=Math.floor(Math.random()*6) + 1; // random number 1-6

var randomDiceImage="dice" + randomNumber1 + ".png"; //dice1 to dice6

var randomImageSource = randomDiceImage; //print image

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//var randomNumber2;
//randomNumber2=Math.floor(Math.random()*6) + 1; // random number 1-6

//var randomDiceImage2="dice" + randomNumber2 + ".png"; //dice1 to dice6

//var randomImageSource2 = "image/" + randomDiceImage2; //print image

//var image2  = document.querySelectorAll("img")[1];
//image2.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6) + 1; // random number 1-6

var randomDiceImage2="dice" + randomNumber2 + ".png"; //dice1 to dice6

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 play 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
