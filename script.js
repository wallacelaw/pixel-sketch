//initialise buttons
const eraserBtn = document.getElementById('eraser');
const resetBtn = document.getElementById('reset');
let grid = document.createElement('div');

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
            grid.addEventListener("mousedown", () => mouseDown = true);
            document.getElementById("container").appendChild(grid);
        }
        let nextLine = document.createElement("br");
        document.getElementById("container").appendChild(nextLine);
    }
}


// paint grids
function changeColor(e) {
    console.log(e.type);
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}


function resetGrid() {
    let gridCells = Array.from(document.getElementsByClassName('grid'));
    gridCells.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}

//On page load
createGrid();

