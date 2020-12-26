// 取得 cookie 的值



// 登入
var submit_btn = document.getElementById('submit');
var input_username = document.getElementById('input_username');
var input_password = document.getElementById('input_password');

submit_btn.addEventListener("click", function(){

    var getcookie = document.cookie;
    if (getcookie == "") {
      input_username.value = ""
      input_password.value = ""
      input_username.style.border = "3px solid red";
      input_password.style.border = "3px solid red";
      input_username.placeholder = "Username or password error!";
      setTimeout(function(){ alert("你根本沒有帳號，醒醒吧去註冊"); }, 3000);
    }else{
      var username = document.cookie
        .split('; ')
        .find(row => row.startsWith('user_id'))
        .split('=')[1];

      var email = document.cookie
        .split('; ')
        .find(row => row.startsWith('user_email'))
        .split('=')[1];

      var password = document.cookie
        .split('; ')
        .find(row => row.startsWith('user_passWord'))
        .split('=')[1];
        if ((input_username.value == username || input_username.value == email) && input_password.value == password) {
          alert("Hello World");
          window.location = "./index.html";

          localStorage.setItem("account", JSON.stringify(input_username.value));

        }else{
          input_username.value = ""
          input_password.value = ""
          input_username.style.border = "3px solid red";
          input_password.style.border = "3px solid red";
          input_username.placeholder = "Username or password error!";
        }
    }
  });

document.addEventListener("click", function(e){
  if (e.target == input_username || e.target == input_password) {
    input_username.removeAttribute("style");
    input_password.removeAttribute("style");
    input_username.placeholder = "Username or Email";
  }
});

function place_holder () {
  input_username.placeholder = "At least 6 characters"
}
