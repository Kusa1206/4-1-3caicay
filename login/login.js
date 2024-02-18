// Biến: variable
// const: hằng số, ko thể thay đổi
// let: số có thể thay đổi
// %: phép chia lấy phần dư
// === : so sánh kiểu
// hàm - function (nhà máy)
//Khởi tạo hàm: function sayhello() { console.log('hello cac ban')}
// gọi hàm: say hello()
// loginBtn.innerHTML = 'Dang xuat'
// console.log(loginBtn.innerHTML)
const loginForm = document.getElementById("login-form");
loginForm.onsubmit = function (event) {
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const loginError = document.getElementById("login-error");

  // Kiểm tra ô đăng nhập
  if (username.value === "") {
    usernameError.innerHTML = "Nhập tên đăng nhập !!!";
  } else {
    usernameError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Nhập mật khẩu !!!";
  } else {
    passwordError.innerHTML = "";
  }
  const existingUser = userList.find(function (user) {
    return user.username;
  });

  if (existingUser) {
    loginError.innerHTML = "Sai tên đăng nhập hoặc mật khẩu";
  } else {
    loginError.innerHTML = "";
    window.location.href = "../index.html";
  }
};
console.log(loginForm);
