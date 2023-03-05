// MY__product
console.log("MY__product");


// localStorage
let products_Storage = JSON.parse(localStorage.getItem("products_Data_set") || products_Data_obj)

// filter
let MY__product = products_Storage.filter(item => item.isMe_obj === "Y")
console.log("MY__product update", MY__product)


// draw_My_product
function draw_My_product(all_product = []) {

    if (JSON.parse(localStorage.getItem("productCart_set")).length === 0) {
        no_products_Dom.innerHTML = "no item"
    }

    let product_item =
        JSON.parse(localStorage.getItem("productCart_set")) || all_product

    let products_ui = product_item.map((item) => {
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
