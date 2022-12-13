let target = document.getElementById("firstTarget");
let imgBlock = document.getElementById("myStyle")
let showContent = () => {
    imgBlock.style.display = 'block';
};
let hideContent = () => {
    imgBlock.style.display = 'none';
};
// target.addEventListener("mouseover", showContent);
target.onmouseover = showContent;
target.onmouseout = hideContent;