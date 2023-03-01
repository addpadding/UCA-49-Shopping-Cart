// user
console.log("user")


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