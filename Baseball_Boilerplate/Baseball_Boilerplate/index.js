let gameStartButton = document.querySelector('.game_start');
let inputNumber = document.querySelector('.input_number');

//make three digit number
let answer = ''

gameStartButton.addEventListener('click', function () {
    answer = Math.floor(Math.random() * (1000 - 100) + 100);
    console.log(answer);
})
//input number event
inputNumber.addEventListener('onkeydown', enterkey)
//enter키 이벤트
function enterkey () {
    if (window.event.keyCode == 13) {
        if (inputNumber.value.length > 3) {
            alert("세자리 숫자를 입력해주세요.")
        }
        // 각 자릿수마다 비교. strike, ball, out 개수 구하기.
        let strikeCount = 0;
        let ballCount = 0;
        let outCount = 0;
        let gameCount = 0;
        
        for (let i = 0; i < 3; i++) {
            if (answer.toString()[i] === inputNumber.value[i]) {
                strikeCount++;
                ballCount--;
            } else if (strikeCount !== 0) {
                outCount = 0;
            } else {
                outCount++;
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (answer.toString()[i] === inputNumber.value[j]) {
                    ballCount++;
                } else if (ballCount !== 0) {
                    outCount = 0;
                }
            }
        }
        
        //정답 일 때와 오답일 때
        if (strikeCount === 3 && inputNumber.value !== '') {
            alert("정답입니다!")
            inputNumber.value = '';
            gameCount = 0;
            result2 = ''
        } else if (strikeCount !== 3) { //답이 틀리면
            gameCount += 1;
            if (gameCount > 10) {
                alert("게임오버! 정답은 " + answer);
                inputNumber.value = '';
                gameCount = 0;
            }
        }
        console.log(gameCount)
        // enter키 누를 때마다 이닝 수 증가.


        let result2 = (gameCount + "회" + " " + "[Your Number]: " + inputNumber.value + " " + "Strike: " + strikeCount + " " + "Ball: " + ballCount + " " + "Out: " + outCount)

        return result.innerHTML = result.innerHTML + result2 + "</br>";
    }
}
