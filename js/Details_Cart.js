let product_Data_B2 = JSON.parse(localStorage.getItem("product_obj_set"))

let products_id = localStorage.getItem("product_Id_set")

let Details_item_Dom = document.querySelector(".item_Details")

let product_Details = product_Data_B2.find((item) => item.id_obj == products_id)


Details_item_Dom.innerHTML = `
<img src="${product_Details.imageURL_obj}" alt="">
<h2> ${product_Details.title_obj} </h2>
<p> ${product_Details.desc_obj} </p>
<span> size : ${product_Details.size_obj} </span> <br>
<span> Quntatit : ${product_Details.qty_obj} </span>
`
