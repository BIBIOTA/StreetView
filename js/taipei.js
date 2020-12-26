// heart
  var heart = document.getElementById('heart');
  var icon = document.getElementById('icon');
  var city_name = document.getElementById('city_name');
  heart.addEventListener("click", function(){
    icon.src='./image/heart_focus.png';
    icon.style.animationName="heart_up";
    var city = [city_name.innerHTML];
      if (get_city == null) {
        localStorage.setItem("city", JSON.stringify(city));
      }else if (get_city.includes(city_name.innerHTML)){
        console.log("get");
        return false
      }else{
        var cities = city.concat(get_city);
        localStorage.setItem("city", JSON.stringify(cities));
      }
  });
  // localstorage
  var get_city = JSON.parse(localStorage.getItem("city"));
  document.addEventListener("DOMContentLoaded", function(){
    if (get_city.includes(city_name.innerHTML)) {
      icon.src='./image/heart_focus.png';
      icon.style.animationName="heart_up";
    }
  });
  // 101
var taipei101 = document.getElementById('taipei101');
var yellow_background = document.getElementsByClassName('yellow_background');
var hidden_left = document.getElementById('hidden_left');
var hidden_right = document.getElementById('hidden_right');
var upword = document.getElementById('upword')
var countdown = document.getElementById("countdown");
var words = document.getElementById("words");
words.addEventListener("click", function(){
  taipei101.click();
});
taipei101.addEventListener("click", function t101(){
  countdown.innerHTML="";
  yellow_background[0].style.animationName="gogo";
  yellow_background[0].style.animationDuration="2s";
  yellow_background[0].style.zIndex="-1";
  var i = 12;
  var interval_id = setInterval(function(){
    i--;
    if(i<=10) {
      countdown.innerHTML=i;
    }
    if(i == 0 || i==-1){
      countdown.innerHTML="";
    }if(i == -2) {
      upword.style.visibility="visible";
      upword.innerHTML="觀察"
      upword.style.fontSize="30pt";
      countdown.innerHTML="看看";
      countdown.style.fontSize="30pt";
      clearInterval(interval_id);
    }
  }, 1000);
    yellow_background[0].addEventListener("animationend", function(){
    yellow_background[0].style.animationName="count";
    yellow_background[0].style.animationDuration="10s";
    hidden_left.style.width="0%";
    hidden_left.style.transition="all 1s";
    hidden_left.style.transitionDelay="10s";
    hidden_right.style.width="0%";
    hidden_right.style.transition="all 1s";
    hidden_right.style.transitionDelay="10s";
  });
  taipei101.removeEventListener('click', t101);
});
// time
var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Asia/Taipei"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
// google street
var close = document.getElementById('close');
close.addEventListener("click", function(){
  document.getElementById('popup').style.display = "none";
  if(document.getElementById('popup').style.display == "none"){
    // un-lock scroll position
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
  }
});




var open = document.getElementById('view');
open.addEventListener("click", function(){
  document.getElementById('popup').style.display = "block";
  if(document.getElementById('popup').style.display == "block"){
    // lock scroll position, but retain settings for later
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }
});

// changeimage
var t101_pic = document.getElementById('101_pic');
window.addEventListener("resize", function(){
  if(window.innerWidth <= 574) {
    t101_pic.src='./image/taipei_101_m.png';
  }else{
    t101_pic.src='./image/taipei_101.png';
  }
});

var t101_pic = document.getElementById('101_pic');
window.addEventListener("load", function(){
  if(window.innerWidth <= 574) {
    t101_pic.src='./image/taipei_101_m.png';
  }else{
    t101_pic.src='./image/taipei_101.png';
  }
});

var npm_img = document.getElementById('npm_img');
window.addEventListener("resize", function(){
  if(window.innerWidth <= 574) {
    npm_img.src='./image/npm_m.png';
  }else{
    npm_img.src='./image/city_npm.png';
  }
});

var npm_img = document.getElementById('npm_img');
window.addEventListener("load", function(){
  if(window.innerWidth <= 574) {
    npm_img.src='./image/npm_m.png';
  }else{
    npm_img.src='./image/city_npm.png';
  }
});
