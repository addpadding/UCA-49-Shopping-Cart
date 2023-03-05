// edit_products
console.log("edit_products");


// variables
let products_Storage = JSON.parse(localStorage.getItem("products_Data_set") || products_Data_obj)
let id_pro_Storage = JSON.parse(localStorage.getItem("EditProduct_set"))

let get_product = products_Storage.find(item => item.id_obj === id_pro_Storage)



let product_Name = document.getElementById("create_product_name");
let product_Desc = document.getElementById("create_product_desc");
let product_Siza_Select = document.getElementById("create_product_size_select");
let update_Form = document.getElementById("update_product_form");
let input_File = document.getElementById("upload_img_file");
let products_size_value;
let products_image;

product_Name.value = get_product.title_obj

// // Events
// product_Siza_Select.addEventListener("change", get_product_size_value);
// create_Form.addEventListener("submit", Craete_Product_Fun);
// input_File.addEventListener("change", upload_image);

// // Functions
// function get_product_size_value(e) {
//     products_size_value = e.target.value;
// }

// function Craete_Product_Fun(e) {
//     e.preventDefault();

//     let all_product_storage = JSON.parse(localStorage.getItem("products_Data_set")) || products_Data_obj;
//     let name_value = product_Name.value;
//     let desc_value = product_Desc.value;

//     if (name_value && desc_value) {

//         let Create_Obj = {

//             id_obj: all_product_storage ? all_product_storage.length + 1 : 1,

//             title_obj: name_value,

//             desc_obj: desc_value,

//             size_obj: products_size_value,

//             imageURL_obj: products_image,

//             qty_obj: 1,

//             isMe_obj: "Y",
//         };

//         let new_product_Storage = all_product_storage ? [...all_product_storage, Create_Obj] : [Create_Obj];
//         localStorage.setItem("products_Data_set", JSON.stringify(new_product_Storage));

//         product_Name.value = "";
//         product_Desc.value = "";
//         product_Siza_Select.value = "";

//         setTimeout(() => {
//             window.location = "index.html"
//         }, 500);

//     } else {
//         alert("Enter Data ..")
//     }

// }

// // upload_image
// function upload_image() {
//     let file_e = this.files[0];

//     let type_s = ["image/jpeg", "image/png"]

//     if (type_s.indexOf(file_e.type) == -1) {
//         alert("type not support")
//         return;
//     }

//     if (file_e.size > 2 * 1024 * 1024) {
//         alert("img not Exced 2MG")
//         return;
//     }

//     get_img_Base_64(file_e);
// }

// function get_img_Base_64(file_item) {
//     let reader = new FileReader()

//     reader.readAsDataURL(file_item)

//     reader.onload = function () {
//         products_image = reader.result
//     };

//     reader.onerror = function () {
//         alert("Error !!");
//     };

// }