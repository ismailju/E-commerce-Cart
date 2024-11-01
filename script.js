document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotalDisplay = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  const cart = [];

  products.forEach((product) => {
    // productList.innerHTML
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const prodID = parseInt(e.target.getAttribute("data-id"));
      // console.log(prodID);
      const prodFind = products.find((p) => p.id === prodID);
      //   console.log(prodFind);
      addToCart(prodFind);
    }
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length) {
      //cart not empty
      emptyCart.classList.add("hidden");
      cartTotalDisplay.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <span>${item.name} - ${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;

        cartItem.classList.add("cart");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = `Remove`;
        removeButton.setAttribute("data-id", item.id);
        cartItem.appendChild(removeButton);
      });
    } else {
      //cart empty
      cartItems.appendChild(emptyCart);
      emptyCart.classList.remove("hidden");
      // cartTotalDisplay.classList.add("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    // console.log(cart);
    alert("Checkout Successfully");
    renderCart();
  });
});
