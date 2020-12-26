

$(function() {
    $("form").submit(function() { return false; });
});

var enter = document.getElementById("search");
    enter.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("go").click();
    }
});

var btn = document.getElementById("go");
btn.addEventListener("click", function(){
  var text = document.getElementById("search");
  console.log(text.value);
  text.value = "";
});
