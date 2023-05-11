const blocks = document.querySelectorAll('.containerChildren');
// const containerRow = document.createElement('div');
const container = document.querySelector('.container');
const containerRow = document.querySelector('.containerRow');
const refreshPage = document.querySelector('.refreshPage');
const changeGridBtn = document.querySelector('.changeGrid');

let numberUserWants = 0;

let creatingNewRows = (numberOfRows) => {
    for (let i = 0; i < numberOfRows; i++) {
        let containerRow = document.createElement('div');
        container.appendChild(containerRow);
        containerRow.classList.toggle('containerRow');
    }
};

let creatingNewBlocks = (numberOfBlocks) => {
    for (let i = 0; i < numberOfBlocks; i++) {
        let individualBlock = document.createElement('div');
        containerRow.appendChild(individualBlock);
        individualBlock.classList.toggle('containerChildren');
    }
};

let calculateWidthHeight = (numberOfBlocks) => {
    let widthAndHeight = 0;
    widthAndHeight = (1000 - (numberOfBlocks + 1)) / numberOfBlocks;
    return widthAndHeight;
};

let countingBlocks = () => {
    let arrayOfBlocks = [...blocks];
    return arrayOfBlocks.length;
}

blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'white';
    });
});

refreshPage.addEventListener('click', () => {
    window.location.reload();
});

//changes the global variable numberUserWants based on a prompt
changeGridBtn.addEventListener('click', () => {
    let checkForNumber = prompt("How many squares do you want on a row?");
    if (checkForNumber <= 100) {
        numberUserWants = checkForNumber;
    } else {
        alert("That wasn't a number!");
    }
});
