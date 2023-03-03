// create_plus
console.log("create_plus");

// variables
let create_Name = document.getElementById("create_product_name");
let create_Desc = document.getElementById("create_product_desc");
let create_Siza_Select = document.getElementById("create_product_size");
let create_Form = document.getElementById("create_product_form");

let products_size_value;

// Events
create_Siza_Select.addEventListener("change", get_product_size_value)
create_Form.addEventListener("submit", Craete_Product_Fun)

// Functions
function get_product_size_value(e) {
    // console.log(e.target.value)

    products_size_value = e.target.value;
}

function Craete_Product_Fun(e) { }