// register user
console.log("register")



let username_register = document.querySelector("#username");
let email_register = document.querySelector("#email");
let password_register = document.querySelector("#password");

let register_btn_04 = document.querySelector("#sign_up");




register_btn_04.addEventListener("click", register);

function register(e) {

    e.preventDefault();

    if (username_register.value === "" || email_register.value === "" || password_register.value === "") {
        alert("please Fill Data")

    } else {
        localStorage.setItem("username_set", username_register.value)
        localStorage.setItem("email_set", email_register.value)
        localStorage.setItem("password_set", password_register.value)

        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
}

