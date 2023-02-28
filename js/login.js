// login
console.log("login")

/*
=
=
=
=
=
============================ (01) ============================*/

{
    // let username_login_01 = document.querySelector("#username");
    // let password_login_01 = document.querySelector("#password");
    // let btn_login_01 = document.querySelector("#sign_in");

    // let get_user_01 = localStorage.getItem("username_set")
    // let get_password_01 = localStorage.getItem("password_set")

    // btn_login_01.addEventListener("click", function () {

    //     if (username_login_01.value === "" || password_login_01.value === "") {
    //         alert("please Fill Data")

    //     } else {

    //     }

    // })


    // __________ (01) __________
}

/*
=
=
=
=
=
============================ (02) ============================*/

{
    // let username_login_02 = document.querySelector("#username");
    // let password_login_02 = document.querySelector("#password");
    // let btn_login_02 = document.querySelector("#sign_in");

    // let get_user_02 = localStorage.getItem("username_set")
    // let get_password_02 = localStorage.getItem("password_set")

    // btn_login_02.addEventListener("click", function (e) {

    //     e.preventDefault();

    //     if (username_login_02.value === "" || password_login_02.value === "") {
    //         alert("please Fill Data")

    //     } else {

    //         if ((get_user_02 && get_user_02.trim() === "hamza") && (get_password_02 && get_password_02 === "123")) {
    //             console.log("test");
    //         } else {
    //             console.log("username or password is wrong ??");
    //         }

    //     }

    // })


    // __________ (02) __________
}

/*
=
=
=
=
=
============================ (03) ============================*/

{
    // let username_login_03 = document.querySelector("#username");
    // let password_login_03 = document.querySelector("#password");
    // let btn_login_03 = document.querySelector("#sign_in");

    // let get_user_03 = localStorage.getItem("username_set")
    // let get_password_03 = localStorage.getItem("password_set")

    // btn_login_03.addEventListener("click", function (e) {

    //     e.preventDefault();

    //     if (username_login_03.value === "" || password_login_03.value === "") {
    //         alert("please Fill Data")

    //     } else {

    //         if (get_user_03 &&
    //             get_user_03.trim() === "hamza" &&
    //             get_password_03 &&
    //             get_password_03 === "123"
    //         ) {

    //             setTimeout(() => {
    //                 window.location = "index.html"
    //             }, 1500);

    //         } else {
    //             console.log("username or password is wrong ??");
    //         }

    //     }

    // })
}

/*
=
=
=
=
=
============================ (04) ============================*/

let username_login_04 = document.querySelector("#username");
let password_login_04 = document.querySelector("#password");
let btn_login_04 = document.querySelector("#sign_in");


let get_user_04 = localStorage.getItem("username_set")
let get_password_04 = localStorage.getItem("password_set")

btn_login_04.addEventListener("click", login)

function login(e) {

    e.preventDefault();

    if (username_login_04.value === "" || password_login_04.value === "") {
        alert("please Fill Data")

    } else {

        if (get_user_04 &&
            get_user_04.trim() === username_login_04.value.trim() &&
            get_password_04 &&
            get_password_04 === password_login_04.value
        ) {


            setTimeout(() => {
                window.location = "index.html"
            }, 1500);

        } else {
            console.log("username or password is wrong ??");
        }

    }

}


// __________ (04) __________