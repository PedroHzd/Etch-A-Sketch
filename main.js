const blocks = document.querySelectorAll('.containerChildren');
// const containerRow = document.createElement('div');
const container = document.querySelector('.container');
const containerRow = document.querySelector('.containerRow');

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




blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'white';
    });
});

console.log([...blocks]);