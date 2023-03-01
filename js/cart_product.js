// Home
console.log("cart_product")


let product_in_cart = localStorage.getItem("productCart_set")
let products_Dom_2 = document.querySelector(".product_s")


if (product_in_cart) {
    let item_s = JSON.parse(product_in_cart);
    draw_cart_ui(item_s)
}



function draw_cart_ui(product_obj_item) {
    let products_ui = product_obj_item.map((item) => {
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
            <button class="add_to_cart" onclick="remove_item_from_Cart(${item.id_obj})" >Remove from Cart</button>
        </div>
    </div>

        `
    });

    products_Dom_2.innerHTML = products_ui;
}


function remove_item_from_Cart(id_item) {
    if (product_in_cart) {
        let item_s = JSON.parse(product_in_cart);

        item_s.filter((item) => item.id_obj !== id_item)

        // item_s.filter(function (item) {
        //     item.id_obj !== id_item
        // })

        localStorage.setItem("productCart_set", JSON.stringify(item_s))
    }
}