const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "#e7c90b", "#ff3389", "#c7a1ba", "#420420"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getColor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getColor(){
    return Math.floor(Math.random() * colors.length);
}

// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const button = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener('click', function(){
//     let hexColor = "#";
//     for(let i = 0; i < 6; i++){
//         hexColor = hexColor + hex[getColor()];
//     }
//     document.body.style.backgroundColor = hexColor;
//     color.textContent = hexColor;
// });
 
// function getColor(){
//     return Math.floor(Math.random() * hex.length);
// }
