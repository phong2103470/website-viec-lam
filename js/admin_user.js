
//Id của user đang được Edit
var IdUserIsBeingEditing = 0;

const DeleteUser = (id, email) => {
  let ListUser = JSON.parse(localStorage.getItem("ListUser"));
  localStorage.removeItem(ListUser[id].username)
  ListUser.splice(id,1);
  localStorage.setItem("ListUser", JSON.stringify(ListUser));
  ShowListUser();
}

const EditUser = (id) => {
  let ListUser = JSON.parse(localStorage.getItem("ListUser"));
  let user = ListUser[id];
  let usernameEdit  = document.getElementById("usernameedit");
  let emailEdit = document.getElementById("emailedit");
  let phoneEdit = document.getElementById("phoneedit");

  usernameEdit.value = user.fullname;
  emailEdit.value = user.username;
  phoneEdit.value = user.phone;

  IdUserIsBeingEditing = id;

  //Hiển thị modal lên
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

//đống hộp modal
const CancelEditBtn = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

const SaveEditBtn = () => {
  let ListUser = JSON.parse(localStorage.getItem("ListUser"));
  let usernameEdit  = document.getElementById("usernameedit");
  let emailEdit = document.getElementById("emailedit");
  let phoneEdit = document.getElementById("phoneedit");


  ListUser[IdUserIsBeingEditing].username = emailEdit.value;
  ListUser[IdUserIsBeingEditing].fullname = usernameEdit.value;
  ListUser[IdUserIsBeingEditing].phone = phoneEdit.value;


  localStorage.setItem("ListUser", JSON.stringify(ListUser));

  //Hiển thị modal lên
  let modal = document.getElementById("modal");
  modal.style.display = "none";

  ShowListUser();
  return false;
}

const ShowModalCreateUser = () => {
  let modal = document.getElementById("modal-create");
  modal.style.display = "block";
}
const CloseModalCreateUser = () => {
  let modal = document.getElementById("modal-create");
  modal.style.display = "none";
}

const CreateNewUser = () => {
  let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];
  let username = document.getElementById("email").value;
  let fullname = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;

  let newUser = {
    username, fullname, phone, password, phone
  };

  ListUser.push(newUser)

  localStorage.setItem("ListUser", JSON.stringify(ListUser));
  localStorage.setItem(username, JSON.stringify(newUser))
  CloseModalCreateUser();
  ShowListUser();
  return false;
}

const ShowListUser = () => {
    let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];
    let content = document.getElementById("listuser-content");
    content.innerHTML = "";
    ListUser.map((item, index) => {
      let node = document.createElement("div");
      node.classList.add("cart-item", "row");
      node.innerHTML = `
      <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5">${index + 1}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px ">${item.fullname}</div>
      <div class="col-4 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.username}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5"  style="font-size:21px; color : red;">${item.phone}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5">
      <button onclick="EditUser(${index})" style="margin-right:10px"  class="btn btn-primary" onclick="DeleteButton(${index})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-danger ml-2" onclick="DeleteUser(${index})"><i class="fas fa-trash"></i></button>
      </div>
      `
      content.appendChild(node);
    })
    console.log(ListUser);

}

onload = ShowListUser();

//Update trang khi LocalStorage thay đổi
window.addEventListener('storage', () => {
  ShowListUser();
});



