var randomNumber1 = Math.floor(Math.random() * 6+1);

var randomImgname = "dice" + randomNumber1 + ".png";

var randomImgsrc = "images/" + randomImgname;

var object1 = document.querySelectorAll("img")[0];

object1.setAttribute("src", randomImgsrc);

var randomNumber2 = Math.floor(Math.random() * 6+1);

var randomImgname2 = "dice" + randomNumber2 + ".png";

var randomImgsrc2 = "images/" + randomImgname2;

var object1 = document.querySelectorAll("img")[1];

object1.setAttribute("src", randomImgsrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Tied match try again :)";
}