document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotalDisplay = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  products.forEach((product) => {
    // productList.innerHTML
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const prodID = parseInt(e.target.getAttribute("data-id"));
      // console.log(prodID);
      const prodFind = products.find((p) => p.id === prodID);
      console.log(prodFind);
    }
  });
});
