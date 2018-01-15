const basicZombie = document.getElementById("clic");
const zombieDiv = document.getElementsByClassName("zombie")[0];
const display = document.getElementById("affichage");
const boost = document.getElementById("multiplier");
const clic = document.getElementById("autoClic");
const ultimate = document.getElementById("superBoost");
const bdv = document.getElementById("barreDeVie")
const level = document.getElementById("js-level")
var lvl = 1;
var multiplicateur = 1;
var pdv = 100 + lvl * 5;
var score = 0;
var price = 5;
var ult = 1;
var i = 12;
var x = 5;
var path = 0;

level.innerText = `Level: ${lvl}`

basicZombie.ondragstart = function() { return false; };
zombieDiv.ondragstart = function() { return false; };


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

boost.innerHTML = `x${multiplicateur} : ${5*multiplicateur}€`;
clic.innerHTML = `Auto Clic : 500€`;
ultimate.innerHTML = `ULTIMATE : 5000€`;

function clicker(){
  var y = getRandomInt(150)
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
    x = 5
    basicZombie.style.left = `${x}px`
    lvl++;
    level.innerText = `Level: ${lvl}`
    bdv.max = pdv = 100 + lvl * lvl * lvl;
    bdv.value = bdv.max
  }
  if (i === y) {
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
      bdv.value = bdv.value - 1 * multiplicateur
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
function move (){
  x += 1
  path += 1
  if (path > 9 ){
    path = 1;
  }

  basicZombie.style.left= `${x}px`
  basicZombie.src = `assets/img/walk/go_${path}.png`
  console.log(basicZombie.src)
  if (x < 980){
    requestAnimationFrame(move);
  }else {
    basicZombie.style.display= "none";

  }
}
boost.style.display = "none";

  move()
