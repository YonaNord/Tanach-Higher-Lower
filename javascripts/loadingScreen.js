import {reSize} from './style.js';

const bar = document.getElementById('colorload');
const text = document.getElementById('loading-text');
const screen = document.getElementById('loading-screen');
var loadings = true;

window.onload = async function() {
    reSize();
    await loading()
}

export async function endload(){
    loadings = false;
    screen.style.opacity = 0;
    await sleep(1000);
    screen.style.display = "none";
}

async function loading() {
    while (loadings==true) {
        for (let i = -20; i <= 115; i++) {
            bar.style.left = `${i}%`;
            if (i <= 30) {
                text.innerHTML = 'Loading.';
            } else if (i <= 60) {
                text.innerHTML = 'Loading..';
            } else {
                text.innerHTML = 'Loading...';
            }
            await sleep(10)
        }
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
