let productsMain2 = JSON.parse(localStorage.getItem("products_Data_obj_set"))

let products_id = localStorage.getItem("product_Id_set")

let Details_item_Dom = document.querySelector(".item_Details")

let product_Details = productsMain2.find((item) => item.id_obj == products_id)


Details_item_Dom.innerHTML = `
<img src="${product_Details.imageURL_obj}" alt="">
<h2> ${product_Details.title_obj} </h2>
<p> ${product_Details.desc_obj} </p>
<span> size : ${product_Details.size_obj} </span> <br>
<span> Quntatit : ${product_Details.qty_obj} </span>
`
