
let randomnumber1 = Math.floor((Math.random() * 6) + 1);
var randomimagesource = "images/dice" + randomnumber1+".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor((Math.random() *6) +1);
var randomimagesource2 = "images/dice" + randomnumber2+".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 won!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}