let gameStartButton = document.querySelector('.game_start');
let inputNumber = document.querySelector('.input_number');
//make three digit number
let answer = ''

gameStartButton.addEventListener('click', function () {
    answer = Math.floor(Math.random() * (1000 - 100) + 100);
    console.log(answer);
})



inputNumber.addEventListener('onkeydown', enterkey)

function enterkey () {
    if (window.event.keyCode == 13) {
        if (inputNumber.value.length > 3 && typeof (inputNumber.value) != 'number') {
            alert("세자리 숫자를 입력해주세요.")
        }
    }
}