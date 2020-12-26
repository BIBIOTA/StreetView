// 影片開場
var body = document.getElementsByTagName('body')[0];
var video = document.getElementsByClassName('video')[0];

setTimeout(function(){
  body.classList.add('changebackground');
}, 2000);

setTimeout(function(){
  video.classList.add('startShow');
}, 4000);

// 強制新增最愛
var get_city = JSON.parse(localStorage.getItem("city"));
var city = ["Pyongyang"];

window.addEventListener('load', function(){
  if (get_city == null) {
    localStorage.setItem("city", JSON.stringify(city));
  }else if (get_city.includes("Pyongyang")){
    return false
  }else{
    var cities = city.concat(get_city);
    localStorage.setItem("city", JSON.stringify(cities));
  }
});

// 金正恩亂飛
var kim = document.getElementById('kim');

setTimeout(function(){
  kim.classList.add('hikim')
}, 4000);

kim.ondragstart = function() { return false; };

var body = document.getElementsByTagName('body')[0];
var windowHeight = window.innerHeight;
var bodyWidth = body.clientWidth;

window.addEventListener("resize", function () {
  var body = document.getElementsByTagName('body')[0];
  body.style.width = "100vw";
  body.style.height = "100vh";
  var windowHeight = window.innerHeight;
  var bodyWidth = body.clientWidth;
});

setInterval(function(){
  var x = Math.floor(Math.random() * (bodyWidth));
  var y = Math.floor(Math.random() * (windowHeight));
  var rotate = Math.floor(Math.random() * (360));
  kim.style.transform = "translate(" + x + "px," + y +"px) rotate(" + rotate + "deg)";
}, 2000);
