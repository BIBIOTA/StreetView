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
