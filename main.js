const container = document.querySelector('.container'); // stays
const refreshPage = document.querySelector('.refreshPage'); // stays
const changeGridBtn = document.querySelector('.changeGrid'); // stays

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

// gets a random number from 0 - 255 (inclusive) for the rgb colors
let getRandomNumber = () => Math.floor(Math.random() * (255 - 0 + 1) + 0);

let calculateWidthHeight = (numberOfBlocks) => {
    return (1000 - (numberOfBlocks + 1)) / numberOfBlocks;
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

function createNewGrid(totalRows) {
    if (totalRows > 2) {
        creatingNewRows(totalRows - 2);
        let arrayOfRows = [...document.querySelectorAll(".containerRow")];
        let newBlocks = totalRows - 2;

        for (let i = 0; i < totalRows; i++) {
            creatingNewBlocks(newBlocks, arrayOfRows[i]);
        }

        for (let i = 2; i < (totalRows); i++) {
            creatingNewBlocks((totalRows - newBlocks), arrayOfRows[i]);
        }

        let containerChildren = document.querySelectorAll('.containerChildren');
        containerChildren.forEach((block) => {
            block.style.cssText = 
            `max-width: ${calculateWidthHeight(totalRows)}px; min-height: ${calculateWidthHeight(totalRows) - 1}px`;
        });
    }
}

refreshPage.addEventListener('click', () => {
    window.location.reload();
});

changeGridBtn.addEventListener('mouseover', () => {
    window.location.reload();
})

changeGridBtn.addEventListener('click', () => {
    let checkForNumber = prompt("How many squares do you want on a row?");
    let numberUserWants;

    if (checkForNumber <= 100 && checkForNumber > 0) {
        numberUserWants = parseInt(checkForNumber);
        createNewGrid(numberUserWants);
        changeColors();
    } else {
        alert("That wasn't a positive number!");
    }
});

changeColors();