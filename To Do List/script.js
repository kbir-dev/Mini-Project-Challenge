let task_entered = document.getElementById("task_entered");
let add_btn = document.getElementById("add-btn");
let list_elements = document.querySelector(".list_elements");
let listHeaderAdded = false;

function Work(){
    if(!listHeaderAdded){
        let h2 = document.createElement("h2")
        h2.innerText = "List : "
        list_elements.appendChild(h2)
        listHeaderAdded = true;
    }

    let listbox = document.createElement("div")
    listbox.classList.add("listbox")
    list_elements.appendChild(listbox)
    
    let span = document.createElement("span")
    span.innerText = `${task_entered.value}`
    listbox.append(span)

    let cancel_btn = document.createElement("button")
    let icon = document.createElement("i")
    icon.classList.add("fas", "fa-times");
    cancel_btn.appendChild(icon)
    listbox.appendChild(cancel_btn)

    cancel_btn.addEventListener("click",()=>{
        list_elements.removeChild(listbox)
    })
}

add_btn.addEventListener("click",()=>{
    let value = task_entered.value
    if(value === ""){
        alert("Enter Your Task Plz!");
    }else{
        Work()
        task_entered.value=""
    }
})

task_entered.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        Work()
        task_entered.value=""
    }
})