// MY__product
console.log("MY__product");


// localStorage
let products_Storage = JSON.parse(localStorage.getItem("products_Data_set") || products_Data_obj)

// filter
let MY__product = products_Storage.filter(item => item.isMe_obj === "Y")
console.log("MY__product update", MY__product)
