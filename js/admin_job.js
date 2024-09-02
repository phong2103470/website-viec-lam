//Id của user đang được Edit
var IdUserIsBeingEditing = 0;
var IdImageChoose = 0;
var ListImage = [
    'images/dodo-1.jpg',
    'images/IMG_2989-01.jpg',
    'images/jollibee.jpg',
    'images/lotteria-1.jpg',
    'images/mixue-1.jpg',
    'images/okela-1.jpg',
    'images/songbing-1.jpg',
    'images/texas-chicken.png',

]

const DeleteUser = (id) => {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

    listProduct.splice(id,1);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  ShowListProduct();
}

const EditUser = (id) => {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
    let item = listProduct[id];
    let name = document.getElementById("name");
    let mota = document.getElementById("mota");
    let price = document.getElementById("price");

    name.value = item.name;
    mota.value = item.mota;
    price.value = item.price;

  IdUserIsBeingEditing = id;

  let idImage = ListImage.findIndex((i,index) => {
    return item.image == i;
  })
  //Hiển thị modal lên
  IdImageChoose = idImage;
  ShowListImgEdit();
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

//đống hộp modal
const CancelEditBtn = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

const SaveEditBtn = () => {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

    let name = document.getElementById("name").value;
    let mota = document.getElementById("mota").value;
    let price = document.getElementById("price").value;

    listProduct[IdUserIsBeingEditing].name = name;
    listProduct[IdUserIsBeingEditing].mota = mota;
    listProduct[IdUserIsBeingEditing].price = price;
    listProduct[IdUserIsBeingEditing].image = ListImage[IdImageChoose];


  localStorage.setItem("listProduct", JSON.stringify(listProduct));

  //Hiển thị modal lên
  let modal = document.getElementById("modal");
  modal.style.display = "none";

  ShowListProduct();
  return false;
}

const ShowModalCreateUser = () => {
ShowListImg();
  let modal = document.getElementById("modal-create");
  modal.style.display = "block";
}
const CloseModalCreateUser = () => {
  let modal = document.getElementById("modal-create");
  modal.style.display = "none";
}

const ChooseImage = (id) => {
  IdImageChoose = id;
  ShowListImg();
  ShowListImgEdit();
}

const ShowListImg = () => {
  let ListImageContent = document.getElementById("choose-img");
  ListImageContent.innerHTML = '';
  ListImage.map((item,index) => {
      let node = document.createElement("div");
      node.classList.add('col-2');
      node.innerHTML = `
            <div onclick="ChooseImage(${index})" style="position: relative; cursor: pointer;">
                <img src="${item}" width="40px"/>
                ${IdImageChoose == index ? 
                    `
                    <div style="position: absolute; bottom: 5px; right: 5px; z-index: 200; font-size: 30px; color: yellow;">
                        <i class="fas fa-check-circle"></i>
                 </div>`
                    :
                    ``
                }
                
         </div>
      
      `
      ListImageContent.appendChild(node);
  })

}

const ShowListImgEdit = () => {
    let ListImageContent = document.getElementById("choose-img-edit");
    ListImageContent.innerHTML = '';
    ListImage.map((item,index) => {
        let node = document.createElement("div");
        node.classList.add('col-2');
        node.innerHTML = `
              <div onclick="ChooseImage(${index})" style="position: relative; cursor: pointer;">
                  <img src="${item}" width="40px"/>
                  ${IdImageChoose == index ? 
                      `
                      <div style="position: absolute; bottom: 5px; right: 5px; z-index: 200; font-size: 30px; color: yellow;">
                          <i class="fas fa-check-circle"></i>
                   </div>`
                      :
                      ``
                  }
                  
           </div>
        
        `
        ListImageContent.appendChild(node);
    })
  
  }

const CreateNewUser = () => {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
    let image = ListImage[IdImageChoose];
    let name = document.getElementById("namenew").value;
    let mota = document.getElementById("motanew").value;
    let price = document.getElementById("pricenew").value;

  let newItem = {
    id: listProduct[listProduct.length-1].id+1,
    name,
    price,
    quantity: 1,
    image,
    nature: {
      color: ["phuc vu"],
      type: ["Part-time"],
    },
    newProduct: false,
    bestSeller: true,
    mota
    
  };
  
  console.log(newItem);
  listProduct.push(newItem);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  CloseModalCreateUser();
  ShowListProduct();

  return false;
}

const ShowListProduct = () => {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

    let content = document.getElementById("listuser-content");
    content.innerHTML = "";
    listProduct.map((item, index) => {
      let node = document.createElement("div");
      node.classList.add("cart-item", "row");
      node.innerHTML = `
      <div class="col-1 d-flex align-items-center justify-content-center mt-5 mb-5">${index + 1}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px ">
        <img src="${item.image}" width="100px"/>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.name}</div>
      <div class="col-3 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5">
        ${item.mota}
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5">
        ${(item.price)} VND/h
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5">
      <button onclick="EditUser(${index})" style="margin-right:10px" class="btn btn-primary" onclick="DeleteButton(${index})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-danger ml-2" onclick="DeleteUser(${index})"><i class="fas fa-trash"></i></button>
      </div>
      `
      content.appendChild(node);
    })

}

onload = ShowListProduct();

//Update trang khi LocalStorage thay đổi
window.addEventListener('storage', () => {
  ShowListUser();
});


