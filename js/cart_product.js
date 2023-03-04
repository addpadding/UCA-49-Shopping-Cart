// Home
console.log("cart_product")


let products_Dom_2 = document.querySelector(".product_s")
let no_products_Dom = document.querySelector(".no_products")


function draw_cart_ui(all_product = []) {

    if (JSON.parse(localStorage.getItem("productCart_set")).length === 0) {
        no_products_Dom.innerHTML = "no item"
    }

    let products_Data_obj_item =
        JSON.parse(localStorage.getItem("productCart_set")) || all_product

    let products_ui = products_Data_obj_item.map((item) => {
        return `
    <div class="product_item">
        <img class="product_item_img" src="${item.imageURL_obj}" alt="">

        <div class="product_item_desc">
            <h2>${item.title_obj}</h2>
            <p>${item.desc_obj}</p>
            <span> size : ${item.size_obj} </span> <br>
            <span> Quntatit : ${item.qty_obj} </span>
        </div>

        <div class="product_item_actions">
            <button class="add_to_cart" onclick="remove_item_from_Cart(${item.id_obj})" >Remove from Cart</button>
        </div>
    </div>

        `
    });

    products_Dom_2.innerHTML = products_ui.join("");
}

draw_cart_ui()


function remove_item_from_Cart(id_item) {

    let product_in_cart = localStorage.getItem("productCart_set")

    if (product_in_cart) {
        let item_s = JSON.parse(product_in_cart);

        let filter_item = item_s.filter((item) => item.id_obj !== id_item)

        localStorage.setItem("productCart_set", JSON.stringify(filter_item))

        draw_cart_ui(filter_item)

    }
}