// Home
console.log("Home");

// define product
let products_Dom = document.querySelector(".product_s");

let carts_products_menu = document.querySelector(".carts_products");
let cartProductDivDom = document.querySelector(".carts_products div");

let shopping_cart_icon = document.querySelector(".shopping_cart");
let badgeDom = document.querySelector(".badge");

let products = product_obj;
// console.log("ppp", products)

// open cart menu
shopping_cart_icon.addEventListener("click", open_cart_menu);

// Display products
function draw_product_ui(products_item = []) {
    // console.log("in", products_item)

    let products_ui = products_item.map((item_map) => {
        // console.log("eee", item_map);

        return `
        <div class="product_item">
            <img class="product_item_img" src="${item_map.imageURL_obj}" alt="">

            <div class="product_item_desc">
                <a onclick="save_item_data(${item_map.id})">${item_map.title
            }</a>
                <p>${item_map.desc_obj}</p>
                <span> size : ${item_map.size_obj} </span>
            </div>

            <div class="product_item_actions">
                <button class="add_to_cart" onclick="addedToCart(${item_map.id
            })" >Add to Cart</button>
                <i class="favorite far fa-heart" style="color: ${item_map.liked == true ? "red" : ""
            }" onclick="Add_To_Favorite(${item_map.id})" ></i>
            </div>
        </div>

        `;
    });

    products_Dom.innerHTML = products_ui.join("");
}
// draw_product_ui()
draw_product_ui(JSON.parse(localStorage.getItem("products")) || products);

// check if items in localStoreage
let addedItem = JSON.parse(localStorage.getItem("productsInCart"))
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];

if (addedItem) {
    addedItem.map((item) => {
        cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty} </p>`;
    });

    badgeDom.style.display = "block";
    badgeDom.innerHTML += addedItem.length;
}

// ********************************************
// ********************************************
// ********************************************

// add to cart
function addedToCart(id) {
    console.log("addedToCart", addedToCart);

    if (localStorage.getItem("username")) {
        let ppp = JSON.parse(localStorage.getItem("products")) || products;

        let product = ppp.find((item) => item.id === id);

        let isProductInCart = addedItem.some((i) => i.id === product.id);

        if (isProductInCart) {
            addedItem = addedItem.map((p) => {
                if (p.id === product.id) p.qty += 1;
                return p;
            });
        } else {
            addedItem.push(product);
        }

        // UI
        cartProductDivDom.innerHTML = "";

        addedItem.forEach((item) => {
            cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty} </p>`;
            // cartProductDivDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
        });

        // save data
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));

        // Add counter of items
        let cartProductItems = document.querySelectorAll(".carts_products div p");

        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    } else {
        window.location = "login.html";
    }
}

// ********************************************
// ********************************************
// ********************************************

function Get_Unique_Array(arr_item, filter_Type_item) {
    let unique = arr_item
        .map((item_map_1) => item_map_1[filter_Type_item])
        .map(
            (item_map_2, i_index, final_array) =>
                final_array.indexOf(item_map_2) === i_index && i_index
        )
        .filter((item_filter) => arr_item[item_filter])
        .map((item_map_3) => arr_item[item_map_3]);

    return unique;
}

// open cart menu
function open_cart_menu() {
    if (cartProductDivDom.innerHTML != "") {
        if (carts_products_menu.style.display == "block") {
            carts_products_menu.style.display = "none";
        } else {
            carts_products_menu.style.display = "block";
        }
    }
}

function save_item_data(id_item) {
    localStorage.setItem("product_Id_set", id_item);

    window.location = "Details_Cart.html";
}

// search function
let input = document.querySelector("#search");

input.addEventListener("keyup", function (e) {
    search(e.target.value, JSON.parse(localStorage.getItem("products")));

    if (e.target.value.trim() === "") {
        draw_product_ui(JSON.parse(localStorage.getItem("products")));
    }
});

function search(title_item, myArray) {
    let arr = myArray.filter((item) => item.title.indexOf(title_item) !== -1);
    draw_product_ui(arr);
}

// add to Favorite + check if items in localStoreage
let Favorite_item_s = JSON.parse(localStorage.getItem("product_Favorite_set"))
    ? JSON.parse(localStorage.getItem("product_Favorite_set"))
    : [];

// add to Favorite
function Add_To_Favorite(id_item) {
    if (localStorage.getItem("username")) {
        let choosen_item = products.find((find_item) => find_item.id === id_item);

        choosen_item.liked = true;

        Favorite_item_s = [...Favorite_item_s, choosen_item];

        let unique_Products = Get_Unique_Array(Favorite_item_s, "id");

        localStorage.setItem(
            "product_Favorite_set",
            JSON.stringify(unique_Products)
        );

        products.map((item_map) => {
            if (item_map.id === choosen_item.id) {
                item_map.liked = true;
            }
        });

        localStorage.setItem("products", JSON.stringify(products));

        draw_product_ui(products);
    } else {
        window.location = "login.html";
    }
}
