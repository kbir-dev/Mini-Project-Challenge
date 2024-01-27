let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let progressBar = document.getElementById("progress-bar-color");
let circle1 = document.querySelector(".circle-1");
let circle2 = document.querySelector(".circle-2");
let circle3 = document.querySelector(".circle-3");
let circle4 = document.querySelector(".circle-4");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let span1 = document.getElementById("sp1");
let span2 = document.getElementById("sp2");
let span3 = document.getElementById("sp3");
let span4 = document.getElementById("sp4");
let start = 0;

function progress(){
    if(start<108){
        start = start+27;
    }
    
    if(start>0){
        button1.style.backgroundColor = "rgb(0, 11, 128)";
    }
    if(start<=108){
    progressBar.style.width = `${start}%`;
    console.log(progressBar.style.width);
    }
    if(start>81){
        button2.style.backgroundColor = "gray";
    }
    console.log(start)
    borderCheck();
}

function borderCheck(){
    if(start==27){
        circle1.style.borderColor = "rgb(0, 11, 128";
        circle2.style.borderColor = "gray";
        circle3.style.borderColor = "gray";
        circle4.style.borderColor = "gray";
        img1.setAttribute("src","tick.svg")
        img2.setAttribute("src","cross.svg")
        img3.setAttribute("src","cross.svg")
        img4.setAttribute("src","cross.svg")
        span1.style.color = "black"
        span2.style.color = "aquamarine"
        span3.style.color = "aquamarine"
        span4.style.color = "aquamarine"
    }else if(start==54){
        circle1.style.borderColor = "rgb(0, 11, 128";
        circle2.style.borderColor = "rgb(0, 11, 128";
        circle3.style.borderColor = "gray";
        circle4.style.borderColor = "gray";
        img1.setAttribute("src","tick.svg")
        img2.setAttribute("src","tick.svg")
        img3.setAttribute("src","cross.svg")
        img4.setAttribute("src","cross.svg")
        span1.style.color = "black"
        span2.style.color = "black"
        span3.style.color = "aquamarine"
        span4.style.color = "aquamarine"
    }else if(start==81){
        circle1.style.borderColor = "rgb(0, 11, 128";
        circle2.style.borderColor = "rgb(0, 11, 128";
        circle3.style.borderColor = "rgb(0, 11, 128";
        circle4.style.borderColor = "gray";
        img1.setAttribute("src","tick.svg")
        img2.setAttribute("src","tick.svg")
        img3.setAttribute("src","tick.svg")
        img4.setAttribute("src","cross.svg")
        span1.style.color = "black"
        span2.style.color = "black"
        span3.style.color = "black"
        span4.style.color = "aquamarine"
    }else if(start==108){
        circle1.style.borderColor = "rgb(0, 11, 128";
        circle2.style.borderColor = "rgb(0, 11, 128";
        circle3.style.borderColor = "rgb(0, 11, 128";
        circle4.style.borderColor = "rgb(0, 11, 128";
        img1.setAttribute("src","tick.svg")
        img2.setAttribute("src","tick.svg")
        img3.setAttribute("src","tick.svg")
        img4.setAttribute("src","tick.svg")
        span1.style.color = "black"
        span2.style.color = "black"
        span3.style.color = "black"
        span4.style.color = "black"
    }else{
        circle1.style.borderColor = "gray";
        circle2.style.borderColor = "gray";
        circle3.style.borderColor = "gray";
        circle4.style.borderColor = "gray";
        img1.setAttribute("src","cross.svg")
        img2.setAttribute("src","cross.svg")
        img3.setAttribute("src","cross.svg")
        img4.setAttribute("src","cross.svg")
        span1.style.color = "aquamarine"
        span2.style.color = "aquamarine"
        span3.style.color = "aquamarine"
        span4.style.color = "aquamarine"
    }
}

function decrease(){
    if(start>0){
        start = start-27;
        progressBar.style.width = `${start}%`
    }
    if(start<100){
        button2.style.backgroundColor = "rgb(0, 11, 128)";
    }
    if(start<27){
        button1.style.backgroundColor = "gray";
    }
    console.log(start)
    borderCheck();
}

button1.addEventListener("click",()=>{
    decrease();
})


button2.addEventListener("click",()=>{
    progress();
})