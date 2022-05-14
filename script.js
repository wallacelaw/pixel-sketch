
// set initial mousedown state to allow hold and click drawing
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Create 16x16 grid of square divs
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener("mouseover", changeColor);
        grid.addEventListener("mousedown", () => mouseDown = true);
        document.getElementById("container").appendChild(grid);
    }
    let jump = document.createElement("br");
    document.getElementById("container").appendChild(jump);
}

function changeColor(e) {
    console.log(e.type);
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}

