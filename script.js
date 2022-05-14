// Author: Wallace Law

let drawingMode = 'draw';
let gridSize = 16;

//initialise elements
const drawBtn = document.getElementsByClassName('draw')[0];
const eraserBtn = document.getElementsByClassName('eraser')[0];
const resetBtn = document.getElementById('reset');
const gridSlider = document.getElementById('gridsize');
const sizeLabel = document.getElementById('sizelabel');
let gridContainer = document.getElementById('container');

drawBtn.onclick = () => changeMode('draw');
eraserBtn.onclick = () => changeMode('erase');
resetBtn.onclick = () => resetGrid();
gridSlider.onchange = () => changeSize();

// set initial mousedown state to allow hold and click drawing
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Create 16x16 grid of square divs
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
            grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener("mouseover", changeColor);
            grid.addEventListener("mousedown", changeColor);
            document.getElementById("container").appendChild(grid);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}

// change drawing mode between draw and erase
function changeMode(mode) {
    drawingMode = `${mode}`;
    console.log(drawingMode);
}

// paint grids
function changeColor(e) {
    let color = document.getElementById('colorpicker').value;
    if (e.type === 'mouseover' && !mouseDown) return
    if (drawingMode === 'draw') {
        e.target.style.backgroundColor = color;
    } else if (drawingMode === 'erase') {
        e.target.style.backgroundColor = 'white';
    }
}

function changeSize() {
    gridSize = gridSlider.value;
    sizeLabel.innerHTML= `${gridSize} x ${gridSize}`;
    gridContainer.innerHTML = '';
    createGrid();
}

function resetGrid() {
    let gridCells = Array.from(document.getElementsByClassName('grid'));
    gridCells.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}


//On page load
gridSlider.value = gridSize;
changeSize();
