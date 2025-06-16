let userscore=0;
letcompscore =0; 

const choices =  document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const gencompchoice = () => {
    const options =["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];}

const drawgame= () => {
    console.log("game was draw");
    msg.innerText="Game was a Draw ,Play again"
    msg.style.backgroundColor="#FFDB58";

}
    


const playgame =(userchoice) => {
    console.log("userchoice=",userchoice);
    const compchoice =gencompchoice();
    console.log("comp choice =",compchoice);

     if (userchoice === compchoice) {
        drawgame();
    } else if (
        (userchoice === "rock" && compchoice === "scissors") ||
        (userchoice === "paper" && compchoice === "rock") ||
        (userchoice === "scissors" && compchoice === "paper")
    ) {
        console.log("User wins");
        msg.innerText=`You win  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore ++ ;
        userscorepara.innerText =userscore;



    } else {
        
        console.log("Computer wins");
        msg.innerText=`You lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore ++ ;
        compscorepara.innerText =userscore;

    }
    }
choices.forEach((choice)  => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice =choice.getAttribute("id");
        playgame(userchoice);

    } );
});
