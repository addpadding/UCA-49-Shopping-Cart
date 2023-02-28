// register user
console.log("register")

/*
=
=
=
=
=
============================ (01) ============================*/

{
    // let username_01 = document.querySelector("#username");
    // let email_01 = document.querySelector("#email");
    // let password_01 = document.querySelector("#password");

    // let register_btn_01 = document.querySelector("#sign_up");

    // register_btn_01.addEventListener("click", function (e) {

    //     e.preventDefault();

    //     if (username_01.value === "" || email_01.value === "" || password_01.value === "") {
    //         alert("please Fill Data")

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
    // let username_02 = document.querySelector("#username");
    // let email_02 = document.querySelector("#email");
    // let password_02 = document.querySelector("#password");

    // let register_btn_02 = document.querySelector("#sign_up");

    // register_btn_02.addEventListener("click", function (e) {

    //     e.preventDefault();

    //     if (username_02.value === "" || email_02.value === "" || password_02.value === "") {
    //         alert("please Fill Data")

    //     } else {
    //         localStorage.setItem("username_set", username_02.value)
    //         localStorage.setItem("email_set", email_02.value)
    //         localStorage.setItem("password_set", password_02.value)
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
    // let username_03 = document.querySelector("#username");
    // let email_03 = document.querySelector("#email");
    // let password_03 = document.querySelector("#password");

    // let register_btn_03 = document.querySelector("#sign_up");

    // register_btn_03.addEventListener("click", function (e) {

    //     e.preventDefault();

    //     if (username_03.value === "" || email_03.value === "" || password_03.value === "") {
    //         alert("please Fill Data")

    //     } else {
    //         localStorage.setItem("username_set", username_03.value)
    //         localStorage.setItem("email_set", email_03.value)
    //         localStorage.setItem("password_set", password_03.value)

    //         setTimeout(() => {
    //             window.location = "index.html"
    //         }, 1500);
    //     }

    // })


    // __________ (03) __________
}

/*
=
=
=
=
=
============================ (04) ============================*/

let username_04 = document.querySelector("#username");
let email_04 = document.querySelector("#email");
let password_04 = document.querySelector("#password");

let register_btn_04 = document.querySelector("#sign_up");




register_btn_04.addEventListener("click", register);

function register(e) {

    e.preventDefault();

    if (username_04.value === "" || email_04.value === "" || password_04.value === "") {
        alert("please Fill Data")

    } else {
        localStorage.setItem("username_set", username_04.value)
        localStorage.setItem("email_set", email_04.value)
        localStorage.setItem("password_set", password_04.value)

        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
}


// __________ (04) __________
