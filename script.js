// let target = document.getElementById("firstTarget");
let target = document.getElementById("eye1");
let target2 = document.getElementById("eye2");
let target3 = document.getElementById("eye3");
let target4 = document.getElementById("eye4");

let imgBlock = document.getElementById("myStyle");
let imgBlock2 = document.getElementById("businessFlex");
let imgBlock3 = document.getElementById("sportsClub");
let imgBlock4 = document.getElementById("insultGen");


let showContent = () => {
    imgBlock.style.display = "block";
};
let showContent2 = () => {
    imgBlock2.style.display = "block";
};
let showContent3 = () => {
    imgBlock3.style.display = "block";
}
let showContent4 = () => {
    imgBlock4.style.display = "block";
}


let hideContent = () => {
    imgBlock.style.display = "none";
};
let hideContent2 = () => {
    imgBlock2.style.display = "none";
};
let hideContent3 = () => {
    imgBlock3.style.display = "none";
}
let hideContent4 = () => {
    imgBlock4.style.display = "none";
}
// target.addEventListener("mouseover", showContent);

target.onmouseover = showContent;
target.onmouseout = hideContent;

target2.onmouseover = showContent2;
target2.onmouseout = hideContent2;

target3.onmouseover = showContent3;
target3.onmouseout = hideContent3;

target4.onmouseover = showContent4;
target4.onmouseout = hideContent4;