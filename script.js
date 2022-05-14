// Author: Wallace Law

let drawingMode = 'draw';
let gridSize = 16;

//initialise elements
const drawBtn = document.getElementsByClassName('draw')[0];
const eraserBtn = document.getElementsByClassName('eraser')[0];
const resetBtn = document.getElementById('reset');
const gridSlider = document.getElementById('gridsize');
const sizeLabel = document.getElementById('sizelabel');

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
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.cssText = `width: ${600/gridSize}px; height: ${600/gridSize}px`;
            grid.addEventListener("mouseover", changeColor);
            grid.addEventListener("mousedown", changeColor);
            document.getElementById("container").appendChild(grid);
        }
        let nextLine = document.createElement("br");
        document.getElementById("container").appendChild(nextLine);
    }
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
    document.getElementById('container').innerHTML = '';
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
