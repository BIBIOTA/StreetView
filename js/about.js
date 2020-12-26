// backup
document.getElementById("back");
back.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// scroll animation
var origin = document.getElementsByClassName('origin')[0];
var target = document.getElementsByClassName('target')[0];
var origin_img = document.getElementById('changeimage');
var target_img = document.getElementById('changeimage_2');
var body = document.getElementsByTagName('body')[0];

window.addEventListener('load', function (){
  if(window.innerWidth >= 992) {
    window.addEventListener('scroll', function(){
      function moveToNextAt(e){
        let moveToNextAt = (e.offsetTop) + (e.clientHeight / 2);
        return moveToNextAt
      };
      if (window.scrollY > origin.offsetTop - 200){
        origin_img.classList.add('about_ani');
        if (window.scrollY > moveToNextAt(origin)) {
          origin_img.classList.remove('about_ani');
        }
      }else{
        origin_img.classList.remove('about_ani');
      }

      if (window.scrollY > target.offsetTop - 200){
        target_img.classList.add('about_ani');
        if (window.scrollY > moveToNextAt(target)) {
          target_img.classList.remove('about_ani');
        }
      }else{
        target_img.classList.remove('about_ani');
      }
    });
  }
});

window.addEventListener('resize', function (){
  if(window.innerWidth >= 992) {
    window.addEventListener('scroll', function(){
      function moveToNextAt(e){
        let moveToNextAt = (e.offsetTop) + (e.clientHeight / 2);
        return moveToNextAt
      };
      if (window.scrollY > origin.offsetTop - 200){
        origin_img.classList.add('about_ani');
        if (window.scrollY > moveToNextAt(origin)) {
          origin_img.classList.remove('about_ani');
        }
      }else{
        origin_img.classList.remove('about_ani');
      }

      if (window.scrollY > target.offsetTop - 200){
        target_img.classList.add('about_ani');
        if (window.scrollY > moveToNextAt(target)) {
          target_img.classList.remove('about_ani');
        }
      }else{
        target_img.classList.remove('about_ani');
      }
    });
  }
});
