let email_text = document.getElementById("email_txt")
let email_input = document.getElementById("email_input")
let password_txt = document.getElementById("password_txt")
let password_input = document.getElementById("password_input")

function TransitEmail(){
    email_text.style.bottom = "30px"
    email_text.style.fontSize = "10px"
}

function resetStylesEmail() {
    if (email_input.value.trim() === "") {
        email_text.style.bottom = "";
        email_text.style.fontSize = "";
    }
}

email_input.addEventListener("focus",()=>{
    TransitEmail();
})

email_input.addEventListener("blur", () => {
    resetStylesEmail();
});

function TransitPassword(){
    password_txt.style.bottom = "30px"
    password_txt.style.fontSize = "10px"
}

function resetStylesPassword() {
    if (password_input.value.trim() === "") {
        password_txt.style.bottom = "";
        password_txt.style.fontSize = "";
    }
}

password_input.addEventListener("focus",()=>{
    TransitPassword();
})

password_input.addEventListener("blur", () => {
    resetStylesPassword();
});



