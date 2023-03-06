// profile__Edit
console.log("profile__Edit")

// Get Data From local Storage
let username_Storage2 = localStorage.getItem("username_set");
let email_Storage2 = localStorage.getItem("email_set");

// variables
let username_Edit_profile = document.getElementById("username")
let email_Edit_profile = document.getElementById("email")
let form_Edit_profile = document.getElementById("profile__Edit_form")

// setting value of input
username_Edit_profile.value = username_Storage2;
email_Edit_profile.value = email_Storage2;

// Events
form_Edit_profile.addEventListener("submit", Data_Edit_profile)

function Data_Edit_profile(item) { }