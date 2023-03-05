// MY__product
console.log("MY__product");

// variables
let products_Dom_2 = document.querySelector(".product_s")
let no_products_Dom = document.querySelector(".no_products")

// Display products
function draw_product_ui(products_item = []) {

    // 002
    let MY__product = products_item.filter(item => item.isMe_obj === "Y")

    // 002
    if (MY__product) {

        // 003
        let products_ui = MY__product.map((item_map) => {

            // 004
            return `
            <div class="product_item" style="border: ${item_map.isMe_obj === "Y" ? "2px solid #52057b" : ""} ">

                <img class="product_item_img" src="${item_map.imageURL_obj}" alt="">

                <div class="product_item_desc">
                        <a onclick="save_item_data(${item_map.id_obj})">${item_map.title_obj
                }</a>
                        <p>${item_map.desc_obj}</p>
                        <span> size : ${item_map.size_obj} </span>

                    <button class='edit_product' onclick=" edit_product(${item_map.id_obj})"> Edit Product </button>
                    <br>
                    <button class='edit_product' onclick=" ___delete(${item_map.id_obj})"> ___delete Product </button>
                </div >

            </div >

            `;
        });

        products_Dom_2.innerHTML = products_ui.join("");

    } else {
        no_products_Dom.innerHTML = "No Product !!"
    }

}
draw_product_ui(
    JSON.parse(localStorage.getItem("products_Data_set")) || products_Data_obj
);


// edit product
function edit_product(id_item) {
    localStorage.setItem("Edit_set", id_item)

    window.location = "edit_products.html"
}

// Delete product
function Delete_fun() { }