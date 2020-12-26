function europe() {
  document.getElementById('world_map').src='./image/world_map_europe.png';
}

function america() {
  document.getElementById('world_map').src='./image/world_map_america.png';
}

function africa() {
  document.getElementById('world_map').src='./image/world_map_africa.png';
}

function antarctica() {
  var penguin = document.getElementById('penguin');
  penguin.classList.add('penguinhover');
}

function asia() {
  document.getElementById('world_map').src='./image/world_map_asia.png';
}

function oceania() {
  document.getElementById('world_map').src='./image/world_map_oceania.png';
}

function normal() {
  document.getElementById('world_map').src='./image/world_map.png';
  penguin.classList.remove('penguinhover');
}

window.addEventListener ("resize", function(){
  bodyElement = document.getElementsByTagName("BODY")[0];
  newWidth = bodyElement.offsetWidth;
  if (newWidth < 768) {
    dragbox.classList.add('drag-box');
  }else {
    dragbox.classList.remove('drag-box');
  }
});

$(function(){
  $('.drag').dragscroll();
});

const leftbutton = document.getElementById('leftbutton');
const rightbutton = document.getElementById('rightbutton');

function no_left_botton () {
  if(document.getElementById('container').scrollLeft <= 0) {
    leftbutton.style.display="none";
  }else{
    leftbutton.removeAttribute("style");
  }
}

function no_right_botton () {
  let scrollbox = document.getElementById('container');
  let world_map = document.getElementById('world_map');
  var newScrollLeft = scrollbox.scrollLeft;
  var width = scrollbox.offsetWidth;
  var scrollWidth = scrollbox.scrollWidth;

  if(scrollWidth - newScrollLeft - width < 1) {
    rightbutton.style.display="none";
  }else{
    rightbutton.removeAttribute("style");
  }
}

no_left_botton ();
no_right_botton ();

leftbutton.onclick = function () {
  let toLeft = document.getElementById('container').scrollLeft;
  document.getElementById('container').scrollTo({ left: toLeft -= 300, behavior: 'smooth' });
};


rightbutton.onclick = function () {
  let toRight = document.getElementById('container').scrollLeft;
  document.getElementById('container').scrollTo({ left: toRight += 300, behavior: 'smooth' });
};

$('#europezoom').on('click', function () {
    var coords = '370,20'.split(',');
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(500);
    $('#container').scrollTop(160);
});

$('#americazoom').on('click', function () {
    var coords = '100,80'.split(',');
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(10);
    $('#container').scrollTop(180);
});

$('#africazoom').on('click', function () {
    var coords = '600,200'.split(',');
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(680);
    $('#container').scrollTop(200);
});

$('#antzoom').on('click', function () {
    var coords = '600,500'.split(',');
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(600);
    $('#container').scrollTop(700);
});

$('#oceaniazoom').on('click', function () {
    var coords = '1200,500'.split(',');
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(1300);
    $('#container').scrollTop(700);
});

$('#asiazoom').on('click', function () {
    $( '#container' ).addClass( "drag-box" );
    $('#world_map').width('2500px');
    $('#mapbox').height('100vh');
    $('#container').scrollLeft(1300);
    $('#container').scrollTop(200);
});



var areabtn = document.getElementsByClassName('areabtn');
var inbtn = document.getElementsByClassName('inbtn')
var dragbox = document.getElementById('container');
var drag = document.getElementById('mapbox');
var world_map = document.getElementById('world_map');
var body = document.getElementsByTagName("BODY")[0];
var width = body.offsetWidth;
var penguin_div = document.getElementsByClassName('penguin')[0];
var penguin_indiv = document.getElementsByClassName('penguin_in')[0];

function onResizeEvent() {
    bodyElement = document.getElementsByTagName("BODY")[0];
    newWidth = bodyElement.offsetWidth;
    if(newWidth < 767){
      world_map.style.width="1200px";
      back.style.display="none";
    }else{
      world_map.style.width="2500px"
      back.style.display="flex";
      dragbox.classList.add('drag-box');
    }
};

window.addEventListener ('load', function (){
  let bodyElement = document.getElementsByTagName("BODY")[0];
  let windowWidth = bodyElement.offsetWidth
  if (windowWidth <= 766) {
    dragbox.addEventListener("scroll", function(){
      no_left_botton ();
      no_right_botton ();
    });
    dragbox.classList.add('drag-box');
  }
});

for(let i = 0; i < areabtn.length; i++) {
    areabtn[i].onclick = function () {

      dragbox.classList.add('drag-box');

      for (let i = 0; i < areabtn.length; i++) {
        areabtn[i].style.display = "none";
        penguin_div.style.display = "none";
        penguin_indiv.style.display = "flex";
      };
      dragbox.classList.add("grab");
      for (let i = 0; i < inbtn.length; i++) {
        inbtn[i].style.display = "flex";
      }

        window.addEventListener ("resize", onResizeEvent, true);
      }
    };

if(body.offsetWidth < 767) {
  dragbox.scrollLeft = 300;
};

  // backpage
  var back = document.getElementById('backbutton');
  back.addEventListener('click', function(){
    window.removeEventListener ("resize", onResizeEvent, true);
    for (let i = 0; i < inbtn.length; i++) {
      inbtn[i].style.display = "none";
    }
    for (let i = 0; i < areabtn.length; i++) {
      areabtn[i].style.display = "flex";
    };
    dragbox.classList.remove('drag-box');
    penguin_div.style.display = "block";
    penguin_indiv.style.display = "none";
    world_map.removeAttribute("style");
    dragbox.classList.remove("grab");
    $('#mapbox').height('auto');
  });

// penguin_in_say_hi
var hihi_penguin = document.getElementById('hihi_penguin');
function penguin_in_say_hi () {
  let i = 2;
  var interval_id = setInterval(function(){
    i--;
    if (i == 1) {
      hihi_penguin.src='./image/penguin.png';
    }
    if(i == 0) {
      hihi_penguin.src='./image/penguin_handup.png';
      clearInterval(interval_id);
      penguin_in_say_hi ();
    }
  }, 1000);
}

penguin_in_say_hi ();

// 企鵝在safari會爆炸
var bs = navigator.userAgent.toLowerCase();
if (bs.indexOf('safari') != -1) {
  if (bs.indexOf('chrome') > -1) {
    // alert("1") // Chrome
  } else {
    // alert("2") // Safari
    penguin_indiv.classList.remove('penguin_in')
    penguin_indiv.style.display = "none";
    penguin_div.style.display = "none";
  }
}
