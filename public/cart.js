const cart = document.querySelector(".cart");
const cartBody = document.querySelector(".cart_body");
const cartBtn = document.querySelector(".cartBtn");
const badge = document.querySelector(".badge");
const cartLists = document.querySelector(".cartLists");
const addToCartBtn = document.querySelector(".addToCartBtn");
const deleteBtnEl = document.querySelector(".deletebtn");
const checkoutBtn = document.querySelector(".checkout_btn");

function getCartsItem() {
  let cartsItem;
  const items = localStorage.getItem("cartItems");
  items === null ? (cartItems = []) : (cartItems = JSON.parse(items));
  return cartItems;
}
cartBtn.addEventListener("click", () => {
  cart.classList.toggle("show");
});

addToCartBtn.addEventListener("click", () => {
  const cartItemLists = getCartsItem();

  const itemprice = 125;

  const newItem = {
    productId: Math.random().toString(36).substring(2),
    productName: "Fall Limited Edition",
    productCompany: "Sneakers",
    productImage: "./images/image-product-1-thumbnail.jpg",
    details: "These low-profile sneakers are your perfect casual",
    price: itemprice,
    quantity: itemQuantity,
    totalPrice: itemprice * itemQuantity,
  };
  const { total_price, productName, quantity, price } = newItem;

  localStorage.setItem(
    "cartItems",
    JSON.stringify([...cartItemLists, newItem])
  );

  window.location = "/";
});

function loadCartItem() {
  const cartItemLists = getCartsItem();

  if (!cartItemLists.length > 0) {
    cartBody.innerHTML = `<span>Your Cart is Empty</span>`;

    return;
  }

  cartItemLists.map(({ productName }) => {
    console.log(productName);
  });

  cartItemLists.forEach(
    ({
      productId,
      productName,
      productCompany,
      productImage,
      price,
      totalPrice,
      quantity,
    }) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src="${productImage}" class="item_image" alt="" /> 
      <div class="item__details" >
        <span>${productName}</span>
        <div>
          <span class="item_price_and_quantity" > 
            <span class="item_actual_price" >${price}</span>
            x 
            <span class="item_quantity">${quantity}</span>
          </span>
          <span class="item_total_price" >${totalPrice}</span>
        </div>
      </div>
      <button class="deletebtn" id='${productId}' ><img src="./images/icon-delete.svg" class="delete_icon" alt="" /></button>
  `;
      cartLists.append(li);
    }
  );
  checkoutBtn.style.display = "block";
  badge.textContent = cartItemLists.length;
  badge.style.display = "block";
}

loadCartItem();

cartLists.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("deletebtn")) {
    console.log("contains");
    target.parentElement.remove();
  }
  const ct = getCartsItem();
  const mp = ct.filter((it) => it.productId !== event.target.id);
  localStorage.setItem("cartItems", JSON.stringify(mp));

  location.href = "/";
});
