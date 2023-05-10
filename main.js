const blocks = document.querySelectorAll('.containerChildren');

blocks.forEach((block) => {
    block.addEventListener('click', () => {
        block.style.backgroundColor = 'white';
    });
});