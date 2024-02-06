function createGrid(gridSize) {
    var grid = document.querySelector(".gridContainer");
    grid.innerHTML = ''; 
    var pixelSize = 960 / gridSize;
    for (var i = 0; i < gridSize * gridSize; i++) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('gridItem');
        newDiv.style.width = pixelSize + 'px';
        newDiv.style.height = pixelSize + 'px';
        newDiv.addEventListener('mouseover', function() {
            let colors = ["red", "blue", "pink", "purple", "yellow", "orange", "lightgreen", "lightblue", "lime", "magenta"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
        });
        grid.appendChild(newDiv);
    }
}

const restartButton = document.querySelector('#sizeChange');
restartButton.addEventListener('click', function() {   
    var userInput = prompt("Enter a new size: 2-100");
    if (userInput !== null && userInput < 100 && userInput > 2) {
        createGrid(userInput);
    } else {
        alert("Please enter a valid positive number for the size.");
    }    
});

document.addEventListener('DOMContentLoaded', function() {
    createGrid(10);
});
