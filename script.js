const container = document.getElementById('grid-container');

function createGrid(size) {
    container.innerHTML = ''; // Clear the existing grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function changeGridSize() {
    const newSize = prompt('Enter the number of squares per side (up to 100):');
    const size = parseInt(newSize, 10);

    if (isNaN(size) || size <= 0 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(size);
    }
}

// Initial grid creation
createGrid(16);
