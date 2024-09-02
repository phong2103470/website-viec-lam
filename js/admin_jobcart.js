

const DeleteButton = (id) => {
  let ListBill = JSON.parse(localStorage.getItem("ListBill")) || [];
  ListBill.splice(id, 1);
  localStorage.setItem("ListBill", JSON.stringify(ListBill));

  ShowBillList();
}

const AcceptButton = (id) => {
  let ListBill = JSON.parse(localStorage.getItem("ListBill")) || [];
  ListBill[id].status = 'Accept';
  localStorage.setItem("ListBill", JSON.stringify(ListBill));

  ShowBillList();
}


const ShowBillList = () => {

    let ListBill = JSON.parse(localStorage.getItem("ListBill")) || [];
    let listBillContent = document.getElementById("bill-content");
    listBillContent.innerHTML = '';

    ListBill.map((item, index) => {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "row");
        cartItem.innerHTML = `
          <div class="col-1 d-flex align-items-center justify-content-center mt-5 mb-5">${index+1}</div>
          <div class="col-4 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" >
            <div>
            <p>Tên: ${item.fullname}</p>
            <p>Email: ${item.email}</p>
            <p>SDT: ${item.phone}</p>
            <p>Địa chỉ: ${item.address}</p></div>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" >
            <div>
            <p>Số lượng: ${item.totalQuantity}</p>
          <p>${item.totalPrice}</p></div>
          </div>
          <div class="col-1 d-flex align-items-center justify-content-center mt-5 mb-5">${item.status.toUpperCase()}</div>

          <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5">
          <button class="btn btn-primary mr-2"  style="margin-right: 10px" onclick="AcceptButton(${index})">
          <i class="far fa-check-circle"></i>
          </button>

          <button class="btn btn-danger" onclick="DeleteButton(${index})">
          <i class="fas fa-trash"></i>
          </button>
          </div>
        `;
        listBillContent.appendChild(cartItem);
    })

    

}
onload = ShowBillList();

window.addEventListener('storage', () => {

   ShowBillList();
});

