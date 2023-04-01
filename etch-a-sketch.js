createGrid();

function createGrid() {
    const container = document.querySelector('.container');
    let size = 100;

    for (let col = 0; col < size; col++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');

        for (let row = 0; row < size; row++) {
            const square = document.createElement('div');
            square.classList.add('row-square');
            rowContainer.appendChild(square);
        }
        container.appendChild(rowContainer);
    }
}

const squares = document.querySelectorAll('.row-square');
squares.forEach((square) => {

    square.addEventListener('mouseenter', function () {
        square.classList.add('filled');
    });

});
