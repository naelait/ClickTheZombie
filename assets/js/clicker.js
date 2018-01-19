var lvl = 1;
var multiplicateur = 1;
var pdv = 100 + lvl * 5;
var score = 0;
var price = 5;
var ult = 1;
var i = 12;
var x = 5;
var speed = 30000

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clicker(){
  if (document.getElementById("clic").src == "file:///home/user/Bureau/Exercices/cookieClicker/assets/img/appear/appear.gif"){
    var atq = 0
  }else {
    var atq = 4 + (4)*multiplicateur;
      score = score + 1*multiplicateur * ult;
  }
  var y = getRandomInt(150)
  $('#affichage').html(`${score}€`);
  $('#barreDeVie').attr("value", pdv - atq);
  if (score >= price){
    $('#multiplier').css("display", "inline");
  }else if (score < price){
    $('#multiplier').css("display", "none");
  }
  pdv = pdv - atq;
  if (pdv <= 0) {
    clearTimeout(appearTime)
    clearTimeout(moveTime)
    $('#clic').stop(true);
    x = 5
    setTimeout(appear, 3100)
    spawning()
    setTimeout(move, 3100)
    $('#clic').css("left", `${x}px`)
    lvl++;
    $('#js-level').html(`Level: ${lvl}`);
    $('#barreDeVie').attr("max", pdv = 100 + lvl * lvl * lvl);
    $('#barreDeVie').attr("value", $('#barreDeVie').max);
    clearTimeout(appearTime)
    clearTimeout(moveTime)
  }
  if (i === y) {
    $('#superBoost').css("display", "inline");
    $('#superBoost').css("top", getRandomInt(150)+"px");
    $('#superBoost').css("right", getRandomInt(300)+"px");
  }
}

function augmenterMultiplicateur(){
  if (score >= price){
  multiplicateur++;
  score = score-price;
  price = price * 2;
  $('#affichage').html(`${score}€`)
}
  $('#multiplier').html(`x${multiplicateur} : ${price}€`)
  if (score < price){
    $('#multiplier').css("display", "none");
  }
}

function clicAuto(){
  if (score >= 500){
    setInterval(function autoClick(){
      score ++
      $('#barreDeVie').value = $('#barreDeVie').value - 1 * multiplicateur
      $('#affichage').html(`${score}€`);
    },1000)
    score = score - 500;
    $('#autoClic').css("display", "none")
  }
  $('#affichage').html(`${score}€`);
}

function powerBoost(){
    $('#superBoost').css("display", "none")
    ult = 2;
    setTimeout(function pressR(){
      ult = 1;
    }, 10000);
  }
function move (){
  $('#clic').animate({
      left: 970
  }, speed, "linear")
  setTimeout(function() {
    if (parseInt($('#clic').css('left')) > 960){
      $('#clic').css("display", "none");
      $(".defeat").css("display", "inline");
    }
  }, speed)
}
function recommencer(){
    location.reload()
  }

$('#multiplier').css("display", "none");

function spawning(){
  $('#clic').attr("src", "assets/img/appear/appear.gif");
}

function appear(){
    $('#clic').attr("src", "assets/img/walk/walk.gif");
}

var appearTime = setTimeout(appear, 3300)
var moveTime = setTimeout(move, 3300)
appearTime
spawning()
moveTime


$('#js-level').html(`Level: ${lvl}`);
$('#multiplier').html(`x${multiplicateur} : ${5*multiplicateur}€`);
$('#autoClic').html(`Auto Clic : 500€`);
$('#superBoost').html(`ULTIMATE : 5000€`);

$('#clic').click(clicker);
$('#retry').click(recommencer);
$('#multiplier').click(augmenterMultiplicateur);
$('#autoClic').click(clicAuto);
$('#superBoost').click(powerBoost);
