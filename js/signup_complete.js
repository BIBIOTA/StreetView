var my_cookies = document.cookie;

console.log(my_cookies);

// 取得 cookie 的值

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

function alertCookieValue() {
  alert(`Your username is ${username}\nYour password is ${password}\nYour Email is ${email}`);
}

alertCookieValue()
