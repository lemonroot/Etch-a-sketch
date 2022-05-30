
const container = document.getElementById("gridcontainer");

function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

function hoverEvent(){
    const items = document.querySelectorAll(".grid-item");
    console.log(items);

    items.forEach((item) => {
        item.addEventListener("mouseover", function(e) {
            item.setAttribute("style", "background-color: #ddd");
        });
        item.addEventListener("mouseout", function(e) {
            item.setAttribute("style", "background-color: white");
        });
    });
}

function sizeButton(){
    let size;
    const button = document.getElementById("size");

    button.addEventListener("click", function(e) {
        size = prompt("Please input a number from 4-100.");
        if(size < 10 || size > 100){
            alert("Invalid size!");
        } else{resizeGrid(size)};
    });
}

function resizeGrid(size){
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => {
        cell.remove();
    });
    makeRows(size, size);
}

let rows = 16;
let cols = 16;
makeRows(rows, cols);
hoverEvent();
sizeButton();