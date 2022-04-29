const ProductThumbnails = document.querySelectorAll(".product_thumbnail");
const thumbnailEl = document.querySelector(".thumbnail");
const incBtn = document.querySelector(".inc_btn");
const decBtn = document.querySelector(".dec_btn");
const itemQuantityEl = document.querySelector(".item-quantity");
const navbarWrapper = document.querySelector(".navbar_wrapper");
const menuBtn = document.querySelectorAll(".menu_btn");

let itemQuantity = 0;

itemQuantityEl.innerText = itemQuantity;
ProductThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnailEl.setAttribute("src", thumbnail.alt);
  });
});

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbarWrapper.classList.toggle("show");
  });
});

incBtn.addEventListener("click", () => {
  itemQuantityEl.innerText = itemQuantity += 1;
});

decBtn.addEventListener("click", () => {
  if (!itemQuantity > 0) return;

  itemQuantityEl.innerText = itemQuantity -= 1;
});
