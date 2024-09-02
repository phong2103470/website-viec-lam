
const AddFuncButton = (id) => {
  let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newItem = listProduct[id - 1];
  let findItem = cartItems.findIndex((item, index) => {
    return newItem.id == item.id;
  });
  console.log(findItem);
  if (findItem != -1) {
    cartItems[findItem].quantity++;
  } else cartItems.push(newItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));


  // Update lại button
  let newProductContent = document.getElementById("new-product");

  if (newProductContent) {
    ShowNewProduct();
    ShowBestSellerProduct();
  }

  let productContent = document.getElementById("product-content");
  if(productContent){
    ShowProduct();
  }
};

const checkExitsItem = (id) => {
  let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newItem = listProduct[id - 1];
  return cartItems.findIndex((item, index) => {
    return newItem.id == item.id;
  });
};

let listjob = [
  {
    id: 1,
    name: "JOLLIBEE TUYỂN NHÂN VIÊN BÁN HÀNG",
    mota: "Nam nữ từ 18 tuổi, tốt nghiệp THPT trở lên, có tinh thần trách nhiệm.",
    price: 20000,
    quantity: 1,
    image: "images/jollibee.jpg",
    nature: {
      color: ["ban hang"],
      type: "Full-time",
    },
    newProduct: true,
    bestSeller: false,
  },
  {
    id: 2,
    name: "MIXUE CẦN THƠ TUYỂN NHÂN VIÊN PHA CHẾ",
    mota: "Vị trí: Phục vụ, độ tuổi từ 19-25. Môi trường làm việc năng động, vui vẻ, hòa đồng",
    price: 20000,
    quantity: 1,
    image: "images/mixue-1.jpg",
    nature: {
      color: ["pha che"],
      type: "Part-time",
    },
    newProduct: true,
    bestSeller: false,

  },
  {
    id: 3,
    name: "LOTTERIA CẦN THƠ TUYỂN DỤNG NHÂN VIÊN",
    mota: "Nam nữ từ 18 tuổi, tốt nghiệp THPT trở lên, có tinh thần trách nhiệm.",
    price: 20000,
    quantity: 1,
    image: "images/lotteria-1.jpg",
    nature: {
      color: ["phuc vu"],
      type: "Part-time",
    },
    newProduct: true,
    bestSeller: true,
  },
  {
    id: 4,
    name: "OKELA CAFÉ TUYỂN DỤNG ĐI LÀM NGAY",
    mota: "Nam nữ từ 18 tuổi, tốt nghiệp THPT trở lên, có tinh thần trách nhiệm.",
    price: 15000,
    quantity: 1,
    image: "images/okela-1.jpg",
    nature: {
      color: ["phuc vu"],
      type: "Full-time",
    },
    newProduct: true,
    bestSeller: true,
  },
  {
    id: 5,
    name: "TRÀ SỮA ĐÔ ĐÔ TÌM ĐỒNG ĐỘI!!",
    mota: "Nam nữ từ 18 tuổi, tốt nghiệp THPT trở lên, có tinh thần trách nhiệm.",
    price: 32000,
    quantity: 1,
    image: "images/dodo-1.jpg",
    nature: {
      color: ["pha che"],
      type: "Full-time",
    },
    newProduct: false,
    bestSeller: true,
  },
  {
    id: 6,
    name: "TEXAS CẦN THƠ TUYỂN NHÂN VIÊN PHỤC VỤ",
    mota: "Nam nữ từ 18 tuổi, tốt nghiệp THPT trở lên, có tinh thần trách nhiệm.",
    price: 19000,
    quantity: 1,
    image: "images/texas-chicken.png",
    nature: {
      color: ["phuc vu"],
      type: "Part-time",
    },
    newProduct: false,
    bestSeller: true,
  },
];

let listProductFirst = JSON.parse(localStorage.getItem("listProduct"));
if (!listProductFirst) {
  localStorage.setItem("listProduct", JSON.stringify(listjob));
}

