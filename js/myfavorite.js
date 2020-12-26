// local storage
var my_block = document.getElementsByClassName('white_background')[0];
var list_city = `
      <div class="box b1">
        <div class="close">
          <i class="fas fa-times-circle"></i>
        </div>
        <a href="city_href" class="city_innerlink">
          <div class="insidebox">
            <div class="city_pic">
              <img src="city_image" class="city_innerimage">
            </div>
            <div class="bottom_box">
                <div class="flagbox">
                  <div class="insideflagbox">
                    <img src="city_flag" class="city_innerflag">
                  </div>
                </div>
                <div class="city_name">
                  <h3 class="city_innername">
                    "city_name"
                  </h3>
                </div>
            </div>
          </div>
        </a>
      </div>
      `;

import { cities } from './list.js';

var all_cities = [];
for(var key in cities) {
    all_cities.push(cities[key]);
}

var get_city = JSON.parse(localStorage.getItem("city"));

if (get_city != null) {

  var h3_null = document.getElementById("null");
  h3_null.style.display = "none";

  var city_href = "";
  var city_image = "";
  var city_name = "";
  var city_flag = "";
  for(let i=1; i <= all_cities.length; i++) {
    if (get_city.includes(all_cities[i - 1].name)) {
      city_name = all_cities[i - 1].name;
      city_href = all_cities[i - 1].link;
      city_image = all_cities[i - 1].image
      city_flag = all_cities[i - 1].flag;
      my_block.insertAdjacentHTML("afterbegin", list_city.trim());
      var city_innername = document.getElementsByClassName("city_innername")[0];
      var city_innerimage = document.getElementsByClassName("city_innerimage")[0];
      var city_innerflag = document.getElementsByClassName("city_innerflag")[0];
      var city_innerlink = document.getElementsByClassName("city_innerlink")[0];
      city_innername.innerHTML = city_name;
      city_innerimage.src = city_image;
      city_innerflag.src = city_flag;
      city_innerlink.href = city_href;
    }
  }

  // remove favorite
  document.addEventListener("click", function(e){
    if(e.target.classList.contains("fas")) {
      var close = e.target.parentElement;
      var box = close.parentElement;
      var this_city = box.querySelector('h3');
      if (this_city.innerHTML == "Pyongyang") {
        close.classList.add('kimdada');
        setTimeout(function(){ close.classList.remove('kimdada'); }, 1000);
        return false
      }else{
        for(let i = 0; i <= get_city.length -1 ; i++) {
          if (get_city[i] == this_city.innerHTML) {
            get_city.splice(i, 1);
          }
        }
        box.remove();
        if (get_city.length != 0) {
          localStorage.setItem("city", JSON.stringify(get_city));
        }else{
          localStorage.removeItem("city");
          h3_null.style.display = "block";
        }
      }
    }
  });
}
