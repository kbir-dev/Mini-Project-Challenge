let weight = document.getElementById("weight")
let height = document.getElementById("height")
let button = document.getElementById("button")
let content = document.getElementById("content")
let op_appended = false;

function calculate(){
    let w_value = weight.value;
    let h_value = height.value;
    if(w_value === ""||h_value === ""){
        return false;
    }
    let bmi = (w_value*10000)/(h_value*h_value);
    return bmi
}

button.addEventListener("click",()=>{
    if(calculate()==false){
        alert("Enter Values First");
    }else{
        if(!op_appended){
            let output = document.createElement("div")
            output.classList.add("output")
            output.style.fontSize = "30px"
            content.appendChild(output)
            output.innerHTML = `Your BMI is : <b>${calculate()}</b>`;
            let output_2 = document.createElement("div")
            output_2.classList.add("output-2")
            content.appendChild(output_2)
            if(calculate()<18.5){
                output_2.innerHTML = `It is considered to be <b>Underweight</b>`
            }else if(calculate()>=18.5 && calculate()<= 24.9){
                output_2.innerHTML = `It is considered to be <b>Normal Weight</b>`
            }else if(calculate()>=25 && calculate()<= 29.9){
                output_2.innerHTML = `It is considered to be <b>Over Weight</b>`
            }else{
                output_2.innerHTML = `It is considered to be <b>Obese</b>`
            }
            op_appended = true;
        }
    }
})

