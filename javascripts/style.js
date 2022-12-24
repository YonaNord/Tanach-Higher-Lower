import { restart } from "./game.js";
export var attemptHover = false;

addEventListener("mouseover", hoverOn);
addEventListener("mouseout", hoverOff);
addEventListener("resize", reSize);




export function reSize(){
    if (window.innerWidth<window.innerHeight){
        document.getElementById("rightHigherButton").style.paddingTop="5px";
        document.getElementById("rightHigherButton").style.paddingBottom="5px";
        document.getElementById("rightLowerButton").style.paddingTop="5px";
        document.getElementById("rightLowerButton").style.paddingBottom="5px";
        document.getElementById("rightLowerButton").style.marginBottom="5px";

        document.getElementById("left-half").style.width="100%";
        document.getElementById("left-half").style.height="50%";
        document.getElementById("left-half").style.bottom="50%";
        document.getElementById("left-half").style.right="0%";

        document.getElementById("right-half").style.width="100%";
        document.getElementById("right-half").style.height="50%";
        document.getElementById("right-half").style.bottom="0%";
        document.getElementById("right-half").style.right="0%";

        document.getElementById("third-half").style.width="100%";
        document.getElementById("third-half").style.height="50%";
        document.getElementById("third-half").style.bottom="150%";
        document.getElementById("third-half").style.right="0%";

        document.getElementById("circle").style.width="50px";
        document.getElementById("circle").style.height="50px";
        document.getElementById("circle").style.fontSize="20px";
        document.getElementById("circle").style.lineHeight="50px";
        document.getElementById("circleR").style.width="50px";
        document.getElementById("circleR").style.height="50px";
        document.getElementById("circleR").style.fontSize="20px";
        document.getElementById("circleR").style.lineHeight="50px";
        document.getElementById("circleW").style.width="50px";
        document.getElementById("circleW").style.height="50px";
        document.getElementById("circleW").style.lineHeight="50px";
    } else {
        document.getElementById("rightHigherButton").style.paddingTop="20px";
        document.getElementById("rightHigherButton").style.paddingBottom="20px";
        document.getElementById("rightLowerButton").style.paddingTop="20px";
        document.getElementById("rightLowerButton").style.paddingBottom="20px";
        document.getElementById("rightLowerButton").style.marginBottom="15px";

        document.getElementById("left-half").style.width="50%";
        document.getElementById("left-half").style.height="100%";
        document.getElementById("left-half").style.bottom="0%";
        document.getElementById("left-half").style.right="50%";

        document.getElementById("right-half").style.width="50%";
        document.getElementById("right-half").style.height="100%"; 
        document.getElementById("right-half").style.bottom="0%";
        document.getElementById("right-half").style.right="0%";

        document.getElementById("third-half").style.width="50%";
        document.getElementById("third-half").style.height="100%";
        document.getElementById("third-half").style.bottom="0%";
        document.getElementById("third-half").style.right="150%";

        document.getElementById("circle").style.width="100px";
        document.getElementById("circle").style.height="100px";
        document.getElementById("circle").style.fontSize="40px";  
        document.getElementById("circle").style.lineHeight="100px";    
        document.getElementById("circleW").style.width="100px";
        document.getElementById("circleW").style.height="100px";
        document.getElementById("circleW").style.fontSize="40px";  
        document.getElementById("circleW").style.lineHeight="100px";    
        document.getElementById("circleR").style.width="100px";
        document.getElementById("circleR").style.height="100px";
        document.getElementById("circleR").style.fontSize="40px";  
        document.getElementById("circleR").style.lineHeight="100px";  
        
    
    }

    
}
reSize()


function hoverOn(pEvent) {
    if (pEvent.target.className.includes("clickHigherLowerButton")){
        if (pEvent.target["id"].includes("Higher") == true){
            hoverOnEffect(document.getElementById("rightHigherButton"))
        } else if (pEvent.target["id"].includes("Lower")){
            hoverOnEffect(document.getElementById("rightLowerButton"))
        }

    } else if (pEvent.target.className == "circleClick" || pEvent.target.classList.contains("circleClick")){
        if (restart == true) {
           restartGameHoverOn(document.getElementById("circleR"));
        } else {
            attemptHover = true;
        }
    }
}


export function restartGameHoverOn(target) {
        document.getElementById("circleW").style.transition = "0.4s";
        document.getElementById("circleW").style.background = "darkgrey";
        document.getElementById("circleWimage").style.transition = "0.4s";
        document.getElementById("circleWimage").style.filter = "grayscale(100%)";
        document.getElementById("circleWimage").style.rotate = "360deg";

}

export function restartGameHoverOff(target) {
    document.getElementById("circleW").style.transition = "0.4s";
    document.getElementById("circleW").style.background = "red";
    document.getElementById("circleWimage").style.transition = "0.4s";
    document.getElementById("circleWimage").style.filter = "grayscale(0%)";
    document.getElementById("circleWimage").style.rotate = "0deg";
}


export function hoverOnEffect(object){
    object.style.transition="0.2s";
    object.childNodes[1].style.transition="0.2s";
    object.style.backgroundColor="white";
    object.childNodes[1].style.filter = "brightness(0%)";
    object.childNodes[1].style.paddingLeft = "10px";
    object.style.color="black";  
}

export default function hoverOffEffect(object){
    object.style.transition="0.2s";
    object.childNodes[1].style.transition="0.2s";
    object.style.backgroundColor="transparent";
    object.childNodes[1].style.filter = "brightness(100%)";
    object.childNodes[1].style.paddingLeft = "5px";
    object.style.color="rgb(253, 253, 115)";   
}


function hoverOff(pEvent) {
    if (pEvent.target.className.includes("clickHigherLowerButton")){

        if (pEvent.target["id"].includes("Higher")){
            hoverOffEffect(document.getElementById("rightHigherButton"))
        } 
        if (pEvent.target["id"].includes("Lower")){
            hoverOffEffect(document.getElementById("rightLowerButton"))
        }
    } else if (pEvent.target.className == "circleClick"|| pEvent.target.classList.contains("circleClick")){
        if (restart == true) {
           restartGameHoverOff(document.getElementById("circleR"));
        }  else {
            attemptHover = false;
        }
    }  
}





