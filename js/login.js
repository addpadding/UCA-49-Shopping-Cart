// login
console.log("login")


let username_login = document.querySelector("#username");
let password_login = document.querySelector("#password");
let login_btn = document.querySelector("#sign_in");


let get_user = localStorage.getItem("username_set")
let get_password = localStorage.getItem("password_set")

login_btn.addEventListener("click", login)

function login(e) {

    e.preventDefault();

    if (username_login.value === "" || password_login.value === "") {
        alert("please Fill Data")

    } else {

        if (get_user &&
            get_user.trim() === username_login.value.trim() &&
            get_password &&
            get_password === password_login.value
        ) {


            setTimeout(() => {
                window.location = "index.html"
            }, 1500);

        } else {
            console.log("username or password is wrong ??");
        }

    }

}

