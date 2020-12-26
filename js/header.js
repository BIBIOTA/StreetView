// hamburger
$(function(){
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $("nav").slideToggle();
  });
});


window.addEventListener("resize", function(){
  if(window.innerWidth >= 767) {
    document.getElementsByTagName("nav")[0].removeAttribute("style");
    var hamburger = document.getElementsByClassName('hamburger')[0];
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
    }
  }
});
// FreeToGo
var li_2 = document.getElementsByClassName('nav-2')[0];

import { cities } from './list.js';
var all_cities = [];
for(var key in cities) {
    all_cities.push(cities[key]);
}

li_2.addEventListener("click", function(){
  arrow.style.animationName="noanimation";
  var nav_2 = document.getElementsByClassName('nav-2')[0];
  var nav_img = document.getElementById('nav_img');
  var freetext = document.getElementById('freetext');
  nav_2.classList.add('nav2_freeToGo');
  freetext.classList.add('FreeToGo');
  nav_img.style.display = "block";
  setTimeout(function(){
    var arrow = document.getElementById('arrow');
    arrow.classList.add("arrowup");
    if(arrow.classList.contains("arrowup")) {
      var para = document.createElement("p");
      var node = document.createTextNode("");
      var loading = `<i class="fas fa-sync loading"></i>`;
      if(li_2.querySelectorAll('p').length >= 1) {
        return false;
      }else{
        para.appendChild(node);
        nav_img.appendChild(para);
        setTimeout(function (){
          var i = 4;
          arrow.style.display="none";
          var interval_id = setInterval(function(){
            i--;
            if(i<=3) {
              para.innerHTML=i;
            }
            if(i == 0){
              var myVar = setInterval(function(){ getNumber() }, 100);
              function getNumber() {
                var path = "." + window.location.pathname;
                var x = Math.floor(Math.random() * (all_cities.length));
                if (x == 2) {
                  return
                }else if (path == all_cities[x].link) {
                  return
                }else{
                  freetext.innerHTML = all_cities[x].name;
                }
              };
              para.innerHTML="STOP";
              para.classList.add('para');
              clearInterval(interval_id);
              li_2.addEventListener("click", function(){
                if(para.innerHTML == "STOP" ) {
                  clearInterval(myVar);
                  para.classList.remove('para');
                  para.innerHTML = "";
                  para.insertAdjacentHTML("afterbegin", loading);
                  for(let i = 0; i <= all_cities.length -1 ; i++) {
                    if(freetext.innerHTML == all_cities[i].name) {
                      setTimeout(function (){
                        window.location = all_cities[i].link;
                      }, 2000);
                    }
                  }
                }
              });
            }
          }, 1000);
        }, 1000);
      }
    }
  }, 1000);
});

// 會員
var loginbox = document.getElementsByClassName('loginbox')[0];

document.addEventListener('click', function(e){
  if (e.target == document.getElementsByClassName('accountpic')[0]) {
    e.target.classList.add('newpic');
    e.target.classList.remove('accountpic');
    loginbox.style.display = "flex";
  }else if(e.target == document.getElementsByClassName('newpic')[0]){
    e.target.classList.remove('newpic');
    e.target.classList.add('accountpic');
    loginbox.style.display = "none";
  }
});

var account = JSON.parse(localStorage.getItem("account"));
if (account != null) {
  var login = document.getElementsByClassName('login');
  var signup = document.getElementsByClassName('signin');
  for (let i = 0 ; i <= login.length -1 ; i++) {
    var every_login = login[i];
    var login_h3 = every_login.getElementsByTagName('h3')[0];
    var login_link = every_login.getElementsByTagName('a')[0];
    var every_signup = signup[i];
    login_h3.innerHTML = "Account";
    login_link.pathname = "/index.html";
    var signup_h3 = every_signup.getElementsByTagName('h3')[0];
    signup_h3.innerHTML = "Logout";
    var signup_link = every_signup.getElementsByTagName('a')[0];
    signup_link.pathname = "/index.html";
    }
};


document.addEventListener("click", function(e){
  if (e.target.innerHTML == "Logout") {
    localStorage.removeItem("account");
    alert("See You !");
  }
});
