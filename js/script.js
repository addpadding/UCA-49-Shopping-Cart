// Home
console.log("Home")


let user_info = document.querySelector("#user_ul_info")
let user_hamza = document.querySelector("#user_hamza")
let link_s = document.querySelector("#link_s")
let logout_Btn = document.querySelector("#logout")



let username_check = localStorage.getItem("username_set")

if (username_check) {
    link_s.remove()
    user_info.style.display = "flex"

    user_hamza.innerHTML = username_check
}

logout_Btn.addEventListener("click", function () {
    localStorage.clear();

    setTimeout(() => {
        window.location = "register.html"
    }, 1500);

})

// define product


let product_s = [

    {
        id_obj: 1,
        title_obj: "headphone item",
        size_obj: "large",
        imageURL_obj: "images/01.jpg",
    },

    {
        id_obj: 2,
        title_obj: "lap item",
        size_obj: "small",
        imageURL_obj: "images/02.jpg",
    },

    {
        id_obj: 3,
        title_obj: "watch item",
        size_obj: "medium",
        imageURL_obj: "images/03.jpg",
    },

    {
        id_obj: 4,
        title_obj: "glasses item",
        size_obj: "large",
        imageURL_obj: "images/04.jpeg",
    }

]

function draw_product_ui() {
    let products_ui = product_s.map((item) => {
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
            <button class="add_to_cart">Add to Cart</button>
            <i class="favorite far fa-heart"></i>
        </div>
    </div>

        `
    });
}