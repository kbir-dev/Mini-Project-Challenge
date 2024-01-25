let buttons = document.getElementsByClassName("button");
console.log(buttons);
let otrue = true;

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (otrue === true) {
      button.innerText = "O";
      otrue = false;
    } else {
      button.innerText = "X";
      otrue = true;
    }
    button.disabled = true;
    checkWinning();
  });
}

let finished = true;
function checkWinning() {
  let possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function stop(){
    for (const button of buttons) {
        button.disabled = true;
    }
  }
  let refresh = document.createElement("Button");
  refresh.classList.add("refresh")
  refresh.innerText = "Reset the Game"

  function appendWinner(val1){
    let winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerText = `${val1} is the Winner HeheheXD`;
    document.body.appendChild(winner);
    document.body.appendChild(refresh)
  }

  for (const winning of possibilities) {
    console.log(winning[0], winning[1], winning[2]);
    let pos1val = buttons[winning[0]].innerText;
    let pos2val = buttons[winning[1]].innerText;
    let pos3val = buttons[winning[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        if(finished == true){
            appendWinner(pos1val);
            finished = false;
        }
        stop();
        refresh.addEventListener("click",()=>{
            location.reload("http://127.0.0.1:3000/index.html")
        })
      }
    }
  }
}


