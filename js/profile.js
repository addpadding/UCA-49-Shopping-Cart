// profile
console.log("profile")

// Get Data From local Storage
let username_Storage = localStorage.getItem("username_set");
let email_Storage = localStorage.getItem("email_set");
let products_Storage = JSON.parse(localStorage.getItem("products_Data_set") || products_Data_obj);
let MY__product = products_Storage.filter(item => item.isMe_obj === "Y");

// variables
let username_profile_DOM = document.getElementById("username")
let email_profile_DOM = document.getElementById("email")

username_profile_DOM.innerHTML = username_Storage
email_profile_DOM.innerHTML = email_Storage