let gameStartButton = document.querySelector('.game_start');
let inputNumber = document.querySelector('.input_number');
//make three digit number
let answer = '';
function makeNum () {
    answer = Math.floor(Math.random() * (1000 - 100) + 100);
};
//확인용
makeNum();
console.log(answer);



// click game start button!
gameStartButton.addEventListener('click', makeNum);
//input number event
inputNumber.addEventListener('onkeydown', enterkey);
//enter 치면 실행되는 함수
function enterkey () {
    if (window.event.keyCode == 13) {
        // 각 자릿수마다 비교. strike, ball 개수 구하기.
        let strikeCount = 0;
        let ballCount = 0;
        

        // strike와 ball 판정.
        for (let i = 0; i < 3; i++) {
            if (answer.toString()[i] === inputNumber.value[i]) {
                strikeCount++;
                ballCount--;
            };
        };

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (answer.toString()[i] === inputNumber.value[j]) {
                    ballCount++;
                };
            };
        };

        let gameCount = 0;
        if (answer !== inputNumber.value) {
           gameCount=gameCount + 1
        }
        console.log(gameCount);

        let scoreBoard = ("[Your Number]: " + inputNumber.value + " " + "Strike: " + strikeCount + " " + "Ball: " + ballCount);
        
        //정답 일 때,
        if (answer == inputNumber.value) {
            result.innerHTML = ("정답입니다!")
            inputNumber.value = '';
            gameCount = 0;
        } else { //답이 틀리면
            result.innerHTML += scoreBoard + "</br>";
            if (gameCount > 10) {
                alert("게임오버! 정답은 " + answer);
                inputNumber.value = '';
                gameCount = 0;
            }
        };
        // 세자리 이상 입력하면 알림창 뜨기
        if (inputNumber.value.length > 3) {
            alert('세자리 숫자를 입력해주세요.');
            result.innerHTML = '';
        };
    };
};
