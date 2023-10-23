const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoIcon);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.remove("inactive");
}

function toggleMobileMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.remove("inactive");
}

function toggleCarritoIcon() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }
    if (!productDetailContainer.classList.contains("inactive")) {
        productDetailContainer.classList.add("inactive");
    }
    aside.classList.remove("inactive");
}

function openProductDetailAside() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "Airpods",
    price: 264,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "google pixel 7 pro",
    price: 659,
    image: "https://images.pexels.com/photos/15802450/pexels-photo-15802450/free-photo-of-hombre-gente-mujer-telefono-inteligente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "mcbook",
    price: 1500,
    image: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});



function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);