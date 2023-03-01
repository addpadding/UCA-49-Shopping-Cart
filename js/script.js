// Home
console.log("Home")


let user_info = document.querySelector("#user_ul_info")
let user_hamza = document.querySelector("#user_hamza")
let link_s = document.querySelector("#link_s")
let logout_Btn = document.querySelector("#logout")



let username_check = localStorage.getItem("username_set")

if (username_check) {
    link_s.remove()
    user_info.style.display = "flex"

    user_hamza.innerHTML = username_check
}

logout_Btn.addEventListener("click", function () {
    localStorage.clear();

    setTimeout(() => {
        window.location = "register.html"
    }, 1500);

})

// define product
let products_Dom = document.querySelector(".product_s")

let carts_products_menu = document.querySelector(".carts_products")
let carts_products_div_Dom = document.querySelector(".carts_products div")

let shopping_cart_icon = document.querySelector(".shopping_cart");
let badge_Dom = document.querySelector(".badge")

let product_obj = [

    {
        id_obj: 1,
        title_obj: "headphone item",
        size_obj: "large",
        imageURL_obj: "images/01.jpg",
    },

    {
        id_obj: 2,
        title_obj: "lap item",
        size_obj: "small",
        imageURL_obj: "images/02.jpg",
    },

    {
        id_obj: 3,
        title_obj: "watch item",
        size_obj: "medium",
        imageURL_obj: "images/03.jpg",
    },

    {
        id_obj: 4,
        title_obj: "glasses item",
        size_obj: "large",
        imageURL_obj: "images/04.jpeg",
    }

];

shopping_cart_icon.addEventListener("click", open_cart_menu)

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

function addToCart(id_item) {

    if (localStorage.getItem("username_set")) {
        console.log("add to cart");
    } else {
        window.location = "login.html"
    }

    let choosen_item = product_obj.find((find_item) => find_item.id_obj === id_item);
    carts_products_div_Dom.innerHTML += `<p>${choosen_item.title_obj}</p>`

    let cart_length_P = document.querySelectorAll(".carts_products div p")
    console.log(cart_length_P)

    badge_Dom.style.display = "block"
    badge_Dom.innerHTML = cart_length_P.length
}

function open_cart_menu() {

    if (carts_products_div_Dom.innerHTML != "") {

        if (carts_products_menu.style.display == "block") {
            carts_products_menu.style.display = "none"
        } else {
            carts_products_menu.style.display = "block"
        }
    }

}
