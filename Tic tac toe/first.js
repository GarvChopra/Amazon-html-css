let boxes= document.querySelectorAll(".box");
let resetbt =document.querySelector("#resetbtn");
let newgamebut = document.querySelector("#newbut");
let msgcontainer = document.querySelector(".msgcont");
let msg =document.querySelector("#msg");
let count=0;

let turno =true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8], 
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame =() => {
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");    

}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("click hogya yay");
        if(turno) {
            box.innerText ="O";
            turno =false ;
        } else {
            box.innerText ="X";
            turno=true ;  
        }
        box.disabled=true;
        count++;

        let iswin=checkwinner();

        if (count===9 && !iswin){
            gamedraw()
        }

    });
});
const gamedraw =() => {
    msg.innerText = `DRAW!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const disableboxes =() =>{
    for(let box of boxes) {
        box.disabled=true;
    }
}
const enableboxes =() =>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) => {
    msg.innerText=`congratulations ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes()

}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val!="" && pos3val !="") {
            if(pos1val ===pos2val && pos2val ===pos3val ){
                console.log("winner",pos1val);
                showwinner(pos1val);
                return true;
            }
        }

    }

}
newgamebut.addEventListener("click",resetgame);
resetbt.addEventListener("click",resetgame);