const ShowNewProduct = () => {
  let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
  let newProductContent = document.getElementById("new-product");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (newProductContent) {
    newProductContent.innerHTML = "";
    listProduct.map((item, index) => {
      if (item.newProduct) {
        let node = document.createElement("div");
        node.classList.add("col-md-3", "CardItem");
        node.innerHTML = `
                                 <div class="card p-3">
                                 <div class="text-center">
          
                                 <img src="${
                                   item.image
                                 }" class="ImgItem" width="200">
          
                             </div>
          
                             <div class="product-details">
          
                                 <span class="NameItem">${item.name}</span>
                                <span class="font-weight-bold d-block PriceItem">${
                                                        item.price
                                                      }vnd/1 giờ</span>
          
                                 <div class="buttons d-flex flex-row addToCart">
                                     <button type="button" class="btn btn-primary chitiet" data-bs-toggle="tooltip" title="${item.mota}">
                                    Chi tiết
                                  </button> 
                                     <button
                                        onclick="AddFuncButton(${item.id})"
                                         ${
                                           checkExitsItem(item.id) != -1
                                             ? `class="btn btn-primary cart-button btn-block"><span class="dot">1</span>Đã lưu
                                         </button>`
                                             : `class="btn btn-success cart-button btn-block"><span class="dot">1</span>Lưu</button>`
                                         }
                                 </div>
          
                                 <div class="weight">
                    
                                 </div>
          
                             </div>
                             </div>
          `;
        newProductContent.appendChild(node);
      }
      // AddFuncButton();
    });
  }
};

const ShowBestSellerProduct = () => {
  let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newProductContent = document.getElementById("best-seller");
  if (newProductContent) {
    newProductContent.innerHTML = "";
    listProduct.map((item, index) => {
      if (item.bestSeller) {
        let node = document.createElement("div");
        node.classList.add("col-md-3", "CardItem");
        node.innerHTML = `
                                 <div class="card p-3">
                                 <div class="text-center">
          
                                 <img src="${
                                   item.image
                                 }" class="ImgItem" width="200">
          
                             </div>
                              
                             <div class="product-details">
          
                                 <span class="NameItem">${item.name}</span>
                                 <span class="font-weight-bold d-block PriceItem">${
                                  item.price
                                }vnd/1 giờ</span>

                                 <div class="buttons d-flex flex-row addToCart"> 
                                 <button type="button" class="btn btn-primary chitiet" data-bs-toggle="tooltip" title="${item.mota}">
                                    Chi tiết
                                  </button>
                                 <button
                                        onclick="AddFuncButton(${item.id})"
                                         ${
                                           checkExitsItem(item.id) != -1
                                             ? `class="btn btn-primary cart-button btn-block"><span class="dot">1</span>Đã lưu
                                         </button>`
                                             : `class="btn btn-success cart-button btn-block"><span class="dot">1</span>Lưu
                                            </button>`
                                         }
                                 </div>
          
                                 <div class="weight">
                  
                                 </div>
          
                             </div>
                             </div>
          `;
        newProductContent.appendChild(node);
      }
      // AddFuncButton();
    });
  }
};

const CheckLogin = () => {
  let LoginData = JSON.parse(localStorage.getItem("LoginData"));
  let loginControl = document.getElementById("login-control");
    if(LoginData && loginControl){
        loginControl.innerHTML = `
        <a onclick="OpenModalInfoUser()" class="mr-2">${LoginData.fullname}</a>
        <img id="user" style="width: 30px;" src="images/user.png">
        `
        let fullname = document.getElementById("fullname");
        let email= document.getElementById("email");
        let phone = document.getElementById("phone");

        fullname.innerHTML = `
        <b>${LoginData.fullname}</b>
        `;
        email.innerHTML = `
        <b>${LoginData.username}</b>
        `;
        phone.innerHTML = `
        <b>${LoginData.phone}</b>
        `
    }
}

const OpenModalInfoUser = () => {
  const modal = document.getElementById("modal-info");
  modal.style.display = 'block';
}

const ClostModalInfoUser = () => {
    const modal = document.getElementById("modal-info");
    modal.style.display = 'none';
}

const SignOutButton = () => {
  localStorage.removeItem("LoginData");
  location.reload();
}

onload = ShowNewProduct();
onload = ShowBestSellerProduct();
onload = CheckLogin();

window.addEventListener("storage", () => {
  ShowNewProduct();
});



window.addEventListener('storage', () => {
  ShowNewProduct();
  ShowBestSellerProduct();
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


