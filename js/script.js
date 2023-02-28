// Home
console.log("Home")

/*
=
=
=
=
=
============================ (01) ============================*/

{
    // let user_info_01 = document.querySelector("#user_ul_info")
    // let user_Dom_01 = document.querySelector("#user_li_a")
    // let link_s_01 = document.querySelector("#link_s")

    // if (localStorage.getItem("username_set")) {
    //     console.log("yes");

    //     link_s_01.remove()
    //     user_info_01.style.display = "block"
    //     user_Dom_01.innerHTML = localStorage.getItem("username_set")
    // }


    // __________ (01) __________
}

/*
=
=
=
=
=
============================ (02) ============================*/

let user_info_02 = document.querySelector("#user_ul_info")
let user_hamza_02 = document.querySelector("#user_hamza")
let link_s_02 = document.querySelector("#link_s")
let logout_Btn_02 = document.querySelector("#logout")



let username_check_02 = localStorage.getItem("username_set")

if (username_check_02) {
    link_s_02.remove()
    user_info_02.style.display = "flex"

    user_hamza_02.innerHTML = username_check_02
}

logout_Btn_02.addEventListener("click", function () {
    localStorage.clear();

    setTimeout(() => {
        window.location = "register.html"
    }, 1500);

})

// __________ (02) __________
