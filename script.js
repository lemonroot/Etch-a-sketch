
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
            item.setAttribute("style", "background-color: gray");
        });
        item.addEventListener("mouseout", function(e) {
            item.setAttribute("style", "background-color: white");
        });
    });
}

makeRows(16,16);
hoverEvent();