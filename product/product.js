import products from "../data/products.js";
import formatCurrency from "../utils/formatCurrency.js";
import displayOnNavbar from "../helper/displayOnNavbar.js";
console.log(displayOnNavbar);
displayOnNavbar();

// xử lý đăng xuất
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.onclick = function () {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // tạo ảnh
    const productImage = document.createElement("img");
    productImage.classList.add("product-img");
    productImage.setAttribute("src", product.image);
    // tạo thẻ a bọc ảnh
    const productImageLink = document.createElement("a");
    productImageLink.setAttribute(
      "href",
      "../detail/index.html?id=" + product.id
    );
    productImageLink.appendChild(productImage);
    // tạo tên
    const productName = document.createElement("a");
    productName.setAttribute("href", "../detail/index.html?id=" + product.id);
    productName.classList.add("product-name");
    productName.innerHTML = product.name;

    // tạo giá mới
    const newPrice = document.createElement("span");
    newPrice.classList.add("new-price");
    newPrice.innerHTML = formatCurrency(product.price);

    // tạo nút thêm vào giỏ hàng
    const addToCartBtn = document.createElement("button");
    addToCartBtn.innerHTML = "thêm vào giỏ hàng";
    addToCartBtn.classList.add("btn", "btn-primary", "w-100", "mt-3");

    addToCartBtn.onclick = function () {
      // gọi hàng xử lý thêm vào giỏ hàng
      addToCart(product);
    };
    // tạo thẻ div bọc các giá bán
    const productPrices = document.createElement("div");
    productPrices.classList.add("product-prices");
    productPrices.appendChild(newPrice);

    // tạo thẻ product
    const productTag = document.createElement("div");
    productTag.classList.add("product");
    productTag.appendChild(productImageLink);
    productTag.appendChild(productName);
    productTag.appendChild(productPrices);
    productTag.appendChild(addToCartBtn);

    // tạo thẻ product wrapper
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("col-12", "col-sm-6", "col-md-3", "p-3");
    productWrapper.appendChild(productTag);
    console.log(productWrapper);

    productList.appendChild(productWrapper);
  }
}
renderProducts(products);

const searchInput = document.getElementById("search-input");
searchInput.oninput = function (event) {
  const text = event.target.value;
  searchProducts(text);
};
function searchProducts(text) {
  const productsCopy = [...products];
  const searchText = text.toLowerCase().trim();
  if (searchText === "") {
    renderProducts(productsCopy);
  } else {
    const result = productsCopy.filter(function (p) {
      const productName = p.name;
      const productNameLower = productName.toLowerCase();
      return productNameLower.includes(searchText);
    });
    renderProducts(result);
  }
}
const navbarSearchForm = document.getElementById("navbar-search-form");
const navbarSearch = document.getElementById("navbar-search");
navbarSearchForm.onsubmit = function (event) {
  event.preventDefault();
  const text = navbarSearchInput.value;
  searchProducts(text);
};

// xử lý thêm sp vào giỏ hàng
function addToCart(product) {}
