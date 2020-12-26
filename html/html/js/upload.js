// mCustomScrollbar
// (function($){
//     $(window).on("load",function(){
//       $(".content").mCustomScrollbar({
//           axis:"x",
//           advanced:{autoExpandHorizontalScroll:true},
//           mouseWheelPixels: 500,
//           theme:"dark",
//       });
//     });
// })(jQuery);

(function($){
    $(window).resize(function(){
        if($(this).innerWidth()>767){
          (function($){
              $(window).on("load",function(){
                $(".content").mCustomScrollbar({
                    axis:"x",
                    advanced:{autoExpandHorizontalScroll:true},
                    mouseWheelPixels: 500,
                    theme:"dark",
                });
              });
          })(jQuery);
        }else{
          $(".content").mCustomScrollbar("destroy");
        }
    }).trigger("resize");
})(jQuery);

window.addEventListener("resize", function(){
  if(window.innerWidth>767){
    $(".content").mCustomScrollbar({
        axis:"x",
        advanced:{autoExpandHorizontalScroll:true},
        mouseWheelPixels: 500,
        theme:"dark",
    });
  }else{
    $(".content").mCustomScrollbar("destroy");
  }
});

$(document).ready(function() {
  let left = $('#mCSB_1_container').css('left');
  console.log(left);
  var left_1 = document.getElementById('mCSB_1_container').offsetWidth;
  console.log(left_1);
});

// function getCssProperty(elmId, property){
//    var elem = document.getElementById(elmId);
//    return window.getComputedStyle(elem,null).getPropertyValue(property);
// }
// // You could now get your value like
// alert(getCssProperty("mCSB_1_container", "left"));

const leftbutton = document.getElementById('leftbutton');

leftbutton.onclick = function () {
  document.getElementById('mCSB_1_container').offsetWidth+=100;
};

const rightbutton = document.getElementById('rightbutton');

rightbutton.onclick = function () {
  document.getElementById('mCSB_1_container').style="100px";
};
