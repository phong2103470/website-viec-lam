const LoginButton = () => {

  let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];


  var TBElement = document.querySelector('#thongbao');
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(password);

  let userFind = ListUser.find((item,index) => {
    return email == item.username
  })
  console.log(userFind);
  if(userFind){
    if(userFind.password == password){
      TBElement.innerHTML  = 'Đăng nhập thành công!';
      localStorage.setItem("LoginData", JSON.stringify(userFind));
      window.location.href = "index.html";
    }
    else {
      TBElement.innerHTML  = 'Email hoặc mật khẩu không chính xác!';
      return false;
    }
  }else{
    TBElement.innerHTML  = 'Email hoặc mật khẩu không chính xác!';
    return false;
  }
  return false;
}

//Hiện mật khẩu
function showPassword() {
  var passwordInput = document.getElementById("password");
  var showpass = document.getElementById("showpass").checked;

  if (showpass) {
      passwordInput.type = "text";

  } else {
      passwordInput.type = "password";

  }
}
