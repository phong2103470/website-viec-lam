
const ShowProduct = () => {
let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let productContent = document.getElementById("product-content");
  if (productContent) {
    productContent.innerHTML = "";
    listProduct.map((item, index) => {
      if (true) {
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
        productContent.appendChild(node);
      }
    });
  }
}


onload = ShowProduct();

window.addEventListener('storage', () => {
 ShowProduct()
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
