// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';


// Create 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener("click", changeColor);
        document.getElementById("container").appendChild(grid);
    }
    let jump = document.createElement("br");
    document.getElementById("container").appendChild(jump);
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

