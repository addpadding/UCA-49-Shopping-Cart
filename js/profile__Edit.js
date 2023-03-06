// profile__Edit
console.log("profile__Edit")

// Get Data From local Storage
let username_Storage2 = localStorage.getItem("username_set");
let email_Storage2 = localStorage.getItem("email_set");

// variables
let username_Edit_profile = document.getElementById("chanage_Name")
let email_Edit_profile = document.getElementById("chanage_Email")
let form_Edit_profile = document.getElementById("profile__Edit_form")

// setting value of input
username_Edit_profile.value = username_Storage2;
email_Edit_profile.value = email_Storage2;

// Events
form_Edit_profile.addEventListener("submit", Data_Edit_profile)

function Data_Edit_profile(e) {
    e.preventDefault();

    localStorage.setItem("username_set", username_Edit_profile.value)
    localStorage.setItem("email_set", email_Edit_profile.value)

    setTimeout(() => {
        window.location = "profile.html"
    }, 500);
}