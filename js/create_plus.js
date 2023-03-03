// create_plus
console.log("create_plus");

// variables
let create_Name = document.getElementById("create_product_name");
let create_Desc = document.getElementById("create_product_desc");
let create_Siza_Select = document.getElementById("create_product_size_select");
let create_Form = document.getElementById("create_product_form");
let input_File = document.getElementById("upload_img_file");

let products_size_value;
let products_image;

// Events
create_Siza_Select.addEventListener("change", get_product_size_value);
create_Form.addEventListener("submit", Craete_Product_Fun);
input_File.addEventListener("change", upload_image);

// Functions
function get_product_size_value(e) {
    products_size_value = e.target.value;
}

function Craete_Product_Fun(e) {
    e.preventDefault();

    let all_product_storage = JSON.parse(localStorage.getItem("product_obj_set")) || product_obj;
    let name_value = create_Name.value;
    let desc_value = create_Desc.value;

    if (name_value && desc_value) {

        let Create_Obj = {
            id_Create: all_product_storage ? all_product_storage.length + 1 : 1,

            qty_Create: 1,

            imageURL_Create: products_image,

            size_Create: products_size_value,

            title_Create: name_value,

            desc_Create: desc_value,
        };

        let new_product_Storage = all_product_storage ? [...all_product_storage, Create_Obj] : [Create_Obj];
        localStorage.setItem("product_obj_set", JSON.stringify(new_product_Storage));

        create_Name.value = "";
        create_Desc.value = "";
        create_Siza_Select.value = "";

    } else {
        alert("Enter Data ..")
    }

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
    // products_image = URL.createObjectURL(file_e)
}

function get_img_Base_64(file_item) {
    let reader = new FileReader()

    reader.readAsDataURL(file_item)

    reader.onload = function () {
        // console.log(reader.result);
        products_image = reader.result
    };

    reader.onerror = function () {
        alert("Error !!");
    };

}