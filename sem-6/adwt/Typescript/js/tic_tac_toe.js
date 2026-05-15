const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const resetBtn = document.querySelector('.resetbtn');
let currplayer = 'X';
let gameactive = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "" && !gameactive)
            return;
        cell.textContent = currplayer;
        checkwinner();
        currplayer = currplayer === 'X' ? 'O' : 'X';
    });
});
function checkwinner() {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            result.textContent = `Player ${currplayer} wins!`;
            gameactive = false;
        }
    });
}
resetBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = "");
    result.textContent = "";
    currplayer = 'X';
    gameactive = true;
});
