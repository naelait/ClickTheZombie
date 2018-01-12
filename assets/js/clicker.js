const button = document.getElementById("clic");
const display = document.getElementById("affichage");
var boost = document.getElementById("multiplier");
var clic = document.getElementById("autoClic");
var ultimate = document.getElementById("superBoost");
var bdv = document.getElementById("barreDeVie")
var lvl = 1;
var multiplicateur = 1;
var pdv = 100 + lvl * 5;
var score = 0;
var price = 5;
var ult = 1;
var i = 12;
var x = 1;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

boost.innerHTML = `x${multiplicateur} : ${5*multiplicateur}€`;
clic.innerHTML = `Auto Clic : 500€`;
ultimate.innerHTML = `ULTIMATE : 5000€`;

function clicker(){
  var y = getRandomInt(150)
  console.log(i);
  console.log(y);
  var atq = 4 + (4)*multiplicateur;
  score = score + 1*multiplicateur * ult;
  display.innerHTML = `${score}€`;
  bdv.value = pdv - atq
  if (score >= price){
    boost.style.display = "inline";
  }else if (score < price){
    boost.style.display = "none";
  }
  pdv = pdv - atq;
  if (pdv <= 0) {
    lvl++;
    bdv.max = pdv = 100 + lvl * lvl * lvl;
    x = 20
  }
  if (i === y) {
  console.log("POWER UP !!")
  ultimate.style.display = "inline";
  ultimate.style.top = getRandomInt(150)+"px"
  ultimate.style.right = getRandomInt(300)+"px"
}
}

function augmenterMultiplicateur(){
  if (score >= price){
  multiplicateur++;
  score = score-price;
  price = price * 2;
  display.innerHTML = `${score}€`;
}
  boost.innerHTML = `x${multiplicateur} : ${price}€`
  if (score < price){
    boost.style.display = "none";
  }
}

function clicAuto(){
  if (score >= 500){
    setInterval(function autoClick(){
      score ++
      display.innerHTML = `${score}€`;
    },1000)
    score = score - 500;
    clic.style.display = "none"
  }
  display.innerHTML = `${score}€`;
}

function powerBoost(){
    ultimate.style.display = "none";
    ult = 2;
    setTimeout(function pressR(){
      ult = 1;
    }, 10000);
  }

boost.style.display = "none";

function moveZombie(){
  setInterval(function move(){
    if (x <= 660){
      x=x+20
      button.style.left = x+"px"
    }
    if (x > 660){
      button.style.display = "none"
      document.getElementsByClassName("randomboost")[0].innerHTML = "YOU LOOSE !!!"
      document.getElementsByClassName("randomboost")[0].style.color = "red";
      document.getElementsByClassName("randomboost")[0].style.left = "180px";
      document.getElementsByClassName("randomboost")[0].style.top = "120px";
    }
},650);
}
  moveZombie()
