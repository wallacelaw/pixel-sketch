// Author: Wallace Law

let drawingMode = 'draw';

//initialise buttons
const drawBtn = document.getElementsByClassName('draw')[0];
const eraserBtn = document.getElementsByClassName('eraser')[0];
const resetBtn = document.getElementById('reset');

drawBtn.onclick = () => changeMode('draw');
eraserBtn.onclick = () => changeMode('erase');
resetBtn.onclick = () => resetGrid();

// set initial mousedown state to allow hold and click drawing
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Create 16x16 grid of square divs
function createGrid() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener("mouseover", changeColor);
            grid.addEventListener("mousedown", changeColor);
            document.getElementById("container").appendChild(grid);
        }
        let nextLine = document.createElement("br");
        document.getElementById("container").appendChild(nextLine);
    }
}

function changeMode(mode) {
    drawingMode = `${mode}`;
    console.log(drawingMode);
}

// paint grids
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (drawingMode === 'draw') {
        e.target.style.backgroundColor = 'black';
    } else if (drawingMode === 'erase') {
        e.target.style.backgroundColor = 'white';
    }
}


function resetGrid() {
    let gridCells = Array.from(document.getElementsByClassName('grid'));
    gridCells.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}

//On page load
createGrid();

