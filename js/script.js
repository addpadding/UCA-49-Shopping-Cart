// Home
console.log("Home")


// define product
let products_Dom = document.querySelector(".product_s")

let carts_products_menu = document.querySelector(".carts_products")
let carts_products_div_Dom = document.querySelector(".carts_products div")

let shopping_cart_icon = document.querySelector(".shopping_cart");
let badge_Dom = document.querySelector(".badge")

//- JSON.parse() => string to obj
//- JSON.stringify() = > obj to string

// open cart menu
shopping_cart_icon.addEventListener("click", open_cart_menu)

// Display products
function draw_product_ui() {
    let products_ui = product_obj.map((item) => {
        return `
    <div class="product_item">
        <img class="product_item_img" src="${item.imageURL_obj}" alt="">

        <div class="product_item_desc">
            <h2>${item.title_obj}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <span> size : ${item.size_obj} </span>
        </div>

        <div class="product_item_actions">
            <button class="add_to_cart" onclick="addToCart(${item.id_obj})" >Add to Cart</button>
            <i class="favorite far fa-heart"></i>
        </div>
    </div>

        `
    });

    products_Dom.innerHTML = products_ui;
}
draw_product_ui()

// check if items in localStoreage
function Cart_Menu_Data() {
    let add_item = JSON.parse(localStorage.getItem("productCart_set"))
        ? JSON.parse(localStorage.getItem("productCart_set"))
        : [];

    if (add_item) {
        add_item.map(item => {
            carts_products_div_Dom.innerHTML += `<p>${item.title_obj}</p>`
        });

        badge_Dom.style.display = "block"
        badge_Dom.innerHTML += add_item.length;
    }
}
Cart_Menu_Data()

// add to cart
function addToCart(id_item) {

    if (localStorage.getItem("username_set")) {

        let choosen_item = product_obj.find((find_item) => find_item.id_obj === id_item);
        carts_products_div_Dom.innerHTML += `<p>${choosen_item.title_obj}</p>`

        add_item = [...add_item, choosen_item]
        localStorage.setItem("productCart_set", JSON.stringify(add_item))

        let cart_length_P = document.querySelectorAll(".carts_products div p")
        console.log(cart_length_P)

        badge_Dom.style.display = "block"
        badge_Dom.innerHTML = cart_length_P.length

    } else {
        window.location = "login.html"
    }

}

// open cart menu
function open_cart_menu() {

    if (carts_products_div_Dom.innerHTML != "") {

        if (carts_products_menu.style.display == "block") {
            carts_products_menu.style.display = "none"
        } else {
            carts_products_menu.style.display = "block"
        }
    }

}
