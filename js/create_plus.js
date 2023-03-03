// create_plus
console.log("create_plus");

// variables
let create_Name = document.getElementById("create_product_name");
let create_Desc = document.getElementById("create_product_desc");
let create_Siza_Select = document.getElementById("create_product_size_select");
let create_Form = document.getElementById("create_product_form");

let products_size_value;

// Events
create_Siza_Select.addEventListener("change", get_product_size_value)
create_Form.addEventListener("submit", Craete_Product_Fun)

// Functions
function get_product_size_value(e) {
    products_size_value = e.target.value;
}

function Craete_Product_Fun(e) {
    e.preventDefault();

    let all_product_storage = JSON.parse(localStorage.getItem("product_obj_set"))
    let name_value = create_Name.value;
    let desc_value = create_Desc.value;

    let Create_Obj = {

        id_Create: all_product_storage.length + 1,
        qty_Create: 1,
        size_Create: products_size_value,
        title_Create: name_value,

    }

}
