// height bug
var footer = document.getElementsByClassName('footer')[0];
var footer_height = footer.offsetHeight;
var header_height = document.getElementsByClassName('header')[0].offsetHeight;
var road_height = document.getElementsByClassName('road')[0].offsetHeight;
var main_height = parseInt(document.getElementsByTagName('main')[0].offsetHeight);
var window_height = window.innerHeight;
var marginTop = window_height - header_height - road_height - main_height - footer_height - 20;
window.addEventListener("load", function(){
  if(window.innerHeight > window.innerWidth && marginTop > 0) {
    footer.style.marginTop= marginTop + "px";
  }
});
window.addEventListener("resize", function () {
  if(window.innerHeight > window.innerWidth) {
    let footer = document.getElementsByClassName('footer')[0];
    let footer_height = footer.offsetHeight;
    let header_height = document.getElementsByClassName('header')[0].offsetHeight;
    let road_height = document.getElementsByClassName('road')[0].offsetHeight;
    let main_height = parseInt(document.getElementsByTagName('main')[0].offsetHeight);
    let window_height = window.innerHeight;
    let marginTop = window_height - header_height - road_height - main_height - footer_height - 20;
    if (marginTop > 0) {
      footer.style.marginTop= marginTop + "px";
    }
  }else{
    footer.removeAttribute("style")
  }
});
