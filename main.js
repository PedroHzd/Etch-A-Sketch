const container = document.querySelector('.container'); // stays
const refreshPage = document.querySelector('.refreshPage'); // stays
const changeGridBtn = document.querySelector('.changeGrid'); // stays

let numberUserWants = 5;

let creatingNewRows = (numberOfRows) => {
    for (let i = 0; i < numberOfRows; i++) {
        let containerRow = document.createElement('div');
        container.appendChild(containerRow);
        containerRow.classList.toggle('containerRow');
    }
};

let creatingNewBlocks = (numberOfBlocks, indexOfContainerRow) => {
    for (let i = 0; i < numberOfBlocks; i++) {
        let individualBlock = document.createElement('div');
        individualBlock.classList.toggle('containerChildren');
        indexOfContainerRow.appendChild(individualBlock);
    }
};

// gets a random number from 0 - 255 (inclusive)
let getRandomNumber = () => Math.floor(Math.random() * (255 - 0 + 1) + 0);

let calculateWidthHeight = (numberOfBlocks) => {
    let widthAndHeight = 0;
    widthAndHeight = (1000 - (numberOfBlocks + 1)) / numberOfBlocks;
    return widthAndHeight;
};

function changeColors() {
    const blocks = document.querySelectorAll('.containerChildren');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 
            `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
        });
    });
}

refreshPage.addEventListener('click', () => {
    window.location.reload();
});

//changes the global variable numberUserWants based on a prompt
changeGridBtn.addEventListener('click', () => {
    let checkForNumber = prompt("How many squares do you want on a row?");
    if (checkForNumber <= 100 && checkForNumber > 0) {
        numberUserWants = checkForNumber;
    } else {
        alert("That wasn't a positive number!");
    }
});

function createNewGrid(totalRows) {
    if (totalRows !== 4 && totalRows > 4) {
        creatingNewRows(totalRows - 4);
        let arrayOfRows = [...document.querySelectorAll(".containerRow")];
        let newBlocks = totalRows - 4;

        for (let i = 0; i < totalRows; i++) {
            creatingNewBlocks(newBlocks, arrayOfRows[i]);
        }

        for (let i = 4; i < (totalRows); i++) {
            creatingNewBlocks((totalRows - newBlocks), arrayOfRows[i]);
        }

        let containerChildren = document.querySelectorAll('.containerChildren');
        containerChildren.forEach((block) => {
            block.style.cssText = 
            `max-width: ${calculateWidthHeight(totalRows)}px; min-height: ${calculateWidthHeight(totalRows) - 1}px`;
        });
    }
}

createNewGrid(10);
changeColors();



