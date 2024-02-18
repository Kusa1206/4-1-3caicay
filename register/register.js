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
// loginBtn.onclick = function () {
const registerform = document.getElementById("register-form");
const userList = JSON.parse(localStorage.getItem("userList")) || [];
console.log(userList);

registerform.onsubmit = function (event) {
  event.preventDefault();

  // ngăn chặn hành động gửi đi và load lại
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );
  const registerError = document.getElementById("register-error");

  // Kiểm tra ô đăng nhập
  if (username.value === "") {
    usernameError.innerHTML = "Nhập tên đăng ký !!!";
  } else {
    usernameError.innerHTML = "";
  }

  if (password.value === "") {
    passwordError.innerHTML = "Nhập mật khẩu !!!";
  } else {
    passwordError.innerHTML = "";
  }

  if (confirmPassword.value === "") {
    confirmPasswordError.innerHTML = "Nhập lại mật khẩu !!!";
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerHTML = "Mật khẩu không khớp !!!";
  } else {
    confirmPasswordError.innerHTML = "";
  }

  const existingUser = userList.find(function (user) {
    return user.username === username.value;
  });
  if (existingUser) {
    registerError.innerHTML = "Tên đăng nhập hoặc email đã được sử dụng";
  } else {
    // đăng ký thành công
    const newUser = {
      username: username.value,
      password: password.value,
    };
    userList.push(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));
    registerError.innerHTML = "";
    window.location.href = "../login";
  }
};
