// Home
console.log("Home");

// define product
let products_Dom = document.querySelector(".product_s");

let carts_products_menu = document.querySelector(".carts_products");
let carts_products_div_Dom = document.querySelector(".carts_products div");

let shopping_cart_icon = document.querySelector(".shopping_cart");
let badge_Dom = document.querySelector(".badge");

let product_Data_B = product_obj;

// open cart menu
shopping_cart_icon.addEventListener("click", open_cart_menu);

// Display products
function draw_product_ui(product_Data_B = []) {
    let products_ui = product_Data_B.map((item_map) => {

        console.log("eee", item_map)

        return `
    <div class="product_item">
        <img class="product_item_img" src="${item_map.imageURL_obj}" alt="">

        <div class="product_item_desc">
            <a onclick="save_item_data(${item_map.id_obj})">${item_map.title_obj}</a>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <span> size : ${item_map.size_obj} </span>
        </div>

        <div class="product_item_actions">
            <button class="add_to_cart" onclick="addToCart(${item_map.id_obj})" >Add to Cart</button>
            <i class="favorite far fa-heart" style="color: ${item_map.liked == true ? "red" : ""}" onclick="Add_To_Favorite(${item_map.id_obj})" ></i>
        </div>
    </div>

        `;
    });

    products_Dom.innerHTML = products_ui.join("");
}
// draw_product_ui()
draw_product_ui(JSON.parse(localStorage.getItem("product_obj_set")) || product_Data_B);

// check if items in localStoreage
let add_item = JSON.parse(localStorage.getItem("productCart_set"))
    ? JSON.parse(localStorage.getItem("productCart_set"))
    : [];

if (add_item) {
    add_item.map((item) => {
        carts_products_div_Dom.innerHTML += `<p>${item.title_obj} ${item.qty_obj} </p>`;
    });

    badge_Dom.style.display = "block";
    badge_Dom.innerHTML += add_item.length;
}


// add to cart
// let all_item = [];
// add to cart
function addToCart(id_item) {
    if (localStorage.getItem("username_set")) {
        let choosen_item = product_Data_B.find(
            (find_item) => find_item.id_obj === id_item
        );

        let item_m = all_item.find((i) => i.id_obj === choosen_item.id_obj);

        if (item_m) {
            choosen_item.qty_obj += 1;
        } else {
            all_item.push(choosen_item);
        }

        carts_products_div_Dom.innerHTML = "";

        all_item.forEach((item_forEach) => {
            carts_products_div_Dom.innerHTML += `<p>${item_forEach.title_obj} ${item_forEach.qty_obj} </p>`;
        });

        add_item = [...add_item, choosen_item];

        let unique_Products = Get_Unique_Array(add_item, "id_obj");

        localStorage.setItem("productCart_set", JSON.stringify(unique_Products));

        let cart_length_P = document.querySelectorAll(".carts_products div p");

        badge_Dom.style.display = "block";
        badge_Dom.innerHTML = cart_length_P.length;
    } else {
        window.location = "login.html";
    }
}

function Get_Unique_Array(arr_item, filter_Type_item) {
    let unique = arr_item
        .map((item_map_1) => item_map_1[filter_Type_item])
        .map((item_map_2, i_index, final_array) => final_array.indexOf(item_map_2) === i_index && i_index)
        .filter((item_filter) => arr_item[item_filter])
        .map((item_map_3) => arr_item[item_map_3]);

    return unique;
}

// open cart menu
function open_cart_menu() {
    if (carts_products_div_Dom.innerHTML != "") {
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
    search(e.target.value, JSON.parse(localStorage.getItem("product_obj_set")));

    if (e.target.value.trim() === "") {
        draw_product_ui(JSON.parse(localStorage.getItem("product_obj_set")));
    }
});

function search(title_item, myArray) {
    let arr = myArray.filter((item) => item.title_obj.indexOf(title_item) !== -1);
    draw_product_ui(arr);
}

// add to Favorite + check if items in localStoreage
let Favorite_item_s = JSON.parse(localStorage.getItem("product_Favorite_set"))
    ? JSON.parse(localStorage.getItem("product_Favorite_set"))
    : [];

// add to Favorite
function Add_To_Favorite(id_item) {

    if (localStorage.getItem("username_set")) {

        let choosen_item = product_Data_B.find(
            (find_item) => find_item.id_obj === id_item
        );

        choosen_item.liked = true;

        Favorite_item_s = [...Favorite_item_s, choosen_item];

        let unique_Products = Get_Unique_Array(Favorite_item_s, "id_obj");

        localStorage.setItem("product_Favorite_set", JSON.stringify(unique_Products));

        product_Data_B.map((item_map) => {

            if (item_map.id_obj === choosen_item.id_obj) {
                item_map.liked = true
            }

        })

        localStorage.setItem("product_obj_set", JSON.stringify(product_Data_B))

        draw_product_ui(product_Data_B)

    } else {
        window.location = "login.html";
    }
}