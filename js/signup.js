// naxt_back
var next_1 = document.getElementById("next");
var next_2 = document.getElementById("next_2");
var p1 = document.getElementById("page1");
var p2 = document.getElementById("page2");

var back_1 = document.getElementById("back");
var back_2 = document.getElementById("back_2");

var p3 = document.getElementById("page3");
var next_email = document.getElementById("next_email");
var next_email_2 = document.getElementById("next_email_2");

var back_passWord = document.getElementById("back_passWord");
var back_passWord_2 = document.getElementById("back_passWord_2");

var submit = document.getElementById("submit");
var submit_2 = document.getElementById("submit_2");

// console.log(document.getElementById('username_div'));
document.addEventListener("click", function(e){
  var input_username = document.getElementById('username');
  var input_password = document.getElementById('password');
  var repassword = document.getElementById('repassword');
  var email = document.getElementById('email');
  var reemail = document.getElementById('reemail');
  if(e.target == next_1 || e.target == next_2) {
    if (error() == false) {
      if(username_div.nextElementSibling.classList.value == "err") {
        return false
      }else{
        username_div.insertAdjacentHTML("afterend", usernameErr);
        return false
      }
    }else{
      p1.classList.remove("inside_box");
      p1.classList.add("inside_box_off");
      p2.classList.remove("inside_box_2_on");
      p2.classList.add("inside_box_2_on");
    }
  }else if(e.target == back || e.target == back_2) {
    p2.classList.remove("inside_box_2_on");
    p2.classList.add("inside_box_2");
    p1.classList.remove("inside_box_off");
    p1.classList.add("inside_box");
    if(username_div.nextElementSibling.classList.contains('err')) {
      username_div.nextElementSibling.remove();
    }
  }else if (e.target == next_email || e.target == next_email_2) {
    if (error_p(input_password,repassword) == -1) {
      if(password_div.nextElementSibling.classList.contains("null")) {
        return false
      }else if(password_div.nextElementSibling.classList.contains("passerr") || password_div.nextElementSibling.classList.contains("match")){
        password_div.nextElementSibling.remove();
        password_div.insertAdjacentHTML("afterend", nullnull);
      }else{
        password_div.insertAdjacentHTML("afterend", nullnull);
      }
    }else if(error_p(input_password,repassword) == 0) {
      if(password_div.nextElementSibling.classList.contains("match")) {
        return false
      }else if(password_div.nextElementSibling.classList.contains("passerr") || password_div.nextElementSibling.classList.contains("null")){
        password_div.nextElementSibling.remove();
        password_div.insertAdjacentHTML("afterend", passwordMatch);
      }else{
        password_div.insertAdjacentHTML("afterend", passwordMatch);
        return false
      }
    }else if(error_e(input_password) == 0) {
      if(password_div.nextElementSibling.classList.contains("passerr")) {
        return false
      }else if(password_div.nextElementSibling.classList.contains("null") || password_div.nextElementSibling.classList.contains("match")){
        password_div.nextElementSibling.remove();
        password_div.insertAdjacentHTML("afterend", passwordErr);
      }else{
        password_div.insertAdjacentHTML("afterend", passwordErr);
        return false
      }
    }else{
      p2.classList.add("inside_box_2");
      p2.classList.remove("inside_box_2_on");
      p3.classList.add("inside_box_3_on");
      p3.classList.remove("inside_box_3");
    }
  }else if (e.target == back_passWord || e.target == back_passWord_2) {
    p3.classList.remove("inside_box_3_on");
    p3.classList.add("inside_box_3");
    p2.classList.remove("inside_box_2");
    p2.classList.add("inside_box_2_on");
    if(password_div.nextElementSibling.classList.contains('err')) {
      password_div.nextElementSibling.remove();
    }
  }else if (e.target == submit || e.target == submit_2) {
    if (error_p(email,reemail) == -1) {
      if(email_div.nextElementSibling.classList.contains("null")) {
        return false
      }else if(email_div.nextElementSibling.classList.contains("match")){
        email_div.nextElementSibling.remove();
        email_div.insertAdjacentHTML("afterend", nullnull);
      }else{
        email_div.insertAdjacentHTML("afterend", nullnull);
      }
    }else if(error_p(email,reemail) == 0) {
      if(email_div.nextElementSibling.classList.contains("match")) {
        return false
      }else if(email_div.nextElementSibling.classList.contains("null")){
        email_div.nextElementSibling.remove();
        email_div.insertAdjacentHTML("afterend", emailMatch);
      }else{
        email_div.insertAdjacentHTML("afterend", emailMatch);
        return false
      }
    }else{
      function validateEmail(elementValue){
       var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       return emailPattern.test(elementValue);
     }

      if(validateEmail(email.value) == true){
        var oldDateObj = new Date();
        var newDateObj = new Date();
        newDateObj.setTime(oldDateObj.getTime() + (10 * 60 * 1000));
        var newDateObj = newDateObj.toGMTString();
        document.cookie = `user_id=${input_username.value};path=/; expires=${newDateObj}`;
        document.cookie = `user_passWord=${input_password.value};path=/; expires=${newDateObj}`;
        document.cookie = `user_email=${email.value};path=/; expires=${newDateObj}`;
        window.location = "./signin_complete.html";
        var my_cookies = document.cookie;

        console.log(my_cookies);

      }else{
        if(email_div.nextElementSibling.classList.contains("match")) {
          return false
        }else if(email_div.nextElementSibling.classList.contains("null")){
          email_div.nextElementSibling.remove();
          email_div.insertAdjacentHTML("afterend", emailMatch);
        }else{
          email_div.insertAdjacentHTML("afterend", emailMatch);
          return false
        }
      }
    }
  }
});

// error message
var username_div = document.getElementById('username_div');
var usernameErr = `<div class="err"><p>if(input.value == null){return false}else{Are you Sexfat ?}</p></div>`;
var nullnull = `<div class="err p2err null"><p>if(input.value == null){return false}else{Are you Sexfat ?}</p></div>`;
var passwordErr = `<div class="err p2err passerr"><p>Password at least 6 characters</p></div>`;
var passwordMatch = `<div class="err p2err match"><p>Passwords must match</p></div>`;
var emailMatch = `<div class="err p2err match"><p>Email address must match</p></div>`;

function error () {
  var input_username = document.getElementById('username');
  if (input_username.value == "") {
    return false
  }else{
    return true
  }
}

var password_div = document.getElementById('password_div');
var email_div = document.getElementById('email_div');

function error_p ( a , b ) {
  if (a.value == "" || b.value == "") {
    return -1
  }else if (a.value != b.value){
    return 0
  }else{
    return true
  }
}

function error_e (c) {
  if (c.value.length < 6) {
    return false
  }else{
    return true
  }
}
// disable enter
$("form").keypress(function(e) {
  //Enter key
  if (e.which == 13) {
    return false;
  }
});
