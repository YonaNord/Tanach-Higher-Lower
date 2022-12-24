import ppl from '../jsons/test.json' assert {type: 'json'};
import  hoverOffEffect from './style.js';

import { getImage } from './getImage.js';
import { endload } from './loadingScreen.js';
import { attemptHover, restartGameHoverOn }  from './style.js'; 

const leftTitle = document.getElementById("leftNameTitle");
const leftNum = document.getElementById("leftCountTitle");
const rightTitle = document.getElementById("rightNameTitle");
const rightHigh = document.getElementById("rightHigherButton");
const rightLow = document.getElementById("rightLowerButton");
const rightNum = document.getElementById("rightCountTitle");
const circle = document.getElementById("circle");
const circleR = document.getElementById("circleR");
const circleW = document.getElementById("circleW");
const scoreT = document.getElementById("scoreTitle");
const lefthalf = document.getElementById("left-half");
const righthalf = document.getElementById("right-half");
const thirdhalf = document.getElementById("third-half");
const thirdTitle = document.getElementById("thirdNameTitle");
const thirdNum = document.getElementById("thirdCountTitle");


var score = 0;
var img = [];
var options = await twoOptions();
await endload();
export var restart = false;

addEventListener("mousedown", buttonClick)

function buttonClick(p) {
    if (p.target.className.includes("clickHigherLowerButton")){
        if (p.target["id"].includes("Higher") == true){
            checkAns("Higher")
        } else if (p.target["id"].includes("Lower")){
            checkAns("Lower")
        }
    } else if (p.target.className == "circleClick" || p.target.classList.contains("circleClick")){
        if (restart==true) {
            RestartClick()
        }
    }

}


async function checkAns(userAns){
    hoverOffEffect(rightHigh);
    hoverOffEffect(rightLow);
    rightHigh.style.display = "none";
    rightLow.style.display = "none";
    rightNum.style.display = "block";
    NumAnimation(ppl[options[1]], rightNum)
    let correctAns = (parseInt(ppl[`${options[0]}`]) >= parseInt(ppl[`${options[1]}`])) ? "Lower" : (parseInt(ppl[`${options[0]}`]) <= parseInt(ppl[`${options[1]}`])) ?  "Higher" : userAns;
    if (correctAns == userAns) {Animation(circleR, circleW, true); await sleep(2300); Continue(); score+=1; scoreT.innerHTML = `Score: ${score}`} else {Animation(circleW, circleR, false); await sleep(2000); restart = true; Restart()}

}
async function Continue() {
    document.getElementById("left-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[0]}")`;
    rightTitle.innerHTML = options[1];
    rightNum.innerHTML = ppl[options[1]];
    options = await anotherOption()
    circle.style.display = "none";
    if (window.innerWidth>window.innerHeight){
        for (let i = 0;i<=75;i++) {
            lefthalf.style.right = `${i/1.5}%`;
            righthalf.style.right = `${i/1.5-50}%`;
            thirdhalf.style.right = `${i/1.5+50}%`;
            await sleep(10);
        }
    } else if (window.innerWidth<window.innerHeight){
        for (let i = 0;i<=75;i++) {
            lefthalf.style.bottom = `${i/1.5}%`;
            righthalf.style.bottom = `${i/1.5-50}%`;
            thirdhalf.style.bottom = `${i/1.5}%`;
            await sleep(10);
        }

        
    } else {
        for (let i = 0;i<=75;i++) {
            lefthalf.style.right = `${i/1.5}%`;
            righthalf.style.right = `${i/1.5-50}%`;
            thirdhalf.style.right = `${i/1.5+50}%`;
            await sleep(10);
        }
    }
    await sleep (200)
    document.getElementById("third-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[0]}")`;
    thirdTitle.innerHTML = options[0];
    thirdNum.innerHTML = ppl[`${options[0]}`];
    circle.style.display = "block";

}

async function Restart() {
    restart = true;
    document.getElementById("circleW").style.cursor = "pointer";
    document.getElementById("circleWimage").style.cursor = "pointer";
    document.getElementById("circleWimage").src = "images/restart.webp"
    for (let i = 0;i<=10;i++) {
        lefthalf.style.filter = `blur(${i}px)`;
        righthalf.style.filter = `blur(${i}px)`;
        await sleep(20);
    }
    if (attemptHover == true) {
        restartGameHoverOn(document.getElementById("circleR"));
    }
}

async function RestartClick() {
    console.log("Restarting")
    location.reload();
}

async function Animation(ShowObj, HideObj, hide){
    ShowObj.style.transition = "all .5s ease-out";
    ShowObj.style.top = "50%";
    await sleep(1200);
    HideObj.style.display = "none";
    circle.style.overflow = "visible";
    await sleep(100)
    ShowObj.style.width = "400%";
    ShowObj.style.height = "400%";
    await sleep(500);
    if (hide == true) {
        ShowObj.style.width = "100%";
        ShowObj.style.height = "100%";

        await sleep(500)
        circle.style.overflow = "hidden";
        ShowObj.style.top = "150%";
        ShowObj.style.transition = "all .5s ease-out";
        circle.style.overflow = "hidden";
        HideObj.style.display = "inline";
    }


}

async function twoOptions() {

    rightHigh.style.display = "inline";
    rightLow.style.display = "inline";
    rightNum.style.display = "none";
    var random1 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
    var random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
    while (random1 == random2) {random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];}
    while(ppl[random1] == ppl[random2]){
        var random1 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
        var random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
        while (random1 == random2) {random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];}
    }
    
    img = [await getImage(random1), await getImage(random2)];
    await sleep(500);
    document.getElementById("left-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[0]}")`;
    document.getElementById("right-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[1]}")`;
    document.getElementById("third-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[0]}")`;
    leftTitle.innerHTML = random1; rightTitle.innerHTML = random2; thirdTitle.innerHTML = random1;
    NumAnimation(ppl[`${random1}`], leftNum);
    thirdNum.innerHTML = ppl[`${random1}`];
    return [random1, random2];

}

async function anotherOption() {
    var random1 = options[1];
    var random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
    while (random1 == random2 || random2 == options[1]) {random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];}
    while(ppl[random1] == ppl[random2]){
        var random1 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
        var random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];
        while (random1 == random2) {random2 = Object.keys(ppl)[Math.floor(Math.random() * Object.keys(ppl).length)];}
    }

    img = [await getImage(random1), await getImage(random2)];
    await sleep(500);
    document.getElementById("left-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[0]}")`;
    document.getElementById("right-half").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img[1]}")`;
    leftTitle.innerHTML = random1; rightTitle.innerHTML = random2; rightNum.style.display = "none"; rightHigh.style.display = "inline"; rightLow.style.display = "inline";
    leftNum.innerHTML = ppl[`${random1}`];    
    options = [random1, random2];
    options[0] = random1;
    options[1] = random2;

    return [random1, random2];
}

async function NumAnimation(num, item) {
    let prasenum =  (parseInt(num/20) >= 10) ? 20 : (parseInt(num/9) >= 5) ? 9 : (parseInt(num/8) >= 5) ? 8 
    : (parseInt(num/7) >= 5) ? 7 : (parseInt(num/6) >= 5) ? 6 : (parseInt(num/5) >= 5) ? 5 : (parseInt(num/4) >= 5) ? 4
    : (parseInt(num/3) >= 5) ? 3 : (parseInt(num/2) >= 5) ? 2 : 1;
    for (let i = 0;i<=num;i+=prasenum) {
        if (i+5 <= num) {
            item.innerHTML = i
            await sleep(10)
        } else {
            item.innerHTML = num
        }
    }
    item.innerHTML = num
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}