(function($){
    $(window).resize(function(){
        if($(this).innerWidth()>=767){
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
  if(window.innerWidth>=767){
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



// var left = document.getElementsByClassName("mCSB_1_container")[0];
// var rightbutton = document.getElementById('rightbutton');
//
// rightbutton.addEventListener("click", function(){
//   $('#mCSB_1_container')[0].style.left = ((parseInt($('#mCSB_1_container')[0].style.left, 10) - 1000) + "px");
// });


// height bug
var footer = document.getElementsByClassName('footer')[0];
var footer_height = footer.offsetHeight;
var header_height = document.getElementsByClassName('header')[0].offsetHeight;
var road_height = document.getElementsByClassName('road')[0].offsetHeight;
var upload_height = parseInt(document.getElementsByClassName('upload')[0].offsetHeight);
var window_height = window.innerHeight;
var marginTop = window_height - header_height - road_height - upload_height - footer_height - 20;
window.addEventListener("load", function(){
  if(window.innerHeight > window.innerWidth && marginTop > 0) {
    footer.style.marginTop= marginTop + "px";
  }
});
