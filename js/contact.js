// submit
var btn = document.getElementById("btn");
var text = document.getElementById("text");
var para = document.querySelector("p");
var complete = `<p>Submit complete ! <br> Thank You !</p>`;
var error = `<p class="error">Error ! You have to input content !</p>`;
btn.addEventListener("click", function(){
  if(text.value == "") {
    text.insertAdjacentHTML("afterend", error);
  }else{
    btn.style.display="none";
    text.style.display="none";
    para.innerHTML = complete;
    var error_display = document.getElementsByClassName("error")[0];
    error_display.style.display = "none";
  }
});

// textarea
window.addEventListener("resize", function(){
  if(window.innerWidth < 1400) {
    text.rows = 5;
  }
});
window.addEventListener("load", function(){
  if(window.innerWidth < 1400) {
    text.rows = 5;
  }
});

// video height
var fullvideo = document.getElementById("fullvideo");
window.addEventListener("load", function(){
  if(window.screen.height > 1080) {
    fullvideo.classList.add("videoscale");
  }
});
