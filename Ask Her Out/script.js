let yes_btn = document.getElementById("yes");
let no_btn = document.getElementById("no");
let heading = document.getElementById("heading")
let image = document.querySelector("img")
let buttons = document.getElementById("buttons")

let randNum = (num) => {
   num = Math.ceil(180+Math.random()*120)
   return num
} 

function moveNoButton(){
    no_btn.style.position = "absolute"
    no_btn.style.bottom = `${randNum()*1.3}px`
    no_btn.style.left = `${randNum()*1.5}px`
    no_btn.style.right = `${randNum()}px`
    no_btn.style.top = `-${randNum()*1.3}px`
}

no_btn.addEventListener("click", () => {
    moveNoButton();
});

yes_btn.addEventListener("click", ()=>{
    heading.innerText = "Yaayyyyyyyy!!!!!!!!!"
    image.setAttribute("src","assets/love-you-my.gif")
    image.style.width = "300px"
    document.body.style.gap = "20px"
    buttons.remove()
    console.log(buttons)
})
