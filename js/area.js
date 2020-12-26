(function($){
    $(window).resize(function(){
        if($(this).innerWidth()>768){
            $(".content").mCustomScrollbar({
                axis:"y",
                mouseWheel:{ preventDefault:true },
                advanced:{autoExpandHorizontalScroll:false},
                mouseWheelPixels: 200,
                });
        }else{
          $(".content").mCustomScrollbar({
              axis:"x",
              advanced:{autoExpandHorizontalScroll:true},
              mouseWheelPixels: 250,
          });
        }
    }).trigger("resize");
})(jQuery);

window.addEventListener("resize", function(){
  if(window.innerWidth>768){
      $(".content").mCustomScrollbar("destroy");
      $(".content").mCustomScrollbar({
          axis:"y",
          mouseWheel:{ preventDefault:true },
          advanced:{autoExpandHorizontalScroll:false},
          mouseWheelPixels: 200,
    });
  }else{
    $(".content").mCustomScrollbar("destroy");
    $(".content").mCustomScrollbar({
        axis:"x",
        mouseWheel:{ preventDefault:true },
        advanced:{autoExpandHorizontalScroll:true},
        mouseWheelPixels: 250,
    });
  }
});

// choice city & div click

// para
import { cities } from './list.js';

var all_cities = [];
for(var key in cities) {
    all_cities.push(cities[key]);
}
// cityList
for(let i = 0; i <= all_cities.length - 1; i++) {
  let city_list = document.querySelectorAll('input[name="city"]');
  document.getElementsByClassName("location")[i].innerHTML =  all_cities[i].continent;
  document.getElementsByClassName("city_name")[i].innerHTML = all_cities[i].name;
}

// addevent
document.addEventListener("click", function(e){
  var city_list = document.querySelectorAll('input[name="city"]');
  var divbox = document.getElementsByClassName("bar");
  if(e.target.name == "city"){
  };
  for(let i=1; i <= city_list.length; i++) {
    if(i == e.target.value) {
      document.getElementById("city_img").src=`./image/city_`+i+`.png`;
      document.getElementById("title").innerHTML = all_cities[i - 1].name;
      document.getElementById("para").innerHTML = all_cities[i - 1].words;
      document.getElementById("link").setAttribute('href', all_cities[i - 1].link)
    };
    if(e.target == divbox[i - 1]) {
      e.target.querySelector('input[name="city"]').click();
    }
  }
});
