const btn = document.querySelector('button');
const change = document.querySelector('span');
const body = document.querySelector('body');

function makeHexCode (length) {
    let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let result = '#';
    
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * hexNumbers.length);

        result += hexNumbers[randomNum]
    }

    return result;
}
btn.addEventListener("click", function () {
    change.textContent = makeHexCode(6)
    body.style.backgroundColor = makeHexCode(6);
})

