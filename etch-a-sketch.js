const container = document.querySelector('.container');
let size = 16;
createGrid(size);

const changeResolutionButton = document.querySelector('.resolution-btn');
changeResolutionButton.addEventListener('click', function () {
    newSize = parseInt(prompt('Enter a grid size(limit of 100): '));

    if (newSize > 100) {
        alert("Maximum allowed is 100");
    } else if (newSize <= 0) {
        alert("Grid size cannot be less then or equal to 0!");
    } else if (newSize > 0 && newSize <= 100) {
        const rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            container.removeChild(row);
        });
        createGrid(newSize);
    } else {
        alert("Please enter a valid number!");
    }
});

const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', function () {
    const filledSquares = document.querySelectorAll(".row-square.filled");
    filledSquares.forEach((square) => {
        square.classList.remove('filled');
    });
});


function createGrid(size) {

    for (let row = 0; row < size; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');

        for (let col = 0; col < size; col++) {
            const square = document.createElement('div');
            square.classList.add('row-square');
            rowContainer.appendChild(square);
        }
        container.appendChild(rowContainer);
    }

    addFillEffect();
}

function addFillEffect() {
    const squares = document.querySelectorAll('.row-square');
    squares.forEach((square) => {

        square.addEventListener('mouseenter', function () {
            square.classList.add('filled');
        });

    });
}
