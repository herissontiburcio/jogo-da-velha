const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn
};

const handleClick = (e) => {

    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(cell, classToAdd);



    swapTurns();
};

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, {once:true})
}
