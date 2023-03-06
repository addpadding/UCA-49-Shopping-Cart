// lang__Dir
console.log("lang__Dir");




let get_lang = localStorage.getItem("lang_Dir_set")

if (get_lang) {

    if (get_lang === "rtl") {
        change_direction("rtl");
    } else {
        change_direction("ltr");
    }
}


// lang Dir

let en = document.getElementById("en_lang")
let ar = document.getElementById("ar_lang")

en.addEventListener("click", () => change_direction("ltr"))
ar.addEventListener("click", () => change_direction("rtl"))

function change_direction(item_dir) {
    document.documentElement.setAttribute("dir", item_dir)
    localStorage.setItem("lang_Dir_set", item_dir)
}