// edit_products
console.log("edit_products");


// variables
let products_Storage = JSON.parse(localStorage.getItem("products_Data_set") || products_Data_obj)
let id_pro_Storage = JSON.parse(localStorage.getItem("Edit_set"))

// find
let get_product = products_Storage.find(item => item.id_obj === id_pro_Storage)
console.log("before update", get_product)



let product_Name = document.getElementById("create_product_name");
let product_Desc = document.getElementById("create_product_desc");
let product_Siza_Select = document.getElementById("create_product_size_select");
let update_Form = document.getElementById("update_product_form");
let input_File = document.getElementById("upload_img_file");
let products_size_value;
let products_image;

product_Name.value = get_product.title_obj;
product_Desc.value = get_product.desc_obj;

product_Siza_Select.value = get_product.size_obj;
products_image = get_product.imageURL_obj;

// Events
product_Siza_Select.addEventListener("change", get_product_size_value);
update_Form.addEventListener("submit", update_Product_Fun);
input_File.addEventListener("change", upload_image);

// Functions
function get_product_size_value(e) {
    products_size_value = e.target.value;
}

// update function
function update_Product_Fun(e) {
    e.preventDefault();

    get_product.title_obj = product_Name.value
    get_product.desc_obj = product_Desc.value

    get_product.size_obj = products_size_value
    get_product.imageURL_obj = products_image

    console.log("after update", get_product)


    localStorage.setItem("products_Data_set", JSON.stringify(products_Storage));

    setTimeout(() => {
        window.location = "index.html";
    }, 500);
}

// upload_image
function upload_image() {
    let file_e = this.files[0];

    let type_s = ["image/jpeg", "image/png"]

    if (type_s.indexOf(file_e.type) == -1) {
        alert("type not support")
        return;
    }

    if (file_e.size > 2 * 1024 * 1024) {
        alert("img not Exced 2MG")
        return;
    }

    get_img_Base_64(file_e);
}



function get_img_Base_64(file_item) {
    let reader = new FileReader()

    reader.readAsDataURL(file_item)

    reader.onload = function () {
        products_image = reader.result
    };

    reader.onerror = function () {
        alert("Error !!");
    };

}